import { chromium, expect, test } from "@playwright/test";


test("WebTable Handle", async ({page}) => {

    await page.goto("https://letcode.in/table");

    const table = page.locator("//table[@id='simpletable']");
    const headers = table.locator("thead");
    console.log("The header values are "+ await headers.allTextContents());

    //To get the rows count:
    const rows = table.locator("//tbody/tr");
    console.log("Total No. of rows: "+ await rows.count());
    //To get the columns count:
    const cols = rows.first().locator("td");
    console.log("Total No. of Columns: "+ await cols.count());

    /*Playwright way to handle the webtable*/
    //await checkInput(rows, page, "Man");    
    //await checkInput(rows, page, "Raj");

    for (let i = 0; i < await rows.count();  i++) {
        const row = rows.nth(i);
        const cellval = row.locator("td");
        for (let j = 0; j < await cellval.count(); j++) {
            if(await cellval.nth(j).textContent()=="Chatterjee"){
                //to handle by xpath
                //table[@id='simpletable']//tbody/tr[1]//input
                //await page.locator("//table[@id='simpletable']//tbody/tr["+j+"]//input").check();
                //To handle via playwright option - last()
                cellval.last().locator("input").check();
                console.log(await cellval.nth(2).textContent());
            }            
        }        
    }
});

async function checkInput(rows, page,name) {
    const namematch = rows.filter({
        has: page.locator("td"),
        hasText: name
    });
    await namematch.locator("input").check();
}
