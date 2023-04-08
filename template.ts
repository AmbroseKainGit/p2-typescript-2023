import { fetchData } from './fetch.ts';
const temtemData = await fetchData();
const generateAnchorList = () => {
    let html = "";
    for (const temtem of temtemData) {
        html += `<a href="detail.html">${temtem.name}</a>`;
    }
    return html;
}
const generateMainTemplate = () => {
    const html = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>TemTem List</h1>
    <div class="temtem-list">
    ${generateAnchorList()}
    </div>
</body>
</html>
`;
    return html;
}
const generateDetailTemplate = () => {
    const html = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<div class="temtem></div>

</body>
</html>`
    return html;
}