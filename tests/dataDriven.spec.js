const {test, expect} = require('@playwright/test');
const testData = JSON.parse(JSON.stringify(require("../Data/logindetails.json")));

test("Playwright Data Driven Testing", async({page}) => {
    await page.goto("https://freelance-learn-automation.vercel.app/login");
    for (const data of testData) {
        await page.locator("#email1").type(data.username);
        await page.locator("#password1").type(data.password);
        await page.locator("//button[@type='submit']").click();
        await page.waitForTimeout(5000);
        await page.locator("#email1").fill("");
        await page.locator("#password1").fill("");
    }
});