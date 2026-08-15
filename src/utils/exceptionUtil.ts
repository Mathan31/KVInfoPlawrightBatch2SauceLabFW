import { Page } from '@playwright/test';
import { ScreenshotUtil } from './screenshotUtil';

export class ExceptionUtil { 

  static async handleException(error: Error, page?: Page): Promise<void> {

    console.error("========== EXCEPTION OCCURRED ==========");
    console.error(`Message : ${error.message}`);
    console.error(`Stack   : ${error.stack}`);
    console.error("========================================");

    if (page) {
      try { 
        const fileName = `error-${Date.now()}.png`;
        await ScreenshotUtil.takeScreenshot(page, fileName);
        console.log(`Screenshot captured : ${fileName}`);
      } catch (screenshotError) {
        console.error("Screenshot capture failed");
      }
    }

    throw error;
  }
}