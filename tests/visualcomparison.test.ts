//https://playwright.dev/docs/test-snapshots

import { test, expect } from '@playwright/test';

test('Login Test', async ({ page }) => {
  //await page.goto('https://playwright.dev');
  await page.goto('https://ecommerce-playground.lambdatest.io/index.php?route=account/login');
  //const lgnbtn = page.locator("//input[@type='submit']");
  const lgnbtn = page.locator("//input[@type='submit']");
  const valuelgn = await lgnbtn.getAttribute('value');
  console.log("Login button value is: "+valuelgn);  

  await page.evaluate(()=>{
    const selector = document.querySelector("input[value$='Login']");
    if(selector !== null){
      selector.setAttribute("value","submit");
    }    
  });

  await expect(page).toHaveScreenshot("Login.png");
  expect(await page.screenshot()).toMatchSnapshot("Login.png");
});


test('Submit Test', async ({ page }) => {
  //await page.goto('https://playwright.dev');
  await page.goto('https://ecommerce-playground.lambdatest.io/index.php?route=account/login');
  //const lgnbtn = page.locator("//input[@type='submit']");
  const lgnbtn = page.locator("//input[@type='submit']");
  const valuelgn = await lgnbtn.getAttribute('value');
  console.log("Login button value is: "+valuelgn);  

  await page.evaluate(()=>{
    const selector = document.querySelector("input[value$='Login']");
    if(selector !== null){
      selector.setAttribute("value","submit");
    }    
  });

  await expect(page).toHaveScreenshot("landingpage.png");
  expect(await page.screenshot()).toMatchSnapshot("landingpage.png");
});
