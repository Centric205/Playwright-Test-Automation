import { LoginLocators } from "../locators/loginLocators"
import {Page} from "@playwright/test";

export class LoginPage{

    // For object initialization
    // It helps prevent opening the web page every single time you have to perform an action
    // So, an initialized object will be able to perform various actions after a page has been
    // opened.
    constructor(private page: Page) {
    }

    async login(username: string, password: string){
        await this.page.fill(LoginLocators.usernameInput, username);
        await this.page.fill(LoginLocators.passwordInput, password);
        await this.page.click(LoginLocators.loginButton); 
    }
}