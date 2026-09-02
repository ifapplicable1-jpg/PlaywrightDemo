//@ts-check
const {test, expect} = require('@playwright/test');
test.describe('First Test', () => {

    test("Verify the title of page", async ({page}) => {
        await page.goto("https://playwright.dev/")
        await expect(page).toHaveTitle(/Playwright/);
    });

    test("Click on started link", async ({page}) => {
        await page.goto("https://playwright.dev/")
        await page.getByRole('link', { name: 'Get started' }).click();
        await expect(page).toHaveURL(/.*intro/);
    });


});

