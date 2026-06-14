import { test, expect } from "../fixtures/home-fixtures";

test.describe("Homepage checks", () => {
    test.beforeEach(async ({ homePage }) => {
        console.log("Starting test: ", test.info().title);
    });

    test("User go to start and see the content", async ({ homePage }) => {
        await homePage.goTo();
        await homePage.clickStart();
        await expect(homePage.page.locator('h1', { hasText: "Tworzę nowoczesne rozwiązania IT"})).toBeVisible();
    });

    test("User go to about and see the content", async ({ homePage }) => {
        await homePage.goTo();
        await homePage.clickAbout();
        await expect(homePage.page.locator('h2', { hasText: "O Pixel Mount Software" })).toBeVisible();
    });

    test("User go to contact and see the content", async ({ homePage }) => {
        await homePage.goTo();
        await homePage.clickContact();
        await expect(homePage.page.locator('h2', { hasText: "Skontaktuj się" })).toBeVisible();
    });
});