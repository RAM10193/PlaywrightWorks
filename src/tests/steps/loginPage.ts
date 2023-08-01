import { Given, Then, When, setDefaultTimeout} from "@cucumber/cucumber";

import {chromium,Page,Browser, expect} from "@playwright/test";

let browser: Browser;
let page: Page;

setDefaultTimeout(60000);

Given('A user has landed user credential page', async function () {
    browser = await chromium.launch({headless:false});
    page = await browser.newPage();
    await page.goto("https://ecommerce-playground.lambdatest.io/index.php?route=account/login");
    //To check the URL
    await expect(page).toHaveURL("https://ecommerce-playground.lambdatest.io/index.php?route=account/login");
    //To check the Title of the page
    await expect(page).toHaveTitle("Account Login");
});

Then('verify the URL of the Login page', async function () {
    //To check the URL
    await expect(page).toHaveURL("https://ecommerce-playground.lambdatest.io/index.php?route=account/login");
    //To check the Title of the page
    await expect(page).toHaveTitle("Account Login");
});

Then('the user enters {string} in the Login field', async function (username) {
    await page.fill("//input[@name='email']",username);
});

Then('the user enters {string} in the password field', async function (password) {
    await page.fill("//input[@name='password']", password);
});

Then('the user clicks the Login button', async function () {
    await page.click("//input[@type='submit']");
});

Then('the login should be success', async function () {
    await expect(page).toHaveURL("https://ecommerce-playground.lambdatest.io/index.php?route=account/account");
    await browser.close();
});

Then('the login should be failed', async function () {
    const validateTxt = page.locator("//div[text()=' Warning: No match for E-Mail Address and/or Password.']");
    console.log("The text present is "+ await validateTxt.textContent());
    //await expect(validateTxt).toHaveText(" Warning: No match for E-Mail Address and/or Password.");
    await expect(validateTxt).toBeVisible();
    await browser.close();
});
