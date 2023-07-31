import { Given, Then, When } from "@cucumber/cucumber";

import {chromium,Page,Browser} from "@playwright/test";

let browser: Browser;
let page: Page;

Given('A user has landed user credential page', async function () {
    browser = await chromium.launch({headless:false});
    page = await browser.newPage();
    await page.goto("https://ecommerce-playground.lambdatest.io/index.php?route=account/login");
});

When('the user enters {string} in the Login field', async function (username) {
    await page.fill("//input[@name='email']",username);
});

Then('the user enters {string} in the password field', async function (password) {
    await page.fill("//input[@name='password']", password);
});

Then('the user clicks the Login button', async function () {
    await page.click("//input[@type='submit']");
});
