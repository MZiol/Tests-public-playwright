import { test as base, Page } from '@playwright/test';
import { HomePage } from '../pages/HomePage';

type HomeFixtures = {
  homePage: HomePage;
};

export const test = base.extend<HomeFixtures>({
  homePage: async ({ page }, use) => {
    const homePage = new HomePage(page);
    await use(homePage);
  },
});

export { expect } from '@playwright/test';