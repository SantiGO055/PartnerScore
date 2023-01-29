import { writeFile } from 'fs';

const targetPath = './src/environments/environment.ts';
const colors = require('colors');
require('dotenv').load();

const envConfigFile = `export const environment = {
    supabaseUrl: '${process.env['supabaseUrl']}',
    supabaseKey: '${process.env['supabaseKey']}',
    production: '${process.env['production']}'
 };
 `;

console.log(colors.magenta('The file `environment.ts` will be written with the following content: \n'));
console.log(colors.grey(envConfigFile));

writeFile(targetPath, envConfigFile, function (err) {
    if (err) {
        throw console.error(err);
    } else {
        console.log(colors.magenta(`Angular environment.ts file generated correctly at ${targetPath} \n`));
    }
});