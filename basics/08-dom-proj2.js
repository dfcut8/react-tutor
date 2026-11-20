const score = JSON.parse(localStorage.getItem("js-score")) || {
  w: 0,
  l: 0,
  t: 0
}

const scoreElement = document.querySelector(".score");
scoreElement.innerHTML = `Wins: ${score.w}, Loses: ${score.l}, Ties: ${score.t}`;

function handleSubscribeButton(humanSelected) {

  const random = Math.random();
  let computerSelected = ''
  if (random > 0 && random < 0.33) {
    computerSelected = "r";
  } else if (random > 0.33 && random < 0.66) {
    computerSelected = "p";
  } else {
    computerSelected = "s";
  }
  checkAndUpdateScore(humanSelected, computerSelected)
}

function checkAndUpdateScore(humanSelected, computerSelected) {
  console.log("checkAndUpdateScore start.", humanSelected, computerSelected)
  if (humanSelected === computerSelected) {
    score.t++;
  } else {
    if (humanSelected === "r" && computerSelected === "s") {
      console.log("human win!");
      score.w++;
    } else if (humanSelected === "p" && computerSelected === "r") {
      console.log("human win!");
      score.w++;
    } else if (humanSelected === "s" && computerSelected === "p") {
      console.log("human win!");
      score.w++;
    } else {
      console.log("human lost!!! :)");
      score.l++
    }
  }
  localStorage.setItem("js-score", JSON.stringify(score));
  scoreElement.innerHTML = `Wins: ${score.w}, Loses: ${score.l}, Ties: ${score.t}`;
}