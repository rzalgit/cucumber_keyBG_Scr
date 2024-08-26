import { Given, When, Then } from '@wdio/cucumber-framework';

import LoginPage from '../pageobjects/login.page.js';
import HomePage from '../pageobjects/home.page.js';

Given('user is on Login page', async() => {
    await LoginPage.open()
})


When('user click login button', async() => {
    await LoginPage.ClickButton()
})

Then('user should be redirected to homepage', async() => {
    await HomePage.validateOnHalamanHome()
})

When('user login using {string} as username and {string} as password', async(username, password) => {
    await LoginPage.inputUsername(username)
    await LoginPage.inputPassword(password)
    await LoginPage.ClickButton()
})

Then('user should see error message {string}',async(errorMessage) => {
    await LoginPage.validateWrongPassword(errorMessage)
})

Then('user adds item to the cart', async() => {
    await HomePage.addItemToCart()
})

Then('user navigates to the cart', async() => {
    await HomePage.goToCart()
    await HomePage.validateOnCheckoutPage()
})



