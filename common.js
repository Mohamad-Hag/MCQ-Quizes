let currentTheme = "l";

function changeThemeClicked(e) {
  let root = document.querySelector(":root");
  if (currentTheme === "l") {
    // Primary
    root.style.setProperty("--main-cr", "hsl(180, 64%, 43%)");
    root.style.setProperty("--bg-cr", "hsl(0, 0%, 13%)");
    root.style.setProperty("--sec-bg-cr", "hsl(0, 0%, 8%)");
    // Accent
    root.style.setProperty("--logo-ac-cr", "hsl(0, 0%, 75%)");
    root.style.setProperty("--main-ac-cr", "hsl(0, 0%, 11%)");
    root.style.setProperty("--sec-ac-cr", "hsla(0, 0%, 18%)");
    // Text
    root.style.setProperty("--main-text-cr", "white");

    currentTheme = "d";
  } else {
    // Primary
    root.style.setProperty("--main-cr", "hsl(180, 64%, 43%)");
    root.style.setProperty("--bg-cr", "hsla(0, 0%, 93%, 0.322)");
    root.style.setProperty("--sec-bg-cr", "hsla(0, 0%, 100%)");
    // Accent
    root.style.setProperty("--logo-ac-cr", "hsl(0, 0%, 75%)");
    root.style.setProperty("--main-ac-cr", "hsl(0, 0%, 93%)");
    root.style.setProperty("--sec-ac-cr", "hsl(0, 0%, 80%)");
    // Text
    root.style.setProperty("--main-text-cr", "hsl(0, 0%, 30%)");

    currentTheme = "l";
  }
}
