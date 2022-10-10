const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
const btn5 = document.getElementById("btn5");
const btn6 = document.getElementById("btn6");
const btn7 = document.getElementById("btn7");
const btn8 = document.getElementById("btn8");
const btn9 = document.getElementById("btn9");
const reset = document.querySelector(".reset");
const resetGreen = document.querySelector(".resetGreen");
const resetRed = document.querySelector(".resetRed");
let player1Score = document.querySelector(".player1score");
let player2Score = document.querySelector(".player2score");
let player1ScoreCounter = 0;
let player2ScoreCounter = 0;
let playerFlag = true;
const turnCount = document.querySelector(".turnCount");
let turnCounter = 0;

let wonBanner = document.querySelector(".wonBanner");
let lostBanner = document.querySelector(".lostBanner");

function game1() {
	if (playerFlag) {
		btn1.style.backgroundColor = "green";
		playerFlag = false;
		turnCounter++;

		winGameGreen();
	} else if (!playerFlag) {
		btn1.style.backgroundColor = "brown";
		playerFlag = true;
		turnCounter++;

		winGameRed();
	}
}
function game2() {
	if (playerFlag) {
		btn2.style.backgroundColor = "green";
		playerFlag = false;
		turnCounter++;

		winGameGreen();
	} else if (!playerFlag) {
		btn2.style.backgroundColor = "brown";
		playerFlag = true;
		turnCounter++;

		winGameRed();
	}
}
function game3() {
	if (playerFlag) {
		btn3.style.backgroundColor = "green";
		playerFlag = false;
		turnCounter++;

		winGameGreen();
	} else if (!playerFlag) {
		btn3.style.backgroundColor = "brown";
		playerFlag = true;
		turnCounter++;

		winGameRed();
	}
}
function game4() {
	if (playerFlag) {
		btn4.style.backgroundColor = "green";
		playerFlag = false;
		turnCounter++;

		winGameGreen();
	} else if (!playerFlag) {
		btn4.style.backgroundColor = "brown";
		playerFlag = true;
		turnCounter++;

		winGameRed();
	}
}
function game5() {
	if (playerFlag) {
		btn5.style.backgroundColor = "green";
		playerFlag = false;
		turnCounter++;

		winGameGreen();
	} else if (!playerFlag) {
		btn5.style.backgroundColor = "brown";
		playerFlag = true;
		turnCounter++;

		winGameRed();
	}
}
function game6() {
	if (playerFlag) {
		btn6.style.backgroundColor = "green";
		playerFlag = false;
		turnCounter++;

		winGameGreen();
	} else if (!playerFlag) {
		btn6.style.backgroundColor = "brown";
		playerFlag = true;
		turnCounter++;

		winGameRed();
	}
}
function game7() {
	if (playerFlag) {
		btn7.style.backgroundColor = "green";
		playerFlag = false;
		turnCounter++;

		winGameGreen();
	} else if (!playerFlag) {
		btn7.style.backgroundColor = "brown";
		playerFlag = true;
		turnCounter++;

		winGameRed();
	}
}
function game8() {
	if (playerFlag) {
		btn8.style.backgroundColor = "green";
		playerFlag = false;
		turnCounter++;

		winGameGreen();
	} else if (!playerFlag) {
		btn8.style.backgroundColor = "brown";
		playerFlag = true;
		turnCounter++;

		winGameRed();
	}
}
function game9() {
	if (playerFlag) {
		btn9.style.backgroundColor = "green";
		playerFlag = false;
		turnCounter++;

		winGameGreen();
	} else if (!playerFlag) {
		btn9.style.backgroundColor = "brown";
		playerFlag = true;
		turnCounter++;

		winGameRed();
	}
}
function winGameGreen() {
	if (
		(btn1.style.backgroundColor == "green" &&
			btn2.style.backgroundColor == "green" &&
			btn3.style.backgroundColor == "green") ||
		(btn4.style.backgroundColor == "green" &&
			btn5.style.backgroundColor == "green" &&
			btn6.style.backgroundColor == "green") ||
		(btn7.style.backgroundColor == "green" &&
			btn8.style.backgroundColor == "green" &&
			btn9.style.backgroundColor == "green") ||
		(btn1.style.backgroundColor == "green" &&
			btn4.style.backgroundColor == "green" &&
			btn7.style.backgroundColor == "green") ||
		(btn2.style.backgroundColor == "green" &&
			btn5.style.backgroundColor == "green" &&
			btn8.style.backgroundColor == "green") ||
		(btn3.style.backgroundColor == "green" &&
			btn6.style.backgroundColor == "green" &&
			btn9.style.backgroundColor == "green") ||
		(btn3.style.backgroundColor == "green" &&
			btn5.style.backgroundColor == "green" &&
			btn7.style.backgroundColor == "green") ||
		(btn1.style.backgroundColor == "green" &&
			btn5.style.backgroundColor == "green" &&
			btn9.style.backgroundColor == "green")
	) {
		console.log("green wins");
		resetGreen.style.visibility = "visible";
		player1ScoreCounter++;
		player1Score.innerHTML = player1ScoreCounter;
		reset.style.display = "block";

		wonBanner.classList.add("wonBannerGreen");

		lostBanner.classList.add("lostBannerRed");
	} else if (turnCounter >= 9) {
		resetRed.style.visibility = "visible";
		resetGreen.style.visibility = "visible";
	}
}
function winGameRed() {
	if (
		(btn1.style.backgroundColor == "brown" &&
			btn2.style.backgroundColor == "brown" &&
			btn3.style.backgroundColor == "brown") ||
		(btn4.style.backgroundColor == "brown" &&
			btn5.style.backgroundColor == "brown" &&
			btn6.style.backgroundColor == "brown") ||
		(btn7.style.backgroundColor == "brown" &&
			btn8.style.backgroundColor == "brown" &&
			btn9.style.backgroundColor == "brown") ||
		(btn1.style.backgroundColor == "brown" &&
			btn4.style.backgroundColor == "brown" &&
			btn7.style.backgroundColor == "brown") ||
		(btn2.style.backgroundColor == "brown" &&
			btn5.style.backgroundColor == "brown" &&
			btn8.style.backgroundColor == "brown") ||
		(btn3.style.backgroundColor == "brown" &&
			btn6.style.backgroundColor == "brown" &&
			btn9.style.backgroundColor == "brown") ||
		(btn3.style.backgroundColor == "brown" &&
			btn5.style.backgroundColor == "brown" &&
			btn7.style.backgroundColor == "brown") ||
		(btn1.style.backgroundColor == "brown" &&
			btn5.style.backgroundColor == "brown" &&
			btn9.style.backgroundColor == "brown")
	) {
		console.log("red wins");
		resetRed.style.visibility = "visible";
		player2ScoreCounter++;
		player2Score.innerHTML = player2ScoreCounter;
		reset.style.display = "block";

		wonBanner.classList.add("wonBannerRed");

		lostBanner.classList.add("lostBannerGreen");
	} else if (turnCounter >= 9) {
		resetGreen.style.visibility = "visible";
		resetRed.style.visibility = "visible";
	}
}
function resetGame() {
	turnCounter = 0;
	btn1.style.backgroundColor = "grey";
	btn2.style.backgroundColor = "grey";
	btn3.style.backgroundColor = "grey";
	btn4.style.backgroundColor = "grey";
	btn5.style.backgroundColor = "grey";
	btn6.style.backgroundColor = "grey";
	btn7.style.backgroundColor = "grey";
	btn8.style.backgroundColor = "grey";
	btn9.style.backgroundColor = "grey";
	reset.style.display = "none";
	wonBanner.classList.remove("wonBannerGreen");
	wonBanner.classList.remove("wonBannerRed");
	lostBanner.classList.remove("lostBannerGreen");
	lostBanner.classList.remove("lostBannerRed");
	resetGreen.style.visibility = "hidden";
	resetRed.style.visibility = "hidden";
}

resetGreen.addEventListener("click", resetGame);
resetRed.addEventListener("click", resetGame);
btn1.addEventListener("click", game1);
btn2.addEventListener("click", game2);
btn3.addEventListener("click", game3);
btn4.addEventListener("click", game4);
btn5.addEventListener("click", game5);
btn6.addEventListener("click", game6);
btn7.addEventListener("click", game7);
btn8.addEventListener("click", game8);
btn9.addEventListener("click", game9);
