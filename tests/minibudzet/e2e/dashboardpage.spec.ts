import { expect, test } from "../fixtures";

test.describe("Dashboard page checks", () => {
  test.beforeEach(async ({ dashboardPage }) => {
    console.log("Starting test: ", test.info().title);
    await dashboardPage.goto();
  });

  test("should have dashboard elements when page is loaded", async ({ dashboardPage }) => {
    await expect(dashboardPage.page).toHaveURL("/main/dashboard");
  });
});