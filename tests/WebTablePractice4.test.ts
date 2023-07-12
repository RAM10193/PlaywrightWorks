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

   for (let i = 1; i <= await rows.count(); i++) {         
         for (let j = 1; j <= await col.count(); j++) {
            const chkBox = page.locator("//table[@id='table01']//tbody/tr["+i+"]/td[1]//input[@type='checkbox']");
            const cellvalMatch = page.locator("//table[@id='table01']//tbody/tr["+i+"]/td["+j+"]");
            if(await cellvalMatch.textContent()=="GUI"){
               debugger;
             //Playwright method:
             //col.first().locator("input").check(); 
             //To capture the xpath of check box
             await chkBox.check();  
             //To check the issue tracker value:
             console.log("The issue tracker is:"+await col.nth(3).textContent());
             await page.locator("//table[@id='table01']//tbody/tr["+j+"]//a[@href='https://www.selenium.dev/']").click();  
              console.log(); 
             await page.waitForTimeout(5000);  
            }            
         }    
      
   }

});