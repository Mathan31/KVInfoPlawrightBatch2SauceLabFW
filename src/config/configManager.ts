export class ConfigManager {
  static getBaseUrl(): string {
    return process.env.BASE_URL || 'https://www.saucedemo.com/';
  }

  static isHeadless(): boolean {
    return process.env.HEADLESS !== 'false';
  }

   static isParallel(): boolean {
    return true; 
  }

  static getBrowser(): 'chromium' | 'firefox' | 'webkit' {
    return (process.env.BROWSER as any) || 'chromium';
  }

  static getWorkers(): number {
    return Number(process.env.WORKERS) || 2; 
  }
}