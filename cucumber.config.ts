//To Import Cucumber Dependencies
import { Before, AfterAll, After, setDefaultTimeout, BeforeAll } from "@cucumber/cucumber";
//To Import Chromium & Test Dependencies
import { chromium, test } from "@playwright/test";

// in milliseconds
setDefaultTimeout(60000)

//To launch Chromium browser before the test
BeforeAll(async function () {
    global.browser = await chromium.launch({
        headless: false
    });
});

//To close the browser after the test
AfterAll(async function(){
    await global.browser.close();
});

// Create a new browser context and page per scenario
Before(async function () {
    global.context = await global.browser.newContext();
    global.page = await global.context.newPage();
 });

// Cleanup after each scenario
After(async function () {
    await global.page.close();
    await global.context.close();
 });
