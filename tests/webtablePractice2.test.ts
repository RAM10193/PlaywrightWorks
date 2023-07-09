import {test} from '@playwright/test'

test('WebTable Handle' , async({page})=>{

    await page.goto("https://cosmocode.io/automation-practice-webtable/");
    //Capture the table object
    const table = page.locator("//table[@id='countries']");
    //Capturing rows - tr
    const rows = table.locator("//tr")
    //Total No of Rows:
    console.log("Total rows count "+await rows.count());
    //Capturing columns - td
    const colval = rows.first().locator("td");
    //Total No Columns:
    console.log("Total Columns count "+await colval.count());

    //await CheckCountry(rows, page, "Cyprus");
    for (let i = 0; i < await rows.count(); i++) {
        const row = rows.nth(i);
        const colvalue = row.locator("td");
        for (let j = 0; j < await colvalue.count(); j++) {
            if (await colvalue.nth(j).textContent()=="Cyprus"){
                await colvalue.first().locator("input").check();
                console.log("The currency of Cyprus is: "+await colvalue.nth(3).textContent());
            }
            
        }
        
    }
    await page.waitForTimeout(5000);
});

async function CheckCountry(rows, page, Countryname) {
    const namematch = rows.filter({
        has: page.locator("td"),
        hasText: Countryname
    });
    namematch.scrollIntoViewIfNeeded();
    await namematch.locator("input").check();
}
