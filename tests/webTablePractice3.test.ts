import {test} from '@playwright/test'

test('WebTable Handle' , async({page})=>{

    await page.goto("https://qavbox.github.io/demo/webtable/");

    const table = page.locator("//table[@id='table01']");
    const headers = table.locator("thead");
    console.log("The header values are "+ await headers.allTextContents());

    //To get the rows count:
    const rows = table.locator("//tbody/tr");
    console.log("Total No. of rows: "+ await rows.count());
    //To get the columns count:
    const cols = rows.first().locator("td");
    console.log("Total No. of Columns: "+ await cols.count());

    /*Playwright way to handle the webtable*/
    //await checkInput(rows, page, "Functional");    
    //await checkInput(rows, page, "Performance");

    for (let i = 0; i < await rows.count();  i++) {
        const row = rows.nth(i);
        const cellval = row.locator("td");
        for (let j = 0; j < await cellval.count(); j++) {
            if(await cellval.nth(j).textContent()=="Functional"){
                //to handle by xpath
                //table[@id='table01']//tbody/tr[1]//input
                //await page.locator("//table[@id='table01']//tbody/tr["+j+"]//input").check();
                //To handle via playwright option - first()
                cellval.first().locator("input").check();
                console.log("The issue tracker is: "+await cellval.nth(3).textContent());
            }            
        }        
    }

    await page.waitForTimeout(5000);
});

async function checkInput(rows, page,name) {
    const namematch = rows.filter({
        has: page.locator("td"),
        hasText: name
    });
    await namematch.locator("input").check();
}