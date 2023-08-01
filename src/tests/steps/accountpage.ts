import { Then, setDefaultTimeout } from "@cucumber/cucumber";
import { Browser, Page } from "@playwright/test";

let browser: Browser;
let page: Page;

setDefaultTimeout(60000);

/*Then('the user enters a {string} in the search field', async function (product) {
    await this.page.locator("(//input[@placeholder='Search For Products' ][1])")
            .type(product);    
});

Then('the user clicks the search button', async function () {
    await page.click("//button[text()='Search']");
});*/