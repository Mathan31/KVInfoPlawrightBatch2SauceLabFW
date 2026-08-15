import { BasePage } from "../core/basePage";
import { Page, Locator } from "@playwright/test";
import { UIActions } from "../actions/uiActions";

export class InventoryPage extends BasePage {
private productItems: Locator;
 private cartIcon: Locator;
 private menuButton: Locator;
 private logoutLink: Locator;
 private uiActions: UIActions;


 constructor(page: Page) {
  super(page);
  this.page = page;
  this.productItems = page.locator(".inventory_item");
  this.cartIcon = page.locator(".shopping_cart_link");
  this.menuButton = page.locator("#react-burger-menu-btn");
  this.logoutLink = page.locator("#logout_sidebar_link");
  this.uiActions = new UIActions(page);
 }

 
 async selectFirstProduct() {
  await this.uiActions.click(this.productItems.first().locator(".inventory_item_name"));
 }

 async addFirstProductToCart() {
  await this.uiActions.click(this.productItems.first().locator("button"));
 }

 async getFirstProductName() {
  return await this.uiActions.getText(this.productItems.first().locator(".inventory_item_name"));
 }

 async getFirstProductPrice() {
  return await this.uiActions.getText(this.productItems.first().locator(".inventory_item_price"));
 }

 async goToCart() {
  await this.uiActions.click(this.cartIcon);
 }


 async isUserInInventoryPage(){
    return this.uiActions.isVisible(this.menuButton);
 }

 async clickOnMenu(){
    this.uiActions.click(this.menuButton);
 }

 async logout(){
   await this.clickOnMenu();
   await this.uiActions.click(this.logoutLink);
 }

}