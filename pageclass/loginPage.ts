import { Page, expect } from "@playwright/test";

export default class loginPage{

    constructor(public page: Page){

    }
    async enterUserName(UserName: string){
        await this.page.locator("input[name='email']")
            .type(UserName);
    }
    async enterPassword(Password: string){
        await this.page.locator("input[type='password']")
            .type(Password);
    }

    async validateText(){
        const validateTxt = this.page.locator("label[for='input-email']");
        console.log("The text present is "+ await validateTxt.textContent());
        await expect(validateTxt).toHaveText("E-Mail Address");
    }

    async clickLogin(){
        await this.page.click("input[type='submit']");
    }


}