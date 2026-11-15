import { defineConfig, devices } from '@playwright/test';

// The suite targets an already running stack. Start it with ./run.sh or .\run.ps1
// (the launcher prints the real URL when 8080 is taken) and pass it via BASE_URL.
const baseURL = (process.env.BASE_URL ?? 'http://localhost:8080').replace(/\/+$/, '');

export default defineConfig({
  testDir: './tests',
  workers: 1,
  reporter: [['list']],
  use: { baseURL },
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
  ],
});
