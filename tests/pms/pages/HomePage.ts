import { Page } from "@playwright/test";

export class HomePage {
  constructor(private page: Page) {
    this.page = page;
  }
}