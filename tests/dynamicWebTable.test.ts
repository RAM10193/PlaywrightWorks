import {test} from "@playwright/test"

test("dynamicWebTable Handle", async({page}) =>{

   await page.goto("C:/PlaywrightWorks/dynamicTable.html");

   //table
   const table = page.locator("//table[@class='sortable']");

   const rows = table.locator("//tbody/tr");

  //const rows = page.locator("//table[@class='sortable']//tbody/tr")

   console.log("No of rows: "+ await rows.count());

   //column count
   const col = table.locator("//tbody/tr[1]/td");

   //const col = rows.first().locator("td");

   console.log("No of columns: "+ await col.count());

   const tblheader = page.locator("//table[@class='sortable']/thead");
   const rankSort = tblheader.locator("//th[5]");
   //Sorting the table based on the Market cap Rank:
   await rankSort.click();
   await rankSort.click();

   for (let i = 1; i <= await rows.count(); i++) {         
      for (let j = 1; j <= await col.count(); j++) {
         const chkBox = page.locator("//table[@class='sortable']//tbody/tr["+i+"]/td[1]//input[@type='checkbox']");
         const cellvalMatch = page.locator("//table[@class='sortable']//tbody/tr["+i+"]/td["+j+"]");
         if(await cellvalMatch.textContent()==="TCS"){
          console.log("The TCS is at row no: "+ i);
          //Playwright method:
          //col.first().locator("input").check(); 
          //To capture the xpath of check box
          await chkBox.check();  
          //To check the issue tracker value:
          console.log("The Head Quarter is at:"+await table.locator("//tbody/tr["+i+"]/td[4]").textContent());          
          await page.waitForTimeout(5000);  
         }            
      }    
   
}

   




   await page.waitForTimeout(5000);

   



   /*//WebElement tbl = dr.findelement(By.xpath()); 
   //To capture the entire table:   
   const table = page.locator("//table");
   await table.scrollIntoViewIfNeeded();
   //to print all the header values:
   const tblheader = page.locator("//table[@class='sortable']/thead");
   const rankSort = tblheader.locator("//th[5]");
   await rankSort.click();
   await rankSort.click();
   const headers = table.locator("//tbody/tr[1]");
   
   //Print the headers
   console.log("header values: "+ await headers.allTextContents());

   //To know the rows count
   const rows = table.locator("//tbody/tr");
   //print the rows count:
   console.log("Rows count: "+ await rows.count());

   //To know the columns count
   const col = rows.first().locator("td");
   console.log("Total no of columns: "+ await col.count());
   await page.waitForTimeout(5000);*/

});