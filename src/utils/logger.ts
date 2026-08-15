export class Logger {
  static info(message: string): void {
    console.log(`INFO: ${message}`);
  }

  static error(message: string): void {
    console.error(`ERROR: ${message}`);
  }
}