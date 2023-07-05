//https://playwright.dev/docs/test-snapshots

import { test, expect } from '@playwright/test';

test('example test', async ({ page }) => {
  //await page.goto('https://playwright.dev');
  await page.goto('https://ecommerce-playground.lambdatest.io/');
  await expect(page).toHaveScreenshot("landingpage.png");
  expect(await page.screenshot()).toMatchSnapshot("landingpage.png");
});