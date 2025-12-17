import { textByState } from "./text.js";
const STATE_COOKIE = "bakersState";

export function setSiteState(state) {
  document.cookie = `${STATE_COOKIE}=${state}; path=/; max-age=${
    60 * 60 * 24 * 30
  }`;
}

export function getSiteState() {
  const cookies = document.cookie.split("; ");
  for (let c of cookies) {
    const [name, value] = c.split("=");
    if (name === STATE_COOKIE) {
      return parseInt(value, 10);
    }
  }
  return 1;
}

const siteState = getSiteState();

document.body.classList.add(`state-${siteState}`);

const cookieImg = document.getElementById("mystery-cookie");
const cookieText = document.getElementById("cookie-text");

if (cookieImg) {
  let state = getSiteState();

  const messages = {
    1: "Fresh from the oven.",
    2: "Fresh from the oven.",
    3: "Flesh from the oven.",
    4: "Fresh from the oven.",
  };

  function updateCookie() {
    cookieImg.src = `assets/cookie_${state}.png`;
    cookieText.textContent = messages[state];
  }

  cookieImg.addEventListener("click", () => {
    if (state < 4) {
      state++;
      setSiteState(state);
      location.reload();
    }
  });

  updateCookie();
}
const resetBtn = document.getElementById("reset-state");

if (resetBtn) {
  resetBtn.addEventListener("click", () => {
    document.cookie = "bakersState=; path=/; max-age=0";
    location.reload();
  });
}
function setText(id, value) {
  const el = document.getElementById(id);
  if (el && value) {
    el.innerHTML = value;
  }
}

const stateText = textByState[siteState];

if (stateText) {
  setText("indexTitle", stateText.indexTitle);
  setText("indexText", stateText.indexText);
}