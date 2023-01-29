import { writeFile } from "fs";

const targetPath = './src/environments/environment.prod.ts';




const envConfigFile = `export const environment = {
    production: true,
    
    supabaseUrl: '${process.env['SUPABASEURL']}',
    supabaseKey: '${process.env['SUPABASEKEY']}'
   
 };
 `;
writeFile(targetPath, envConfigFile, 'utf8', (err) => {
    if (err) {
        throw console.error(err);
    } else {
    }
});