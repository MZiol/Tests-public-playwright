import { Locator, Page } from "@playwright/test";

export class HomePage {
  readonly page: Page;
  readonly loginButton: Locator;

  constructor(page: Page) {
    this.page = page;

    this.loginButton = page.locator('a:has-text("Logowanie")');

  }

  async goTo() {
    await this.page.goto("/");
  }
}