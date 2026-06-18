import { test, expect } from "../fixtures";

test.describe("Homepage checks", () => {
    test.beforeEach(async ({ homePage }) => {
        console.log("Starting test: ", test.info().title);
    });

    test("should have correct title", async ({ homePage }) => {
        await homePage.goTo();
        await homePage.page.pause();
        await expect(homePage.page).toHaveTitle("Mini Budżet");
    });

    test("should load login page when login button is clicked", async ({ homePage }) => {
        await homePage.goTo();
        await homePage.loginButton.click();
        await expect(homePage.page).toHaveURL(/.*login/);
        await expect(homePage.page.locator('h2')).toHaveText("Logowanie");
    });

    test("should load registration page when registration button is clicked", async ({ homePage }) => {
        await homePage.goTo();
        await homePage.registrationButton.click();
        await expect(homePage.page).toHaveURL(/.*register/);
        await expect(homePage.page.locator('h2')).toHaveText("Rejestracja");
    });
});