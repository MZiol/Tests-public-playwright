import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config({ path: 'tests/data.env' });

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',

  use: {
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },

  projects: [
    {
      name: 'pms-chromium',
      use: { 
        ...devices['Desktop Chrome'],
        baseURL: 'https://pixelmount.pl' 
      },
      testMatch: 'tests/pms/**/*.spec.ts',
    },
    {
      name: 'pms-firefox',
      use: { 
        ...devices['Desktop Firefox'],
        baseURL: 'https://pixelmount.pl' 
      },
      testMatch: 'tests/pms/**/*.spec.ts',
    },

    {
      name: 'minibudzet-chromium',
      use: { 
        ...devices['Desktop Chrome'],
        baseURL: 'https://minibudzet.pl'
       },
      testMatch: 'tests/minibudzet/**/*.spec.ts',
    },
    {
      name: 'minibudzet-firefox',
      use: { 
        ...devices['Desktop Firefox'],
        baseURL: 'https://minibudzet.pl'
       },
      testMatch: 'tests/minibudzet/**/*.spec.ts',
    },
  ],
});
