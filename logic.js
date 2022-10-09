const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
const btn5 = document.getElementById("btn5");
const btn6 = document.getElementById("btn6");
const btn7 = document.getElementById("btn7");
const btn8 = document.getElementById("btn8");
const btn9 = document.getElementById("btn9");
const reset = document.querySelector(".resetBtn");
let player1Score = document.querySelector(".player1score");
let player2Score = document.querySelector(".player2score");
let player1ScoreCounter = 0;
let player2ScoreCounter = 0;
let playerFlag = true;
const turnCount = document.querySelector(".turnCount");
let turnCounter = 0;

function game1() {
	if (playerFlag) {
		btn1.style.backgroundColor = "green";
		playerFlag = false;
		turnCounter++;
		turnCount.innerHTML = turnCounter;

		winGame();
	} else if (!playerFlag) {
		btn1.style.backgroundColor = "red";
		playerFlag = true;
		turnCounter++;
		turnCount.innerHTML = turnCounter;

		winGame();
	}
}
function game2() {
	if (playerFlag) {
		btn2.style.backgroundColor = "green";
		playerFlag = false;
		turnCounter++;
		turnCount.innerHTML = turnCounter;

		winGame();
	} else if (!playerFlag) {
		btn2.style.backgroundColor = "red";
		playerFlag = true;
		turnCounter++;
		turnCount.innerHTML = turnCounter;

		winGame();
	}
}
function game3() {
	if (playerFlag) {
		btn3.style.backgroundColor = "green";
		playerFlag = false;
		turnCounter++;
		turnCount.innerHTML = turnCounter;

		winGame();
	} else if (!playerFlag) {
		btn3.style.backgroundColor = "red";
		playerFlag = true;
		turnCounter++;
		turnCount.innerHTML = turnCounter;

		winGame();
	}
}
function game4() {
	if (playerFlag) {
		btn4.style.backgroundColor = "green";
		playerFlag = false;
		turnCounter++;
		turnCount.innerHTML = turnCounter;

		winGame();
	} else if (!playerFlag) {
		btn4.style.backgroundColor = "red";
		playerFlag = true;
		turnCounter++;
		turnCount.innerHTML = turnCounter;

		winGame();
	}
}
function game5() {
	if (playerFlag) {
		btn5.style.backgroundColor = "green";
		playerFlag = false;
		turnCounter++;
		turnCount.innerHTML = turnCounter;

		winGame();
	} else if (!playerFlag) {
		btn5.style.backgroundColor = "red";
		playerFlag = true;
		turnCounter++;
		turnCount.innerHTML = turnCounter;

		winGame();
	}
}
function game6() {
	if (playerFlag) {
		btn6.style.backgroundColor = "green";
		playerFlag = false;
		turnCounter++;
		turnCount.innerHTML = turnCounter;

		winGame();
	} else if (!playerFlag) {
		btn6.style.backgroundColor = "red";
		playerFlag = true;
		turnCounter++;
		turnCount.innerHTML = turnCounter;

		winGame();
	}
}
function game7() {
	if (playerFlag) {
		btn7.style.backgroundColor = "green";
		playerFlag = false;
		turnCounter++;
		turnCount.innerHTML = turnCounter;

		winGame();
	} else if (!playerFlag) {
		btn7.style.backgroundColor = "red";
		playerFlag = true;
		turnCounter++;
		turnCount.innerHTML = turnCounter;

		winGame();
	}
}
function game8() {
	if (playerFlag) {
		btn8.style.backgroundColor = "green";
		playerFlag = false;
		turnCounter++;
		turnCount.innerHTML = turnCounter;

		winGame();
	} else if (!playerFlag) {
		btn8.style.backgroundColor = "red";
		playerFlag = true;
		turnCounter++;
		turnCount.innerHTML = turnCounter;

		winGame();
	}
}
function game9() {
	if (playerFlag) {
		btn9.style.backgroundColor = "green";
		playerFlag = false;
		turnCounter++;
		turnCount.innerHTML = turnCounter;

		winGame();
	} else if (!playerFlag) {
		btn9.style.backgroundColor = "red";
		playerFlag = true;
		turnCounter++;
		turnCount.innerHTML = turnCounter;

		winGame();
	}
}
function winGame() {
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
		reset.style.display = "block";
		player1ScoreCounter++;
		player1Score.innerHTML = player1ScoreCounter;
	} else if (turnCounter >= 9) {
		reset.style.display = "block";
	}
	if (
		(btn1.style.backgroundColor == "red" &&
			btn2.style.backgroundColor == "red" &&
			btn3.style.backgroundColor == "red") ||
		(btn4.style.backgroundColor == "red" &&
			btn5.style.backgroundColor == "red" &&
			btn6.style.backgroundColor == "red") ||
		(btn7.style.backgroundColor == "red" &&
			btn8.style.backgroundColor == "red" &&
			btn9.style.backgroundColor == "red") ||
		(btn1.style.backgroundColor == "red" &&
			btn4.style.backgroundColor == "red" &&
			btn7.style.backgroundColor == "red") ||
		(btn2.style.backgroundColor == "red" &&
			btn5.style.backgroundColor == "red" &&
			btn8.style.backgroundColor == "red") ||
		(btn3.style.backgroundColor == "red" &&
			btn6.style.backgroundColor == "red" &&
			btn9.style.backgroundColor == "red") ||
		(btn3.style.backgroundColor == "red" &&
			btn5.style.backgroundColor == "red" &&
			btn7.style.backgroundColor == "red") ||
		(btn1.style.backgroundColor == "red" &&
			btn5.style.backgroundColor == "red" &&
			btn9.style.backgroundColor == "red")
	) {
		reset.style.display = "block";
		player2ScoreCounter++;
		player2Score.innerHTML = player1ScoreCounter;
	}
}
function resetGame() {
	turnCounter = 0;
	btn1.style.backgroundColor = "white";
	btn2.style.backgroundColor = "white";
	btn3.style.backgroundColor = "white";
	btn4.style.backgroundColor = "white";
	btn5.style.backgroundColor = "white";
	btn6.style.backgroundColor = "white";
	btn7.style.backgroundColor = "white";
	btn8.style.backgroundColor = "white";
	btn9.style.backgroundColor = "white";
	reset.style.display = "none";
}

reset.addEventListener("click", resetGame);
btn1.addEventListener("click", game1);
btn2.addEventListener("click", game2);
btn3.addEventListener("click", game3);
btn4.addEventListener("click", game4);
btn5.addEventListener("click", game5);
btn6.addEventListener("click", game6);
btn7.addEventListener("click", game7);
btn8.addEventListener("click", game8);
btn9.addEventListener("click", game9);
