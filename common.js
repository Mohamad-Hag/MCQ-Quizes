let currentTheme = "l";
let storage = window.localStorage;

window.onload = () => {
  changeThemeOnStart();
  focusDifficultyBox();
};
function focusDifficultyBox() {
  let box = document.querySelector("#difficulty-options");
  if (box === undefined || box === null) return;
  box.focus();
}
function changeThemeOnStart() {
  let theme = getStorage("theme");
  if (theme === undefined) {
    setStorage("theme", currentTheme);
    return;
  }
  changeThemeTo(theme);
}
function setStorage(key, value) {
  storage.setItem(key, value);
}
function getStorage(key) {
  return storage.getItem(key);
}
function changeThemeTo(theme) {
  let cr1, cr2, cr3, cr4, cr5, cr6, cr7;
  if (theme === "d") {
    cr1 = "hsl(180, 64%, 43%)";
    cr2 = "hsl(0, 0%, 13%)";
    cr3 = "hsl(0, 0%, 8%)";
    cr4 = "hsl(0, 0%, 75%)";
    cr5 = "hsl(0, 0%, 11%)";
    cr6 = "hsla(0, 0%, 18%)";
    cr7 = "white";

    currentTheme = "d";
  } else {
    cr1 = "hsl(180, 64%, 43%)";
    cr2 = "hsla(0, 0%, 93%, 0.322)";
    cr3 = "hsla(0, 0%, 100%)";
    cr4 = "hsl(0, 0%, 75%)";
    cr5 = "hsl(0, 0%, 93%)";
    cr6 = "hsl(0, 0%, 80%)";
    cr7 = "hsl(0, 0%, 30%)";

    currentTheme = "l";
  }
  setStorage("theme", currentTheme);

  // Primary
  setRootProperty("--main-cr", cr1);
  setRootProperty("--bg-cr", cr2);
  setRootProperty("--sec-bg-cr", cr3);
  // Accent
  setRootProperty("--logo-ac-cr", cr4);
  setRootProperty("--main-ac-cr", cr5);
  setRootProperty("--sec-ac-cr", cr6);
  // Text
  setRootProperty("--main-text-cr", cr7);
}

function changeThemeClicked(e) {
  if (currentTheme === "l") changeThemeTo("d");
  else changeThemeTo("l");
}
function setRootProperty(property, value) {
  let root = document.querySelector(":root");
  root.style.setProperty(property, value);
}
