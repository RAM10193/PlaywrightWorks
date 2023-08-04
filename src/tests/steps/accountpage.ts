import { Then, setDefaultTimeout } from "@cucumber/cucumber";
import { Browser, Page } from "@playwright/test";
import { pageFixture } from "../hooks/pageFixture";

setDefaultTimeout(60*1000*5);

Then('the user enters a {string} in the search field', async function (product) {
    await pageFixture.page.locator("(//input[@name='search'])[1]")
            .type(product);    
});

Then('the user clicks the search button', async function () {
    await pageFixture.page.locator("(//button[@type='submit'])[1]").click();
});