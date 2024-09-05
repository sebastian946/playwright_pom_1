const {page,expect} = require('@playwright/test');

 class registerPage{
    constructor(page){
        this.page = page;
        this.link_notYetCustomer = page.getByRole('link',{name:'Not yet a customer?'});
        this.input_email = page.locator('//input[@id="emailControl"]');
        this.input_password = page.locator('//input[@id="passwordControl"]');
        this.input_repeatPassword = page.locator('//input[@id="repeatPasswordControl"]');
        this.select_securityQuestion = page.getByRole('combobox',{name:'Selection list for the security question'});
        this.input_answer = page.locator('//input[@id="securityAnswerControl"]');
        this.button_register = page.locator('//button[@id="registerButton"]');
        this.alert_registerSuccess = page.locator('//span[@class="mat-simple-snack-bar-content"]'); //Registration completed successfully. You can now log in.
    }
    async clickLinkNotYetCustomer(){
        await this.link_notYetCustomer.click();
    }
    async inputEmail(email){
        await this.input_email.fill(email);
    }
    async inputPassword(password){
        await this.input_password.fill(password);
    }
    async inputRepeatPassword(repeatPassword){
        await this.input_repeatPassword.fill(repeatPassword);
    }
    async clickSecurityQuestion(){
        await this.select_securityQuestion.click();
    }
    async clickOptionSecurityQuestion(option){
        await this.page.locator(`//mat-option[@id="mat-option-${option}"]`).click();
    }
    async inputAnswer(answer){
        await this.input_answer.fill(answer);
    }
    async clickButtonRegister(){
        await this.button_register.click();
    }
    async validateResult(){
        await expect(this.page).toHaveURL(/login/);
    }
    async fillRegisterForm(email,password,repeatPassword,option,answer){
        await this.clickLinkNotYetCustomer();
        await this.inputEmail(email);
        await this.inputPassword(password);
        await this.inputRepeatPassword(repeatPassword);
        await this.clickSecurityQuestion();
        await this.clickOptionSecurityQuestion(option);
        await this.inputAnswer(answer);
    }
}
module.exports = registerPage;