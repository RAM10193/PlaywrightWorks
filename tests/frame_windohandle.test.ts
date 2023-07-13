
import {expect, test} from "@playwright/test"

test("iFrame Handle", async({page}) =>{
    
    await page.goto("https://letcode.in/frame");
    const allframes = page.frames();
    console.log("Total frames: "+ allframes.length);

    const myframe = page.frame("firstFr");
    /*
        if(myframe !=null){
            await myframe.fill("//input[@name='fname']","Ram")
        }
    */
    // ?. --> Nullish operator
    /*await myframe?.fill("//input[@name='fname']","Ram");
    await myframe?.fill("//input[@name='lname']","Kumar");

    expect(await myframe?.locator("//p[@class='title has-text-info']")
              .textContent()).toContain("You have entered Ram Kumar");*/

    
    //To locate the frame using frameLocator:
    const frame = page.frameLocator("//iframe[@id='firstFr']");
    await frame.locator("//input[@name='fname']").fill("Ram");
    await page.waitForTimeout(5000);

});