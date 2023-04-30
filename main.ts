import { writeFile } from "fs/promises";
import { generateMainTemplate, generateDetailTemplate } from './template.ts';
const mainHtml = generateMainTemplate();
const detailPages = generateDetailTemplate();
await writeFile('index.html', mainHtml);
for (const page of detailPages) {
    await writeFile(`${page.name}.html`, page.content);
}

