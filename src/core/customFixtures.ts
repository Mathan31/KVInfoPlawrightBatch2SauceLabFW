import { test as base,BrowserContext,Page} from '@playwright/test';
import { BrowserFactory } from './browserFactory';
import { LoginPage } from '../pages/loginPage';
import { ProductPage } from '../pages/productPage';
import { InventoryPage } from '../pages/inventoryPage';
import { CartPage } from '../pages/cartPage';
import { CheckoutPage } from '../pages/checkoutPage';
import { CheckoutCompletePage } from '../pages/checkoutCompletePage';

 interface CustomFixtures {
  context: BrowserContext;
  page: Page;
  loginPage: LoginPage; 
  productPage: ProductPage;
  inventoryPage: InventoryPage;
  cartPage: CartPage;
  checkoutPage: CheckoutPage;
  checkoutCompletePage: CheckoutCompletePage;
}

export const test = base.extend<CustomFixtures>({
  context: async ({}, use) => {
    const context = await BrowserFactory.createContext(await BrowserFactory.createBrowser());
    await use(context);
    await context.close();
   },
  page: async ({ context }, use) => {

    const page = await BrowserFactory.createPage(context);
    await use(page);
    await page.close();
  },
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  productPage: async ({ page }, use) => {
    await use(new ProductPage(page));
  },
  inventoryPage: async ({ page }, use) => {
    await use(new InventoryPage(page)); 
  },
  cartPage: async ({ page }, use) => {
    await use(new CartPage(page)); 
  },
  checkoutPage: async ({ page }, use) => {
    await use(new CheckoutPage(page)); 
  },
  checkoutCompletePage: async ({ page }, use) => {
    await use(new CheckoutCompletePage(page)); 
  }
});

