import { Locator, Page } from "@playwright/test";

export class HomePage {
  readonly page: Page;

  readonly startButton: Locator;
  readonly aboutButton: Locator;
  readonly contactButton: Locator;

  constructor(page: Page) {
    this.page = page;

    this.startButton = page.locator('a:has-text("Start")');
    this.aboutButton = page.locator('a:has-text("O nas")');
    this.contactButton = page.locator('.btn-contact');
  }

  async goTo() {
    await this.page.goto("/");
  }

  async clickStart() {
    await this.startButton.click();
  }

  async clickAbout() {
    await this.aboutButton.click();
  }

  async clickContact() {
    await this.contactButton.click();
  }
}