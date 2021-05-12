let difficulty = "easy";
let currentSelectedIndex = 0;

window.onload = () => {
  document.querySelector("#difficulty-options").focus();
};

function goToPlayground() {
  window.location.href = "pages/playground.html?difficulty=" + difficulty;
}
function difficultyOptionClicked(e) {
  let options = document.querySelectorAll(".difficulty-option");
  options.forEach((option, i) => {
    option.removeAttribute("id");
    if (option === e) currentSelectedIndex = i;
  });
  e.setAttribute("id", "difficulty-option-selected");
  difficulty = e.innerText.toLowerCase();
}
function difficultyOptionKeyDown(e) {
  let option = document.querySelectorAll(".difficulty-option");
  // Up Arrow
  if (e.keyCode === 38) {
    if (currentSelectedIndex > 0) {
      currentSelectedIndex--;
      difficultyOptionClicked(option[currentSelectedIndex]);
    } else {
      difficultyOptionClicked(option[2]);
    }
  }
  // Down Arrow
  else if (e.keyCode === 40) {
    if (currentSelectedIndex < 2) {
      currentSelectedIndex++;
      difficultyOptionClicked(option[currentSelectedIndex]);
    } else {
      difficultyOptionClicked(option[0]);
    }
  }
  // Enter Key
  else if (e.keyCode === 13) {
    goToPlayground();
  }
}
