import { Page, Locator } from "@playwright/test";
import { UIActions } from "../actions/uiActions";
import { BasePage } from "../core/basePage";

export class CartPage extends BasePage{

 //private page: Page;
 private productName: Locator;
 private productPrice: Locator;
 private checkoutButton: Locator;
 private removeButton: Locator;
 private uiActions: UIActions;

 constructor(page: Page) {
  super(page);
  this.page = page;
  this.uiActions = new UIActions(page);

  this.productName = page.locator(".inventory_item_name");
  this.productPrice = page.locator(".inventory_item_price");
  this.checkoutButton = page.locator("#checkout");
  this.removeButton = page.locator("#remove-sauce-labs-backpack");
 }

 async clickCheckout() {
  await this.uiActions.click(this.checkoutButton);
 }

 async removeProduct() {
  await this.uiActions.click(this.removeButton);
 }

 async getProductName() {
  return await this.uiActions.getText(this.productName);
 }

 async getProductPrice() {
  return await this.uiActions.getText(this.productPrice);
 }

 async isProductInCart() {
  return await this.productName.isVisible() && await this.productPrice.isVisible();
 }


}