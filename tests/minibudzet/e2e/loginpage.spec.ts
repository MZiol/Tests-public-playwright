import { test, expect } from "../fixtures";

test.describe("Login page checks", () => {
    test.beforeEach(async ({ loginPage }) => {
        console.log("Starting test: ", test.info().title);
        await loginPage.goTo();
    });

    test("should have login form elements when page is loaded", async ({ loginPage }) => {
        await expect(loginPage.usernameInput).toBeVisible();
        await expect(loginPage.passwordInput).toBeVisible();
        await expect(loginPage.loginButton).toBeVisible();
    });

    test("should show error message when login credentials are invalid", async ({ loginPage }) => {
        await loginPage.usernameInput.fill("invalid@example.com");
        await loginPage.passwordInput.fill("invalidpassword");
        await loginPage.loginButton.click();
        await expect(loginPage.errorMessage).toBeVisible();
    });

    test("should navigate to mainpage when successful login", async ({ loginPage }) => {
        await loginPage.usernameInput.fill("test@minibudzet.pl");
        await loginPage.passwordInput.fill("Testy12345678!");
        await loginPage.loginButton.click();
        await loginPage.page.waitForURL("/main/dashboard");
        await expect(loginPage.page).toHaveURL("/main/dashboard");
    });
});
