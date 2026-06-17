import { Locator, Page } from "@playwright/test";

export class HomePage {
  readonly page: Page;
  readonly loginButton: Locator;
  readonly registrationButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.loginButton = page.locator('a.login-link:has-text("Logowanie")');
    this.registrationButton = page.locator('a.register-btn:has-text("Rejestracja")');
  }

  async goTo() {
    await this.page.goto("/");
  }
}