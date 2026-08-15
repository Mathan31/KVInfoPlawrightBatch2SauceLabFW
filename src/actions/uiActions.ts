import { Page, Locator } from '@playwright/test';
import { ExceptionUtil } from '../utils/exceptionUtil'

export class UIActions { 
  constructor(private readonly page: Page) {}

  public async navigateTo(url: string): Promise<void> {
    try{
      await this.page.goto(url, { waitUntil: 'load' });
    }catch(error){
       await ExceptionUtil.handleException(error as Error, this.page);
    }
    
  }

  public getLocator(locator: Locator, description?: string): Locator {
    return locator;
  }

  public async click(locator: Locator): Promise<void> {
    try{
      await this.getLocator(locator).click();
    }catch(error){
       await ExceptionUtil.handleException(error as Error, this.page);
    }
    
  }

  public async fill(locator: Locator, value: string): Promise<void> {
    try{
      await this.getLocator(locator).fill(value);
    }catch(error){
       await ExceptionUtil.handleException(error as Error, this.page);
    }
    
  }

  public async getText(locator: Locator): Promise<string> {
     try{
      return (await this.getLocator(locator).innerText()).trim();
    }catch(error){
       await ExceptionUtil.handleException(error as Error, this.page);
    }
   return "";
  }

  public async isVisible(locator: Locator): Promise<boolean> {
     try{
      return (await this.getLocator(locator).isVisible());
    }catch(error){
       await ExceptionUtil.handleException(error as Error, this.page);
    }
   return false;
  }
}