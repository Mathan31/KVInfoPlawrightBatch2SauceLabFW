import { Page, Locator } from "@playwright/test";
import { UIActions } from "../actions/uiActions";
import { BasePage } from "../core/basePage";

export class ProductPage extends BasePage{

 //private page: Page;
 private productName: Locator;
 private productPrice: Locator;
 private addToCartButton: Locator;
 private uiActions: UIActions;

 constructor(page: Page) {
  super(page);
  this.page = page;
  this.uiActions = new UIActions(page);
  this.productName = page.locator(".inventory_details_name");
  this.productPrice = page.locator(".inventory_details_price");
  this.addToCartButton = page.locator("button.btn_inventory");
 }

 async getProductName() {
  return await this.uiActions.getText(this.productName);
 }

 async getProductPrice() {
  return await this.uiActions.getText(this.productPrice);
 }

 async addProductToCart() {
  await this.uiActions.click(this.addToCartButton);
 }
}