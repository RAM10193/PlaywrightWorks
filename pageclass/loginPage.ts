import { Page } from "@playwright/test";

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
    async clickLogin(){
        await this.page.click("input[type='submit']");
    }
}