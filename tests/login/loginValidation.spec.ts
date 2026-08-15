import { test } from "../../src/core/customFixtures"
import { WaitActions } from "../../src/wrapper/waitActions"
import { LoginPage } from "../../src/pages/loginPage"
import { Constants } from "../../src/utils/constants"
import { InventoryPage } from "../../src/pages/inventoryPage"
import { ExpectUtil } from "../../src/utils/expectUtil"
import { StringConstants } from "../../src/utils/stringConstance"

test.describe("Login Validation test scenarios",() => {
    test('Login with Valid credential and validate the home page',async({ page,loginPage })=>{
    const waitAction = new WaitActions(page);
        await loginPage.navigateToLoginPage();
        await loginPage.login(Constants.USERNAME,Constants.PASSWORD); 
        await waitAction.waitForTimeout(2000); 
        const inventoryPage = new InventoryPage(page);
        const isUserInInventoryPage = await inventoryPage.isUserInInventoryPage();
        await ExpectUtil.expectToBeTrue(isUserInInventoryPage);
        await inventoryPage.logout();
    })

    test('Login with InValid credential and validate the error message',async({ page,loginPage })=>{
        const waitAction = new WaitActions(page);
        await loginPage.navigateToLoginPage();
        await loginPage.login(Constants.USERNAME,'test');
        await waitAction.waitForTimeout(2000);
        const errorMessage = await loginPage.getErrorMessage();
        await ExpectUtil.assertStringContains(errorMessage,StringConstants.LOGIN_ERROR);
    }) 
})