import { Page } from "@playwright/test";

export default class RegisterPage{

    constructor(public page: Page){

    }
    async enterFirstName(firstName: string){
        await this.page.locator("//input[@placeholder='First Name']")
            .type(firstName);
    }
    async enterLastName(lastName: string){
        await this.page.locator("//input[@placeholder='Last Name']")
            .type(lastName);
    }
    async enterEmail(eMail: string){
        await this.page.locator("//input[@placeholder='E-Mail']")
            .type(eMail);
    }
    async enterTelephone(Telephone: string){
        await this.page.locator("//input[@placeholder='Telephone']")
            .type(Telephone);
    }
    async enterPassword(Password: string){
        await this.page.locator("//input[@placeholder='Password']")
            .type(Password);
    }
    async enterPasswordConfirm(Password: string){
        await this.page.locator("//input[@placeholder='Password Confirm']")
            .type(Password);
    }
    async acceptCondition(){
        await this.page.locator("(//input[@class='custom-control-input']/following-sibling::label)[3]")
            .check();
    }
    async clickAccept(){
        await this.page.locator("//input[@type='submit']")
            .click();
    }


}