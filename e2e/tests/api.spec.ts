import { expect, test } from '@playwright/test';

test('a login with an unknown username is rejected and the API keeps answering', async ({ request }) => {
  const login = await request.post('/api/v1/auth/login', { data: { username: 'nosuchuser', password: 'x' } });
  expect(login.status()).toBe(400);
  expect(await login.json()).toEqual({ message: 'incorrect credentials' });
  expect((await request.get('/api/v1/auth/user-count')).ok()).toBe(true);
});

test('an error thrown in an async route becomes a 500 and the API keeps answering', async ({ request }) => {
  const username = `api${Date.now()}`;
  const password = 'Passw0rd!api';
  await request.post('/api/v1/auth/create-account', { data: { username, password } });
  const token = await (await request.post('/api/v1/auth/login', { data: { username, password } })).json();
  // search without its query parameters throws inside the handler
  const search = await request.get('/api/v1/events/search', { headers: { Authorization: `Bearer ${token}` } });
  expect(search.status()).toBe(500);
  expect((await request.get('/api/v1/auth/user-count')).ok()).toBe(true);
});
