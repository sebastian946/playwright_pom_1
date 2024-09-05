
class HomePage{
    constructor(page){
        this.page = page;
        this.button_dismis = page.locator('//span[.="Dismiss"]');
        this.icon_account = page.locator('//span[.=" Account "]');
        this.button_login = page.locator('//button[@id="navbarLoginButton"]');
    }
    async clickButtonDismiss(){
        await this.button_dismis.click();
    }
    async clickIconAccount(){
        await this.icon_account.click();
    }
    async clickButtonIconLogin(){
        await this.button_login.first().click();
    }
    async moveHomePage(){
        await this.clickButtonDismiss();
        await this.clickIconAccount();
        await this.clickButtonIconLogin();
    }
}

module.exports = HomePage;