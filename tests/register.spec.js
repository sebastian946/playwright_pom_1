const {test,expect} = require('@playwright/test');
const registerPage = require('../pages/registerPage');
const HomePage = require('../pages/HomePage');
const {generateEmail,generatePassword,generateNum,generateAnswer} = require('../helper/generateData');
const url = 'https://juice-shop.herokuapp.com/#/';

test('Valid register page', async function ({page}) {
    const register = new registerPage(page);
    const home = new HomePage(page);
    await page.goto(url);
    const email = generateEmail();
    const password = generatePassword();
    const option = generateNum();
    const answer = generateAnswer();
    await home.moveHomePage();
    await register.fillRegisterForm(email,password,password,option,answer);
    await register.clickButtonRegister();
    await expect(register.validateResult()).toBeTruthy();
})