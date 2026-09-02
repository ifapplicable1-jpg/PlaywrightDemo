const {test, expect} = require('@playwright/test');
const loginPagePOM = require('/home/runner/work/PlaywrightDemo/PlaywrightDemo/pages/loginpage.js');
const homePagePOM = require("/home/runner/work/PlaywrightDemo/PlaywrightDemo/pages/homePage");

test("Playwright Data Driven Testing", async({page}) => {
    await page.goto("https://freelance-learn-automation.vercel.app/login");

    const loginPage = new loginPagePOM(page);    
    await loginPage.loginToApp("admin@email.com", "admin@123");
    
    const homePage = new homePagePOM(page);
    await homePage.verifyLogin();

    await page.waitForTimeout(5000);
});
