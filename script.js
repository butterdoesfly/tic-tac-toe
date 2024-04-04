winningText = document.getElementById("winningText");
active = false;
turn = ""
function select(object) {
	id = object.value;
	if (id=="x") {
		turn = "x";
	} else if (id=="o") {
		turn = "o";
	}
	active=true;
	document.getElementById("select").remove();
}
function change(box) {
	if (active==true) {
		Box = document.getElementById(box);
		Box.onclick="";
		if (turn == "x") {
			Box.innerHTML = "x";
			turn = "o";
		} else if (turn=="o") {
			Box.innerHTML = "o";
			turn = "x";
		}

		scoreTable = [
			[[document.getElementById("0").innerHTML], [document.getElementById("1").innerHTML], [document.getElementById("2").innerHTML]],
			[[document.getElementById("3").innerHTML], [document.getElementById("4").innerHTML], [document.getElementById("5").innerHTML]],
			[[document.getElementById("6").innerHTML], [document.getElementById("7").innerHTML], [document.getElementById("8").innerHTML]] 
		];
		score = 0

		if (
				scoreTable[0][0] == "x" && scoreTable[0][1] == "x" && scoreTable[0][2] == "x" ||
				scoreTable[1][0] == "x" && scoreTable[1][1] == "x" && scoreTable[1][2] == "x" ||
				scoreTable[2][0] == "x" && scoreTable[2][1] == "x" && scoreTable[2][2] == "x" ||

				scoreTable[0][0] == "x" && scoreTable[1][0] == "x" && scoreTable[2][0] == "x" ||
				scoreTable[0][1] == "x" && scoreTable[1][1] == "x" && scoreTable[2][1] == "x" ||
				scoreTable[0][2] == "x" && scoreTable[1][2] == "x" && scoreTable[2][2] == "x" ||

				scoreTable[0][0] == "x" && scoreTable[1][1] == "x" && scoreTable[2][2] == "x" ||
				scoreTable[0][2] == "x" && scoreTable[1][1] == "x" && scoreTable[2][0] == "x" 
			 ) {
					active = false
					winningText.innerHTML = "X WINS!!!";
			} else if 
				(
				scoreTable[0][0] == "o" && scoreTable[0][1] == "o" && scoreTable[0][2] == "o" ||
				scoreTable[1][0] == "o" && scoreTable[1][1] == "o" && scoreTable[1][2] == "o" ||
				scoreTable[2][0] == "o" && scoreTable[2][1] == "o" && scoreTable[2][2] == "o" ||

				scoreTable[0][0] == "o" && scoreTable[1][0] == "o" && scoreTable[2][0] == "o" ||
				scoreTable[0][1] == "o" && scoreTable[1][1] == "o" && scoreTable[2][1] == "o" ||
				scoreTable[0][2] == "o" && scoreTable[1][2] == "o" && scoreTable[2][2] == "o" ||

				scoreTable[0][0] == "o" && scoreTable[1][1] == "o" && scoreTable[2][2] == "o" ||
				scoreTable[0][2] == "o" && scoreTable[1][1] == "o" && scoreTable[2][0] == "o"
				) {
					active = false
					winningText.innerHTML = "O WINS!!!";
			} else {
					tie = true
					for (i=0; i < 3; i+=1) {
						for (j=0; j < 3; j+=1) {
							if (scoreTable[i][j] == "") {
								tie = false
							}
						}
					}
					if (tie==true) {
						winningText.innerHTML = "TIE!!!";
						active = false
					}
			}
	}
}
