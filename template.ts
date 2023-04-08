import { fetchData } from './fetch.ts';
const temtemData = await fetchData();
const generateAnchorList = () => {
    let html = "";
    for (const temtem of temtemData) {
        html += `<a href="detail.html" data-temtem='${JSON.stringify(temtem).replace(/'/g, '')}'>${temtem.name}</a>`;
    }
    return html;
}
export const generateMainTemplate = () => {
    const html = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TemTem List</title>
    <style>
    * {
      margin: 0;
      padding: 0;
    }
    body h1 {
        text-align: center;
    }
    .temtem-list {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        grid-gap: 1rem;
        margin-left: 1rem;
        padding-top:1rem;

    }
    .temtem-list a {
        color: #000;
        text-decoration: none;
        font-size: 18pt;
        transition: all 0.5s ease;
    }
    .temtem-list a:hover {
        color: lightcoral;
        transform: scale(1.1);
    }
    .temtem-list a::before {
        content: "• ";
    }
  </style>
</head>
<body>
    <h1>TemTem List</h1>
    <div class="temtem-list">
    ${generateAnchorList()}
    </div>
</body>
<script>
function init() {
  const temtemList = document.querySelector(".temtem-list");
  temtemList.addEventListener("click", (event) => {
    if (event.target.tagName === "A") {
      const temtemData = JSON.parse(event.target.dataset.temtem);
      localStorage.setItem("selectedTemtem", JSON.stringify(temtemData));
    }
  });
}
window.addEventListener("load", init);
</script>
</html>
`;
    return html;
}
export const generateDetailTemplate = () => {
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
<div class="temtem"></div>

</body>
</html>`
    return html;
}