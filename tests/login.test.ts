import { chromium, test } from "@playwright/test";

//An ASYNC fn.
test("Login Test Demo", async () => {
    //To launch a Chromium based browser (Chrome, Edge, etc)
    const browser = await chromium.launch({
        //headless: false
    });
    //To set a context for a page
    const context = await browser.newContext();
    //To launch a new tab in a browser
    const page = await context.newPage(); 

    //To launch Ecomm WEBSITE
    await page.goto("https://ecommerce-playground.lambdatest.io/");
    await page.hover("//a[@data-toggle='dropdown']//span[contains(.,' My account')]");
    await page.click("text=Login");

    await page.fill("//input[@name='email']","gkmram@gmail.com");
    await page.fill("//input[@name='password']","Ramkrishna93$");
    await page.click("//input[@type='submit']");
    

    await page.waitForTimeout(5000);

    //Creating a new page under the same Context:
    const page1 = await context.newPage();
    await page1.goto("https://ecommerce-playground.lambdatest.io/index.php?route=account/edit");
    await page1.waitForTimeout(5000);

    /*//Creating a new page under the different Context:
    const newcontext = await browser.newContext();
    const page2 = await context.newPage();
    await page2.goto("https://ecommerce-playground.lambdatest.io/index.php?route=account/edit");
    await page2.waitForTimeout(5000);*/
})