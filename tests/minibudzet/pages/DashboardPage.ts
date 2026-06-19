import { Page } from "@playwright/test";
import { LoginPage } from "./LoginPage";

export class DashboardPage {
  readonly page: Page;
  readonly loginPage: LoginPage;

  constructor(page: Page) {
    this.page = page;
    this.loginPage = new LoginPage(page);
  }

  async goto() {
    await this.loginPage.goTo();
    await this.loginPage.usernameInput.fill("test@minibudzet.pl");
    await this.loginPage.passwordInput.fill("Testy12345678!");
    await this.loginPage.loginButton.click();
  }
}