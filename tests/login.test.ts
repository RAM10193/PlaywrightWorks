import { chromium, test } from "@playwright/test";

//An ASYNC fn.
test("Login Test Demo", async () => {
    //To launch a Chromium based browser (Chrome, Edge, etc)
    const browser = await chromium.launch({
        headless: false
    });
    //To set a context for a page
    const context = await browser.newContext();
    //To launch a new tab in a browser
    const page = await context.newPage(); 

    //To launch ORANGE HRM WEBSITE
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await page.fill("//input[@name='username']","Admin");
    await page.fill("//input[@name='password']","admin123");
    await page.click("//button[@type='submit']");

    await page.waitForTimeout(5000);

})