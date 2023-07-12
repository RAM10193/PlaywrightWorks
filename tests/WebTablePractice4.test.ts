import {test} from "@playwright/test"

test("webTable Handle", async({page}) =>{

   await page.goto("https://qavbox.github.io/demo/webtable/");

   //WebElement tbl = dr.findelement(By.xpath()); 
   //To capture the entire table:   
   const table = page.locator("//table[@id='table01']");
   //to print all the header values:
   //const tblheader = page.locator("//table[@id='table01']/head");
   const headers = table.locator("thead");
   //Print the headers
   console.log("header values: "+ await headers.allTextContents());

   //To know the rows count
   const rows = table.locator("//tbody/tr");
   //print the rows count:
   console.log("Rows count: "+ await rows.count());

   //To know the columns count
   const col = rows.first().locator("td");
   console.log("Total no of columns: "+ await col.count());

   for (let i = 0; i < await rows.count(); i++) {
         //to access a particular row
         const row = rows.nth(i);
         const cellval = row.locator("td");
         for (let j = 0; j < await cellval.count(); j++) {
            if(await cellval.nth(j).textContent() == "GUI"){
             //Playwright method:
             //cellval.first().locator("input").check();
            //To check the issue tracker value:
            console.log("The issue tracker is:"+await cellval.nth(3).textContent());
             //To capture the xpath of check box
             await page.locator("//table[@id='table01']//tbody/tr["+j+"]/td[1]").check();             
             await page.waitForTimeout(5000);  
            }            
         }    
      
   }

});