import { Locator, Page } from "@playwright/test";

export class LoginPage {
  readonly page: Page;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly errorMessage: Locator;

  readonly testUserEmail: string = process.env.MINIBUDZET_TEST_USER_MAIL || '';
  readonly testUserPassword: string = process.env.MINIBUDZET_TEST_USER_PASSWORD || '';

  constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.locator('input[name="email"]');
    this.passwordInput = page.locator('input[name="password"]');
    this.loginButton = page.locator('button[type="submit"]');
    this.errorMessage = page.locator('.error-message');
  }

  async goTo() {
    await this.page.goto("/login");
  }
}