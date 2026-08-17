const {expect} = require('@playwright/test');
class loginPage {
    constructor(page) {
        this.page = page;
        this.username = "#email1";
        this.password = "#password1";
        this.loginButton = "//button[@type='submit']";
        
        }
    async loginToApp(username, password) {
        await this.page.locator(this.username).type(username);
        await this.page.locator(this.password).type(password);
        await this.page.locator(this.loginButton).click();
        }
    
}
module.exports = loginPage;
