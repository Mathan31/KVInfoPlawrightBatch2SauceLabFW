import { Page, Locator } from "@playwright/test";
import { UIActions } from "../actions/uiActions";
import { BasePage } from "../core/basePage";

export class CheckoutPage extends BasePage{

 //private page: Page;
 private firstName: Locator;
 private lastName: Locator;
 private postalCode: Locator;
 private continueButton: Locator;
 private finishButton: Locator;
 private uiActions: UIActions;
 
 constructor(page: Page) {
  super(page);
  this.page = page;
  this.uiActions = new UIActions(page);
  this.firstName = page.locator("#first-name");
  this.lastName = page.locator("#last-name");
  this.postalCode = page.locator("#postal-code");
  this.continueButton = page.locator("#continue");
  this.finishButton = page.locator("#finish");
 }

 async enterCheckoutInformation(fname: string, lname: string, zip: string) {

  await this.uiActions.fill(this.firstName, fname);
  await this.uiActions.fill(this.lastName, lname);
  await this.uiActions.fill(this.postalCode, zip);
 }

 async clickContinue() {
  await this.uiActions.click(this.continueButton);
 }

 async clickFinish() {
  await this.uiActions.click(this.finishButton);
 }
}