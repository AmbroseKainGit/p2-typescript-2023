import { writeFile } from "fs/promises";
import { generateMainTemplate, generateDetailTemplate } from './template.ts';
const mainHtml = generateMainTemplate();
const detailHtml = generateDetailTemplate();
await writeFile('index.html', mainHtml);
await writeFile('detail.html', detailHtml);

