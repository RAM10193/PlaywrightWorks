import { chromium, test } from "@playwright/test";

//An ASYNC fn.
test("Login Test Demo", async () => {
    //To launch a Chromium based browser (Chrome, Edge, etc)
    const browser = await chromium.launch();
    //To set a context for a page
    const context = await browser.newContext();
    //To launch a new tab in a browser
    const page = await context.newPage(); 

    //To launch ORANGE HRM WEBSITE
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

})