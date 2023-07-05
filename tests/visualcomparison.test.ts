//https://playwright.dev/docs/test-snapshots

import { test, expect } from '@playwright/test';

test('example test', async ({ page }) => {
  await page.goto('https://playwright.dev');
  //await expect(page).toHaveScreenshot();
  expect(await page.screenshot()).toMatchSnapshot("index.png");
});