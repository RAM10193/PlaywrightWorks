import {BeforeAll,AfterAll, BeforeStep, setDefaultTimeout, After, Before, Status} from "@cucumber/cucumber";
import { chromium, Browser, Page, firefox, BrowserContext } from "@playwright/test";
import { pageFixture } from "./pageFixture";

let page: Page;
let browser: Browser;
let context: BrowserContext;

BeforeAll(async function () {
    browser = await chromium.launch({headless:false});    
});


Before(async function () {
    context = await browser.newContext();
    page = await browser.newPage();
    pageFixture.page = page;
});

After(async function ({pickle,result}) {
    if(result!.status === Status.FAILED){
        const screenshot = await pageFixture.page.screenshot({ path: "./test-result/screenshots/"+(pickle.name)+".png", fullPage: true});
        await this.attach(screenshot , "image/png");
    }
    //const screenshot = await pageFixture.page.screenshot({ path: "./test-result/screenshots/"+(pickle.name)+".png", fullPage: true});
    //await this.attach(screenshot , "image/png");
    await pageFixture.page.close();
    await context.close();
});

AfterAll(async function () {
    await browser.close();
});

/*Before(async function () {
    browser = await chromium.launch({headless:false});
    page = await browser.newPage();
    pageFixture.page = page;
});

After(async function () {
    await pageFixture.page.close();
    await browser.close();
});*/




