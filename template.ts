import { fetchData } from './fetch.ts';
const temtemData = await fetchData();
const generateCardList = () => {
    let html = "";
    for (const temtem of temtemData) {
        html += `<div class="card" >
        <div class="content">
          <div class="back">
            <div class="back-content" style="background-image:url(${temtem.wikiRenderStaticLumaUrl});"></div>
          </div>
          <div class="front" data-temtem='${JSON.stringify(temtem).replace(/'/g, '')}'>
            <div class="img" style="background-image:url(${temtem.wikiRenderStaticUrl});"></div>
            <div class="front-content">
              <small class="badge">${temtem.number}</small>
              <div class="description">
                <div class="title">
                  <p class="title">
                    <strong>${temtem.name}</strong>
                  </p>
                </div>
                <p class="card-footer">${temtem.types.join(' | ')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>`;
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
    .card {
        overflow: visible;
        width: 190px;
        height: 254px;
      }

      .content {
        width: 100%;
        height: 100%;
        transform-style: preserve-3d;
        transition: transform 300ms;
        box-shadow: 0px 0px 10px 1px #000000ee;
        border-radius: 5px;
      }

      .front,
      .back {
        background-color: #151515;
        position: absolute;
        width: 100%;
        height: 100%;
        backface-visibility: hidden;
        -webkit-backface-visibility: hidden;
        border-radius: 5px;
        overflow: hidden;
      }

      .back {
        width: 100%;
        height: 100%;
        justify-content: center;
        display: flex;
        align-items: center;
        overflow: hidden;
      }

      .back::before {
        position: absolute;
        content: " ";
        display: block;
        width: 160px;
        height: 160%;
        background: linear-gradient(
          90deg,
          transparent,
          #ff9966,
          #ff9966,
          #ff9966,
          #ff9966,
          transparent
        );
        animation: rotation_481 5000ms infinite linear;
      }

      .back-content {
        position: absolute;
        width: 99%;
        height: 99%;
        background-color: #151515;
        border-radius: 5px;
        color: white;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 30px;
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
      }

      .card:hover .content {
        transform: rotateY(180deg);
      }

      @keyframes rotation_481 {
        0% {
          transform: rotateZ(0deg);
        }

        0% {
          transform: rotateZ(360deg);
        }
      }

      .front {
        transform: rotateY(180deg);
        color: white;
      }

      .front .front-content {
        position: absolute;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        cursor: pointer;
      }

      .front-content .badge {
        background-color: #00000055;
        padding: 2px 10px;
        border-radius: 10px;
        backdrop-filter: blur(2px);
        width: fit-content;
      }

      .description {
        box-shadow: 0px 0px 10px 5px #00000088;
        width: 100%;
        padding: 10px;
        background-color: #00000099;
        backdrop-filter: blur(5px);
        border-radius: 5px;
      }

      .title {
        font-size: 11px;
        max-width: 100%;
        display: flex;
        justify-content: space-between;
      }

      .title p {
        width: 50%;
      }

      .card-footer {
        color: #fff;
        margin-top: 5px;
        font-size: 8px;
      }

      .front .img {
        position: absolute;
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
      }
  </style>
  <script>
function init() {
  const temtemList = document.querySelector(".temtem-list");
  temtemList.addEventListener("click", (event) => {
    if (event.target.tagName === "DIV") {
      console.log(event.target.parentNode);
      console.log(event.target.parentNode.dataset);
      const temtemData = JSON.parse(event.target.parentNode.dataset.temtem);
      localStorage.setItem("selectedTemtem", JSON.stringify(temtemData));
      window.location.href = "detail.html"
    }
  });
}
window.addEventListener("load", init);
</script>
</head>
<body>
    <h1>TemTem List</h1>
    <div class="temtem-list">
    ${generateCardList()}
    </div>
</body>
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