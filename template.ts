import { fetchData } from './fetch.ts';
const temtemData = await fetchData();
const generateCardList = () => {
  let html = "";
  for (const temtem of temtemData) {
    html += `<div class="card" >
        <div class="content">
          <div class="back">
            <div class="back-content" style="background-image:url(${temtem.wikiRenderStaticUrl});"></div>
          </div>
          <div class="front" data-redirect='${temtem.name}.html'>
            <div class="img" style="background-image:url(${temtem.wikiRenderStaticLumaUrl});"></div>
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
      const redirectUrl = event.target.parentNode.dataset.redirect;
      window.location.href = redirectUrl;
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
  const pages = [];
  for (const temtem of temtemData) {
    const html = `
    <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      * {
        padding: 0;
        margin: 0;
      }
      body {
        display: flex;
        justify-content: center;
      }
      .detail-card {
        display: flex;
        flex-direction: column;
        background-color: #faefd9;
        width: 23em;
        max-width: 100%;
        border: 2px solid #b2738d;
        border-radius: 10px;
        padding-bottom: 0.5rem;
      }
      .detail-card__name {
        font-size: 20pt;
        padding: 0.5em;
        margin: 0.2em 0.2em 0 0.2em;
        background: linear-gradient(#523351, #393351);
        text-align: center;
        border: 2px solid #b2738d;
        border-radius: 4px;
        color: #fcc56b;
        text-shadow: 0 1px #8b8c99;
        font-weight: 700;
        letter-spacing: 0.05em;
        font-family: sans-serif;
      }
      .detail-card__image {
        background-size: contain;
        width: 100%;
        height: 15rem;
        background-position: center;
        background-repeat: no-repeat;
      }
      .detail-card__general__description {
        text-align: justify;
        padding: 0.4rem;
      }
      .detail-card__general__details {
        background: linear-gradient(#523351, #393351);
        text-align: center;
        border: 2px solid #b2738d;
        border-radius: 4px;
        color: #fcc56b;
        text-shadow: 0 1px #8b8c99;
        font-weight: 700;
        letter-spacing: 0.05em;
        font-family: sans-serif;
        margin: 0.2em 0.2em 0 0.2em;
        padding: 0.2em;
      }
      .detail-card__general__details__grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
      }
      .detail-card__general__details__number {
        align-items: center;
        display: flex;
        padding-left: 0.2rem;
      }
      .detail-card__general__details__types {
        align-items: center;
        display: flex;
        padding-left: 0.2rem;
      }
      .detail-card__general__details__gender-ratio {
        align-items: center;
        display: flex;
        padding-left: 0.2rem;
      }
      .detail-card__general__details__catch-rate {
        align-items: center;
        display: flex;
        padding-left: 0.2rem;
      }
      .detail-card__general__details__title {
        background-color: #7d5873;
        text-align: right;
        color: #fcc56b;
        padding: 0.2em 0.7em;
        margin-top: 0.1rem;
        margin-left: 0.25rem;
        text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5);
        border-radius: 5px;
        font-size: 10pt;
      }
      .detail-card__general__details__stats__grid {
        display: grid;
        grid-template-columns: repeat(7, 1fr);
        margin-left: 0.25em;
        font-size: 11pt;
        margin-top: .1rem;
        gap: 0.1rem;
      }
      .detail-card__general__details__stats__grid__item {
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 3rem;
        border: 1px solid #875a7f;
        border-radius: 5px;
      }
      .back-button{
        text-decoration: none;
        position: absolute;
        left: 5px;
        top: 25px;
        width: 2.5rem;
        height: 2.5rem;
        display: flex;
        justify-content: center;
        background: linear-gradient(#523351, #393351);
        border-radius: 50%;
        color: #fcc56b;
        font-size: 20pt;
      }
    </style>
  </head>
  <body>
    <a href="index.html" class="back-button">&#8592;</a>
    <div class="detail-card">
      <div class="detail-card__name">${temtem.name}</div>
      <div class="detail-card__image" style="background-image:url(${temtem.wikiRenderAnimatedLumaUrl});"></div>
      <div class="detail-card__general__details">General Details</div>
      <div class="detail-card__general__details__grid">
        <div class="detail-card__general__details__title">No.</div>
        <div class="detail-card__general__details__number">${temtem.number}</div>
        <div class="detail-card__general__details__title">Type</div>
        <div class="detail-card__general__details__types">${temtem.types.join(" | ")}</div>
      </div>
      <div class="detail-card__general__details">Technical Details</div>
      <div class="detail-card__general__details__grid">
        <div class="detail-card__general__details__title">Gender Ratio</div>
        <div class="detail-card__general__details__gender-ratio">Male: ${temtem.genderRatio.male}, female: ${temtem.genderRatio.female}</div>
        <div class="detail-card__general__details__title">Catch Rate</div>
        <div class="detail-card__general__details__catch-rate">${temtem.catchRate}</div>
      </div>
      <div class="detail-card__general__details">Description</div>
      <div class="detail-card__general__description">${temtem.gameDescription}</div>
      <div class="detail-card__general__details">Stats</div>
      <div class="detail-card__general__details__stats__grid">
        <div class="detail-card__general__details__stats__grid__item">
          <p class="detail-card__general__details__stats__grid__item__title">
            HP
          </p>
          <p class="detail-card__general__details__stats__grid__item__hp" style="margin-top: auto;">${temtem.stats.hp}</p>
        </div>
        <div class="detail-card__general__details__stats__grid__item">
          <p class="detail-card__general__details__stats__grid__item__title">
            STA
          </p>
          <p class="detail-card__general__details__stats__grid__item__sta" style="margin-top: auto;">${temtem.stats.sta}</p>
        </div>
        <div class="detail-card__general__details__stats__grid__item">
          <p class="detail-card__general__details__stats__grid__item__title">
            SPD
          </p>
          <p class="detail-card__general__details__stats__grid__item__spd" style="margin-top: auto;">${temtem.stats.spd}</p>
        </div>
        <div class="detail-card__general__details__stats__grid__item">
          <p class="detail-card__general__details__stats__grid__item__title">
            ATK
          </p>
          <p class="detail-card__general__details__stats__grid__item__atk" style="margin-top: auto;">${temtem.stats.atk}</p>
        </div>
        <div class="detail-card__general__details__stats__grid__item">
          <p class="detail-card__general__details__stats__grid__item__title">
            DEF
          </p>
          <p class="detail-card__general__details__stats__grid__item__def" style="margin-top: auto;">${temtem.stats.def}</p>
        </div>
        <div class="detail-card__general__details__stats__grid__item">
          <p class="detail-card__general__details__stats__grid__item__title">
            SPATK
          </p>
          <p class="detail-card__general__details__stats__grid__item__spatk" style="margin-top: auto;">${temtem.stats.spatk}</p>
        </div>
        <div class="detail-card__general__details__stats__grid__item">
          <p class="detail-card__general__details__stats__grid__item__title">
            SPDEF
          </p>
          <p class="detail-card__general__details__stats__grid__item__spdef" style="margin-top: auto;">${temtem.stats.spdef}</p>
        </div>
      </div>
    </div>
  </body>
</html>
`
    pages.push({ name: temtem.name, content: html });
  }
  return pages;
}