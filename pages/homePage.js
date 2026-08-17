const {expect} = require('@playwright/test');
class homePage {
    constructor(page) {
        this.page = page;
        this.ManageDashboard = "//span[normalize-space()='Manage']";
    }
    async verifyLogin(){
        await expect(this.page.locator(this.ManageDashboard)).toBeVisible();
        }
}

module.exports = homePage;