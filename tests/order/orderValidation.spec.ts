import { test } from '../../src/core/customFixtures';
import { ExpectUtil } from '../../src/utils/expectUtil';
import { WaitActions } from '../../src/wrapper/waitActions';
import { FakerDataUtil } from '../../src/utils/fakerDataUtil';
 import { Constants } from '../../src/utils/constants';

test.describe('Order Validation Tests', () => {
    test('Submit the order and validated the product name and price', async (
        { page,loginPage, inventoryPage,cartPage, checkoutPage, checkoutCompletePage }) => {
        const waitActions = new WaitActions(page);
        await loginPage.navigateToLoginPage();
        await loginPage.login(Constants.USERNAME, Constants.PASSWORD);
        const isInInventoryPage = await inventoryPage.isUserInInventoryPage();
        await ExpectUtil.assertStringEquals(isInInventoryPage.toString(), "true", 
        "User should be in inventory page after successful login");
        const firstProductName = await inventoryPage.getFirstProductName();
        const firstProductPrice = await inventoryPage.getFirstProductPrice();
        await inventoryPage.addFirstProductToCart();
        await waitActions.waitForTimeout(2000);
        await inventoryPage.goToCart();
        await waitActions.waitForTimeout(2000);
        const cartProductName = await cartPage.getProductName();
        const cartProductPrice = await cartPage.getProductPrice();
        await ExpectUtil.assertStringEquals(cartProductName, firstProductName, 
            "Product name in cart should match the selected product");
        await ExpectUtil.assertStringEquals(cartProductPrice, firstProductPrice, 
            "Product price in cart should match the selected product");
        await cartPage.clickCheckout();
        await waitActions.waitForTimeout(2000);
        const firstName = FakerDataUtil.generateFirstName();
        const lastName = FakerDataUtil.generateLastName();
        const postalCode = FakerDataUtil.generatePostalCode();
        await checkoutPage.enterCheckoutInformation(firstName, lastName, postalCode);
        await checkoutPage.clickContinue();
        await checkoutPage.clickFinish();
        await waitActions.waitForTimeout(2000);
        const thankYouMessage = await checkoutCompletePage.getThankYouMessage();
        await ExpectUtil.assertStringContains(thankYouMessage, "Thank you for your order", 
            "Thank you message should be displayed after successful order submission");
        await checkoutCompletePage.clickBackHome();
        await waitActions.waitForTimeout(2000);
        await inventoryPage.logout();
       
    });

    test('Validate Remove Product from cart page', async ({ page,loginPage, inventoryPage,cartPage }) => {
        const waitActions = new WaitActions(page);
        await loginPage.navigateToLoginPage();
        await loginPage.login(Constants.USERNAME, Constants.PASSWORD);
        const isInInventoryPage = await inventoryPage.isUserInInventoryPage();
        await ExpectUtil.assertStringEquals(isInInventoryPage.toString(), "true",
         "User should be in inventory page after successful login");
        const firstProductName = await inventoryPage.getFirstProductName();
        const firstProductPrice = await inventoryPage.getFirstProductPrice();
        await inventoryPage.addFirstProductToCart();
        await inventoryPage.goToCart();
         await waitActions.waitForTimeout(2000);
        const cartProductName = await cartPage.getProductName();
        const cartProductPrice = await cartPage.getProductPrice();
        await ExpectUtil.assertStringEquals(cartProductName, firstProductName,
             "Product name in cart should match the selected product");
        await ExpectUtil.assertStringEquals(cartProductPrice, firstProductPrice, 
            "Product price in cart should match the selected product");
        await cartPage.removeProduct();
        await waitActions.waitForTimeout(2000);
        const isProductInCart = await cartPage.isProductInCart();
        await ExpectUtil.expectToBeFalse(isProductInCart); 
        await inventoryPage.logout();
    });

}); 
  
