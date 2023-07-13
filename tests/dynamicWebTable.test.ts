import {test} from "@playwright/test"

test("dynamicWebTable Handle", async({page}) =>{

   await page.goto("C:/PlaywrightWorks/dynamicTable.html");
   //WebElement tbl = dr.findelement(By.xpath()); 
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
   await page.waitForTimeout(5000);

});