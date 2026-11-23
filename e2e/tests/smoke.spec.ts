import { expect, test } from '@playwright/test';

test('signed-out visitors land on the login page, which reaches the API', async ({ page }) => {
  const userCount = page.waitForResponse(resp => resp.url().endsWith('/api/v1/auth/user-count'));
  await page.goto('/home');
  await expect(page).toHaveURL(/\/login$/);
  expect((await userCount).status()).toBe(200);
  await expect(page.getByLabel('Username')).toBeVisible();
});

test('a new account can log in and add an event', async ({ page, request, baseURL }) => {
  const username = `e2e${Date.now()}`;
  const password = 'Passw0rd!e2e';
  expect((await request.post('/api/v1/auth/create-account', { data: { username, password } })).ok()).toBe(true);

  const errors: string[] = [];
  // Resource load failures are checked per origin below: the about card links a dead third-party image.
  page.on('console', msg => { if (msg.type() === 'error' && !msg.text().startsWith('Failed to load resource')) errors.push(msg.text()); });
  page.on('pageerror', err => errors.push(err.message));
  page.on('response', resp => { if (resp.status() >= 400 && resp.url().startsWith(baseURL)) errors.push(`${resp.status()} ${resp.url()}`); });

  await page.goto('/login');
  await page.getByLabel('Username').fill(username);
  await page.getByLabel('Password').fill(password);
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page).toHaveURL(/\/home$/);
  await expect(page.getByText(`, ${username}`)).toBeVisible();
  await expect(page.getByText('You have no events scheduled today')).toBeVisible();

  await page.getByRole('button', { name: 'Add Event' }).click();
  await page.getByLabel('Title').fill('E2E event');
  await page.getByLabel('Follow up Date').fill(new Date().toLocaleDateString('en-US'));
  await page.getByRole('combobox', { name: 'Time' }).fill('3:30 PM');
  await page.getByRole('button', { name: /Save/ }).click();
  await expect(page.getByText('You have 1 events scheduled today')).toBeVisible();
  await expect(page.getByText('E2E event')).toBeVisible();
  await expect(page.getByText(/3:30 PM/)).toBeVisible();

  await page.getByRole('button', { name: 'Reports' }).click();
  await expect(page.getByText('There are 1 event(s) scheduled in').first()).toBeVisible();
  await page.getByRole('button', { name: 'Search' }).click();
  await expect(page).toHaveURL(/\/search$/);
  expect(errors).toEqual([]);
});
