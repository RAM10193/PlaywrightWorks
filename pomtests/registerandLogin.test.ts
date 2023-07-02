import {chromium, test} from "@playwright/test"

import loginPage from "../pageclass/loginPage"
import RegisterPage from "../pageclass/registerpage";

test("Register Test_01" , async () => {
    const browser = await chromium.launch({
    });
    //To set a context for a page
    const context = await browser.newContext();
    //To launch a new tab in a browser
    const page = await context.newPage(); 
    //Creating a class object
    const reg = new RegisterPage(page);
    await page.goto("https://ecommerce-playground.lambdatest.io/index.php?route=account/register");
    await reg.enterFirstName("Ram");
    await reg.enterLastName("Kumar");
    await reg.enterEmail("xyzmnop@gmail.com");
    await reg.enterTelephone("1234567890");
    await reg.enterPassword("Abc123$");
    await reg.enterPasswordConfirm("Abc123$");
    await reg.acceptCondition();
    await reg.clickAccept(); 
})

test("Login Test_01" , async () => {
    const browser = await chromium.launch({
    });
    //To set a context for a page
    const context = await browser.newContext();
    //To launch a new tab in a browser
    const page = await context.newPage(); 
    //Creating a class object
    const login = new loginPage(page);
    await page.goto("https://ecommerce-playground.lambdatest.io/index.php?route=account/login");
    await login.enterUserName("xyzmnop@gmail.com");  
    await login.enterPassword("Abc123$");
    await login.clickLogin();
})