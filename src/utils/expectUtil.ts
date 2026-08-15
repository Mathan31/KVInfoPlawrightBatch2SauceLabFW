import { expect, Page } from '@playwright/test';

export class ExpectUtil {
  static async expectToBeVisible(page: Page, selector: string): Promise<void> {
    await expect(page.locator(selector)).toBeVisible({ timeout: 10000 });
  }

  static async expectToHaveText(page: Page, selector: string, text: string): Promise<void> {
    await expect(page.locator(selector)).toHaveText(text, { timeout: 10000 });
  }

  static async expectToBeEnabled(page: Page, selector: string): Promise<void> {
    await expect(page.locator(selector)).toBeEnabled({ timeout: 10000 });
  }

  static async expectToContainURL(page: Page, urlPart: string): Promise<void> {
    await expect(page).toHaveURL(new RegExp(urlPart), { timeout: 10000 });
  }

  static async expectToBeTrue(actual: boolean): Promise<void> {
    expect(actual).toBeTruthy();
  }

    static async expectToBeFalse(actual: boolean): Promise<void> {
    expect(actual).toBeFalsy();
  }

  static async expectToContainTitle(page: Page, titlePart: string): Promise<void> {
    await expect(page).toHaveTitle(new RegExp(titlePart), { timeout: 10000 });
  }

  public static async assertStringEquals(
    actual: string,
    expected: string,
    message?: string
  ): Promise<void> {
     expect(actual, message).toBe(expected);
  }

  public static async assertStringContains(
    actual: string,
    expected: string,
    message?: string
  ): Promise<void> {
     expect(actual, message).toContain(expected);
  }
}