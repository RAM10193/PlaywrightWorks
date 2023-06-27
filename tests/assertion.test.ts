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

    //To launch Ecomm WEBSITE
    await page.goto("https://ecommerce-playground.lambdatest.io/");
    await page.hover("//a[@data-toggle='dropdown']//span[contains(.,' My account')]");
    await page.click("text=Login");
    //To check the URL
    await expect(page).toHaveURL("https://ecommerce-playground.lambdatest.io/index.php?route=account/login");
    await expect(page).toHaveTitle("Account Login");
    //To assert the attribute - Placeholder
    const msgValidation = page.locator("input#input-email");
    console.log(await msgValidation.getAttribute("placeholder"));
    await expect(msgValidation).toHaveAttribute("placeholder", "E-Mail Address");

    const validateTxt = page.locator("label[for='input-email']");
    console.log("The text present is "+ await validateTxt.textContent());
    await expect(validateTxt).toHaveText("E-Mail Addresss"); 

})
