import { chromium, Browser, BrowserContext, Page } from '@playwright/test';

export class BrowserFactory {
  
  static async createBrowser(): Promise<Browser> {
    return await chromium.launch({ headless: false }); // Changed to non-headless mode
  }

  // static async createBrowserWithPersistence(): Promise<BrowserContext> {
  //   return await chromium.launchPersistentContext("./session",{ headless: false }); // Changed to non-headless mode
  // }

  static async createContext(browser: Browser): Promise<BrowserContext> {
    
    return await browser.newContext();
  }

  static async createPage(context: BrowserContext): Promise<Page> {
    return await context.newPage();
    //return context.pages()[0]; // Return the first page from the context
  }
}