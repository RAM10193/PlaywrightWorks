
import {expect, test} from "@playwright/test"

test("iFrame Handle", async({page}) =>{
    
    await page.goto("https://letcode.in/frame");
    const totalframes = page.frames();
    console.log("Total frames: "+ totalframes.length);

    //const totalframes = page.locator("//iframe");
    //console.log("Total frames: "+ await totalframes.count());


    //const credframe = page.frame("firstFr");
    //page.locator("//iframe[@id='firstFr']")
    /*
        if(myframe !=null){
            await myframe.fill("//input[@name='fname']","Ram")
        }
    */
    // ?. --> Nullish operator

    /*await credframe?.fill("//input[@name='fname']","Ram");
    await credframe?.fill("//input[@name='lname']","Kumar");

    expect(await credframe?.locator("//p[@class='title has-text-info']")
              .textContent()).toContain("You have entered Ram Kumar");*/
              
    
    //To locate the frame using frameLocator:
    const frame = page.frameLocator("//iframe[@id='firstFr']");
    await frame.locator("//input[@name='fname']").fill("Ram");
    await frame.locator("//input[@name='lname']").fill("kumar");

    const innerframe = frame.locator("iframe[src='innerFrame']");
    await innerframe.locator("//label[text()='Email']/following::input").fill("mno@gmail.com");

    await page.waitForTimeout(5000);
});