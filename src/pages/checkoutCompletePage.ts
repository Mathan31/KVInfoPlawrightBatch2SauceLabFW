import { Page, Locator } from "@playwright/test";
import { UIActions } from "../actions/uiActions";
import { BasePage } from "../core/basePage";

export class CheckoutCompletePage extends BasePage{

 //private page: Page;
 private thankYouHeader: Locator;
 private backHomeButton: Locator;
 private uiActions: UIActions;

 constructor(page: Page) {
  super(page);
  this.page = page;
  this.uiActions = new UIActions(page);

  this.thankYouHeader = page.locator(".complete-header");
  this.backHomeButton = page.locator("#back-to-products");
 }

 async getThankYouMessage() {
  return await this.uiActions.getText(this.thankYouHeader);
 }

 async clickBackHome() {
  await this.uiActions.click(this.backHomeButton);  
 }
}