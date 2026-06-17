import { test, expect } from "../fixtures/home-fixtures";

test.describe("Homepage checks", () => {
    test.beforeEach(async ({ homePage }) => {
        console.log("Starting test: ", test.info().title);
    });

    test("should have correct title", async ({ homePage }) => {
        await homePage.goTo();
        await homePage.page.pause();
        await expect(homePage.page).toHaveTitle("Mini Budżet");
    });
});