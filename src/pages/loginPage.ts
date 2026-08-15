import { UIActions } from "../actions/uiActions";
import { BasePage } from "../core/basePage";
import { Page,Locator } from "@playwright/test"
import { Constants } from "../utils/constants";

export class LoginPage extends BasePage {

    private userNameInput: Locator;
    private passwordInput: Locator;
    private loginButton: Locator;
    private errorMessage: Locator;
    private uiActions: UIActions;

    constructor(page: Page){
        super(page);
        this.uiActions = new UIActions(page);
        this.userNameInput = page.locator("#user-name");
        this.passwordInput = page.locator("#password");
        this.loginButton = page.locator("#login-button");
        this.errorMessage = page.locator("h3[data-test='error']");

    }

    async navigateToLoginPage(){
        await this.uiActions.navigateTo(Constants.BASE_URL);
    }

    async enterUserName(username: string){
        await this.uiActions.fill(this.userNameInput,username);
    }

    async enterPassword(password: string){
        await this.uiActions.fill(this.passwordInput,password);
    }

    async clickLogin(){
        await this.uiActions.click(this.loginButton);
    }

    async login(username:string,password:string){
        await this.enterUserName(username);
        await this.enterPassword(password);
        await this.clickLogin();
    }

    async getErrorMessage(){
        return this.uiActions.getText(this.errorMessage);
    }


}