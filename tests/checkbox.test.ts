import { chromium, expect, test } from "@playwright/test";

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

    //To launch demo WEBSITE
    await page.goto("https://qavalidation.com/demo-form/");
    const Checkbox = page.locator("//input[@value='Functional testing']");
    await expect(Checkbox).not.toBeChecked();
    await Checkbox.check();
    await expect(Checkbox).toBeChecked();

    //Type vs fill
    const input = page.locator("//input[@value='Functional testing']");

    

})
