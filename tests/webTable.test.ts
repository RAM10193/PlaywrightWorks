import { chromium, expect, test } from "@playwright/test";


test("WebTable Handle", async ({page}) => {

    await page.goto("https://letcode.in/table");

    const table = page.locator("//table[@id='simpletable']");
    const headers = table.locator("thead")
    console.log("The header values are "+ headers.allTextContents())
});