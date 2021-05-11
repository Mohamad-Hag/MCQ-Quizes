let difficulty = "easy";

function goToPlayground() {
  window.location.href = "pages/playground.html?difficulty=" + difficulty;
}
function difficultyOptionClicked(e)
{
  let options = document.querySelectorAll(".difficulty-option");
  options.forEach((option) => {
    option.removeAttribute("id");
  });
  e.setAttribute("id", "difficulty-option-selected");
  difficulty = e.innerText.toLowerCase();
}
