import { Page } from '@playwright/test';

export class ScreenshotUtil {
  static async takeScreenshot(page: Page, fileName: string): Promise<void> {
    await page.screenshot({ path: `test-results/${fileName}.png` });
  }
}