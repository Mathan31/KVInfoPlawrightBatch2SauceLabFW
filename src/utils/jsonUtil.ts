/**
 * This utility module provides functions for handling JSON data, including reading from and writing to JSON files.
 */

import fs from 'fs/promises'
import path from 'path';

export class JsonUtil {
    static JSON_FILE_PATH = 'C:\\JavaScript + TypeScript Learning\\SaleForce Complete Framework\\playwright-framework\\src\\test-data\\';
     //static JSON_FILE_PATH = path.resolve(process.cwd(), 'src', 'test-data');
   // private static JSON_FILE_PATH = path.resolve(__dirname, '../test-data');
     
    //static JSON_FILE_PATH = '../test-data';
    static async readJsonFile(fileName: string): Promise<any> {
        console.log(`Reading JSON file from: ${this.JSON_FILE_PATH}/${fileName}.json`);
        const data = await fs.readFile(`${this.JSON_FILE_PATH}/${fileName}.json`, 'utf-8');
        return JSON.parse(data); 
    }

}  