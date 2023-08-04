import { Given, Then, When, setDefaultTimeout} from "@cucumber/cucumber";
import {expect} from "@playwright/test";
import { pageFixture } from "../hooks/pageFixture";

setDefaultTimeout(60*1000*5);

Given('A user has landed user credential page', async function () {
    /*browser = await chromium.launch({headless:false});
    page = await browser.newPage();*/
    //importing page object from pageFixture for using page object globally.
    await pageFixture.page.goto("https://ecommerce-playground.lambdatest.io/index.php?route=account/login");
});

Then('verify the URL of the Login page', async function () {
    //To check the URL
    await expect(pageFixture.page).toHaveURL("https://ecommerce-playground.lambdatest.io/index.php?route=account/login");
    //To check the Title of the page
    await expect(pageFixture.page).toHaveTitle("Account Login");
});

Then('the user enters {string} in the Login field', async function (username) {
    await pageFixture.page.fill("//input[@name='email']",username);
});

Then('the user enters {string} in the password field', async function (password) {
    await pageFixture.page.fill("//input[@name='password']", password);
});

Then('the user clicks the Login button', async function () {
    await pageFixture.page.click("//input[@type='submit']");
});

Then('the login should be success', async function () {
    await expect(pageFixture.page).toHaveURL("https://ecommerce-playground.lambdatest.io/index.php?route=account/account");
});

Then('the login should be failed', async function () {
    const validateTxt = pageFixture.page.locator("//div[text()=' Warning: No match for E-Mail Address and/or Password.']");
    console.log("The text present is "+ await validateTxt.textContent());
    //await expect(validateTxt).toHaveText(" Warning: No match for E-Mail Address and/or Password.");
    await expect(validateTxt).toBeVisible();
});
