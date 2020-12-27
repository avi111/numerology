import path from 'path';
import fs from 'fs';
import {promisify} from 'util';
import {CSVParse} from "./readFile";

const readFileAsync = promisify(fs.readFile);

describe('readFile', () => {
    it('readFile', async (done) => {
        const file = path.resolve(__dirname + '/testData/addresses.csv');
        const response = await readFileAsync(file, 'utf8');
        const parsed = CSVParse(response);
        expect(response).toBeDefined();
        expect(parsed.length).toBe(6);
        expect(Array.isArray(parsed)).toBeTruthy();
        parsed.forEach((row) => {
            expect(row.length).toBe(6);
            expect(Array.isArray(row)).toBeTruthy();
            row.forEach((el) => {
                expect(true);
            });
        });
        done();
    }, 30000);
});
