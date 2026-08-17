const {expect, test} = require('@playwright/test');

// test("Playwright keyboard press", async ({page}) => {
//     await page.goto("https://www.google.com/");
//     await page.title("Google");
//     await page.locator("#APjFqb").type("Playwright");
//     //await page.getByValue("Google Search").click();
//     //await page.keyboard.press("Enter");
//     await page.keyboard.press("Control+A");
//     await page.keyboard.press("Control+C");
//     await page.locator("#APjFqb").type("Manoranjan Panigrahi");
//     await page.keyboard.press("Enter");
//     await page.waitForTimeout(5000);

// })

test("Playwright Alert dialog boxes", async({page}) => {
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");
    
    await page.on("dialog",async d => {
        expect(d.type()).toContain("confirm");
        expect(d.message()).toContain("I am a JS Confirm");
        d.accept();
        //d.dismiss();
    })
    await page.locator("//button[text()='Click for JS Confirm']").click();
    await page.waitForTimeout(5000);

})
