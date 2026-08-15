import { Locator, Page } from '@playwright/test';

export class WaitActions {
  constructor(private page: Page) {}

  async waitForSelector(locator: Locator, options?: { state?: 'visible' | 'hidden' | 'attached' | 'detached' }): Promise<void> {
    await locator.waitFor(options);
  }


  async waitForVisibility(locator: Locator, options?: { state?: 'visible' | 'hidden' | 'attached' | 'detached' }): Promise<void> {
    await locator.waitFor({state: 'visible'});
  }

   async waitForHidden(locator: Locator, options?: { state?: 'visible' | 'hidden' | 'attached' | 'detached' }): Promise<void> {
    await locator.waitFor({state: 'hidden'});
  }

  async waitForAttached(locator: Locator, options?: { state?: 'visible' | 'hidden' | 'attached' | 'detached' }): Promise<void> {
    await locator.waitFor({state: 'attached'});
  }

  async waitForDetached(locator: Locator, options?: { state?: 'visible' | 'hidden' | 'attached' | 'detached' }): Promise<void> {
    await locator.waitFor({state: 'detached'});
  }

  async waitForTimeout(timeout: number): Promise<void> {
    await this.page.waitForTimeout(timeout);
  }
}