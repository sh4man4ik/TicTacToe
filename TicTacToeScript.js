let walk = 0; //x => 1, o => 0
let rememberWalk = 5;

let walkIsTrue = Boolean(true);

let walkBot = Boolean(true);

let xWins = 0;
let oWins = 0;

let lastWalk = 0;

//Array
let array = ["n", "n", "n",
             "n", "n", "n",
             "n", "n", "n"];

//Play Again
function playAgain() {
    document.getElementById("playAgain").style.display = "none";
    document.getElementById("win").style.display = "none";

    walkIsTrue = true;
    walkBot = true;
    lastWalk = 0;

    array[0] = "n";
    array[1] = "n";
    array[2] = "n";
    array[3] = "n";
    array[4] = "n";
    array[5] = "n";
    array[6] = "n";
    array[7] = "n";
    array[8] = "n";

    document.getElementById("whoWalk").style.display = "block";

    document.getElementById("one").textContent = "";
    document.getElementById("two").textContent = "";
    document.getElementById("three").textContent = "";
    document.getElementById("four").textContent = "";
    document.getElementById("five").textContent = "";
    document.getElementById("six").textContent = "";
    document.getElementById("seven").textContent = "";
    document.getElementById("eight").textContent = "";
    document.getElementById("nine").textContent = "";

    let trueX = document.getElementById("x").checked;
    if (trueX == true) {
        walk = 0;
    } else {
        walk = 1;
    }

}

function controllGame() {

    //Win x
    if (
        (array[0] == "x" && array[3] == "x" && array[6] == "x") ||
        (array[1] == "x" && array[4] == "x" && array[7] == "x") ||
        (array[2] == "x" && array[5] == "x" && array[8] == "x") ||
        (array[0] == "x" && array[1] == "x" && array[2] == "x") ||
        (array[3] == "x" && array[4] == "x" && array[5] == "x") ||
        (array[6] == "x" && array[7] == "x" && array[8] == "x") ||
        (array[0] == "x" && array[4] == "x" && array[8] == "x") ||
        (array[2] == "x" && array[4] == "x" && array[6] == "x")
    ) {
        if (walkIsTrue == true) {
            xWins++;

            document.getElementById("xWins").textContent = "Wins x: " + xWins;
        }
        
        walkIsTrue = false;
        document.getElementById("win").style.display = "block";
        document.getElementById("win").textContent = "THE CROSSES WON!";

        document.getElementById("playAgain").style.display = "block";
    } else if ( //Win o
        (array[0] == "o" && array[3] == "o" && array[6] == "o") ||
        (array[1] == "o" && array[4] == "o" && array[7] == "o") ||
        (array[2] == "o" && array[5] == "o" && array[8] == "o") ||
        (array[0] == "o" && array[1] == "o" && array[2] == "o") ||
        (array[3] == "o" && array[4] == "o" && array[5] == "o") ||
        (array[6] == "o" && array[7] == "o" && array[8] == "o") ||
        (array[0] == "o" && array[4] == "o" && array[8] == "o") ||
        (array[2] == "o" && array[4] == "o" && array[6] == "o")
    ) {
        if (walkIsTrue == true) {
            oWins++;

            document.getElementById("oWins").textContent = "Wins o: " + oWins;
        }

        walkIsTrue = false;
        document.getElementById("win").style.display = "block";
        document.getElementById("win").textContent = "THE ZEROES WON!";

        document.getElementById("playAgain").style.display = "block";
    } else if ( //Draw
        (array[0] == "x" || array[0] == "o") &&
        (array[1] == "x" || array[1] == "o") &&
        (array[2] == "x" || array[2] == "o") &&
        (array[3] == "x" || array[3] == "o") &&
        (array[4] == "x" || array[4] == "o") &&
        (array[5] == "x" || array[5] == "o") &&
        (array[6] == "x" || array[6] == "o") &&
        (array[7] == "x" || array[7] == "o") &&
        (array[8] == "x" || array[8] == "o")
    ) {
        walkIsTrue = false;
        document.getElementById("win").style.display = "block";
        document.getElementById("win").textContent = "DRAW!";

        document.getElementById("playAgain").style.display = "block";
    }
}

//Controll
lastWalk = 0;
function controll() {
    controllGame()

    let randomPlace;
    let chooseMode = document.getElementById("chooseMode").value;
    let controlPlace = Boolean(false);

    if (chooseMode == "With a bot" && walkIsTrue == true && walkBot == true) {

    while (controlPlace == false && lastWalk < 4) {
        randomPlace = Math.round(Math.random() * 8);

        switch (randomPlace) {
            case 0:
                if (array[0] == "n") {
                    controlPlace = true;
                    if (walk == 1) {
                        document.getElementById("one").textContent = "O";
                        array[0] = "o";
                        walk = 0;
                        lastWalk++;
                    } else {
                        document.getElementById("one").textContent = "X";
                        array[0] = "x";
                        walk = 1;
                        lastWalk++;
                    }
                }
                break;

            case 1:
                if (array[3] == "n") {
                    controlPlace = true;
                    if (walk == 1) {
                        document.getElementById("two").textContent = "O";
                        array[3] = "o";
                        walk = 0;
                        lastWalk++;
                    } else {
                        document.getElementById("two").textContent = "X";
                        array[3] = "x";
                        walk = 1;
                        lastWalk++;
                    }
                }
                break;

            case 2:
                if (array[6] == "n") {
                    controlPlace = true;
                    if (walk == 1) {
                        document.getElementById("three").textContent = "O";
                        array[6] = "o";
                        walk = 0;
                        lastWalk++;
                    } else {
                        document.getElementById("three").textContent = "X";
                        array[6] = "x";
                        walk = 1;
                        lastWalk++;
                    }
                }
                break;

            case 3:
                if (array[1] == "n") {
                    controlPlace = true;
                    if (walk == 1) {
                        document.getElementById("four").textContent = "O";
                        array[1] = "o";
                        walk = 0;
                        lastWalk++;
                    } else {
                        document.getElementById("four").textContent = "X";
                        array[1] = "x";
                        walk = 1;
                        lastWalk++;
                    }
                }
                break;

            case 4:
                if (array[4] == "n") {
                    controlPlace = true;
                    if (walk == 1) {
                        document.getElementById("five").textContent = "O";
                        array[4] = "o";
                        walk = 0;
                        lastWalk++;
                    } else {
                        document.getElementById("five").textContent = "X";
                        array[4] = "x";
                        walk = 1;
                        lastWalk++;
                    }
                }
                break;

            case 5:
                if (array[7] == "n") {
                    controlPlace = true;
                    if (walk == 1) {
                        document.getElementById("six").textContent = "O";
                        array[7] = "o";
                        walk = 0;
                        lastWalk++;
                    } else {
                        document.getElementById("six").textContent = "X";
                        array[7] = "x";
                        walk = 1;
                        lastWalk++;
                    }
                }
                break;

            case 6:
                if (array[2] == "n") {
                    controlPlace = true;
                    if (walk == 1) {
                        document.getElementById("seven").textContent = "O";
                        array[2] = "o";
                        walk = 0;
                        lastWalk++;
                    } else {
                        document.getElementById("seven").textContent = "X";
                        array[2] = "x";
                        walk = 1;
                        lastWalk++;
                    }
                }
                break;
                
            case 7:
                if (array[5] == "n") {
                    controlPlace = true;
                    if (walk == 1) {
                        document.getElementById("eight").textContent = "O";
                        array[5] = "o";
                        walk = 0;
                        lastWalk++;
                    } else {
                        document.getElementById("eight").textContent = "X";
                        array[5] = "x";
                        walk = 1;
                        lastWalk++;
                    }
                }
                break;

            case 8:
                if (array[8] == "n") {
                    controlPlace = true;
                    if (walk == 1) {
                        document.getElementById("nine").textContent = "O";
                        array[8] = "o";
                        walk = 0;
                        lastWalk++;
                    } else {
                        document.getElementById("nine").textContent = "X";
                        array[8] = "x";
                        walk = 1;
                        lastWalk++;
                    }
                }
                break;
        }
    }
    }
}


//Who walk
function oMove() {
    walk = 1;
}
function xMove() {
    walk = 0;
}

//Hide
function hide_whoWalk() {
    document.getElementById("whoWalk").style.display = "none";
}

//Walk
function oneClick() {
    if (document.getElementById("one").outerText == "X" || document.getElementById("one").outerText == "O") {
        walkBot = false;
    } else {
        walkBot = true;
    }

    if (walk == 0) {
        //x
        if (document.getElementById("one").outerText == "" && walkIsTrue == true) {
            document.getElementById("one").textContent = "X";
            walk = 1;

            array[0] = "x";
        }
    } else {
        //o
        if (document.getElementById("one").outerText == "" && walkIsTrue == true) {
            document.getElementById("one").textContent = "O";
            walk = 0;

            array[0] = "o";
        }
    }
}

function twoClick() {
    if (document.getElementById("two").outerText == "X" || document.getElementById("two").outerText == "O") {
        walkBot = false;
    } else {
        walkBot = true;
    }

    if (walk == 0) {
        //x
        if (document.getElementById("two").outerText == "" && walkIsTrue == true) {
            document.getElementById("two").textContent = "X";
            walk = 1;

            array[3] = "x";
        }
    } else {
        //o
        if (document.getElementById("two").outerText == "" && walkIsTrue == true) {
            document.getElementById("two").textContent = "O";
            walk = 0;

            array[3] = "o";
        }
    }
}

function threeClick() {
    if (document.getElementById("three").outerText == "X" || document.getElementById("three").outerText == "O") {
        walkBot = false;
    } else {
        walkBot = true;
    }

    if (walk == 0) {
        //x
        if (document.getElementById("three").outerText == "" && walkIsTrue == true) {
            document.getElementById("three").textContent = "X";
            walk = 1;

            array[6] = "x";
        }
    } else {
        //o
        if (document.getElementById("three").outerText == "" && walkIsTrue == true) {
            document.getElementById("three").textContent = "O";
            walk = 0;

            array[6] = "o";
        }
    }
}

function fourClick() {
    if (document.getElementById("four").outerText == "X" || document.getElementById("four").outerText == "O") {
        walkBot = false;
    } else {
        walkBot = true;
    }

    if (walk == 0) {
        //x
        if (document.getElementById("four").outerText == "" && walkIsTrue == true) {
            document.getElementById("four").textContent = "X";
            walk = 1;

            array[1] = "x";
        }
    } else {
        //o
        if (document.getElementById("four").outerText == "" && walkIsTrue == true) {
            document.getElementById("four").textContent = "O";
            walk = 0;

            array[1] = "o";
        }
    }
}

function fiveClick() {
    if (document.getElementById("five").outerText == "X" || document.getElementById("five").outerText == "O") {
        walkBot = false;
    } else {
        walkBot = true;
    }

    if (walk == 0) {
        //x
        if (document.getElementById("five").outerText == "" && walkIsTrue == true) {
            document.getElementById("five").textContent = "X";
            walk = 1;

            array[4] = "x";
        }
    } else {
        //o
        if (document.getElementById("five").outerText == "" && walkIsTrue == true) {
            document.getElementById("five").textContent = "O";
            walk = 0;

            array[4] = "o";
        }
    }
}

function sixClick() {
    if (document.getElementById("six").outerText == "X" || document.getElementById("six").outerText == "O") {
        walkBot = false;
    } else {
        walkBot = true;
    }

    if (walk == 0) {
        //x
        if (document.getElementById("six").outerText == "" && walkIsTrue == true) {
            document.getElementById("six").textContent = "X";
            walk = 1;

            array[7] = "x";
        }
    } else {
        //o
        if (document.getElementById("six").outerText == "" && walkIsTrue == true) {
            document.getElementById("six").textContent = "O";
            walk = 0;

            array[7] = "o";
        }
    }
}

function sevenClick() {
    if (document.getElementById("seven").outerText == "X" || document.getElementById("seven").outerText == "O") {
        walkBot = false;
    } else {
        walkBot = true;
    }

    if (walk == 0) {
        //x
        if (document.getElementById("seven").outerText == "" && walkIsTrue == true) {
            document.getElementById("seven").textContent = "X";
            walk = 1;

            array[2] = "x";
        }
    } else {
        //o
        if (document.getElementById("seven").outerText == "" && walkIsTrue == true) {
            document.getElementById("seven").textContent = "O";
            walk = 0;

            array[2] = "o";
        }
    }
}

function eightClick() {
    if (document.getElementById("eight").outerText == "X" || document.getElementById("eight").outerText == "O") {
        walkBot = false;
    } else {
        walkBot = true;
    }

    if (walk == 0) {
        //x
        if (document.getElementById("eight").outerText == "" && walkIsTrue == true) {
            document.getElementById("eight").textContent = "X";
            walk = 1;

            array[5] = "x";
        }
    } else {
        //o
        if (document.getElementById("eight").outerText == "" && walkIsTrue == true) {
            document.getElementById("eight").textContent = "O";
            walk = 0;

            array[5] = "o";
        }
    }
}

function nineClick() {
    if (document.getElementById("nine").outerText == "X" || document.getElementById("nine").outerText == "O") {
        walkBot = false;
    } else {
        walkBot = true;
    }

    if (walk == 0) {
        //x
        if (document.getElementById("nine").outerText == "" && walkIsTrue == true) {
            document.getElementById("nine").textContent = "X";
            walk = 1;

            array[8] = "x";
        }
    } else {
        //o
        if (document.getElementById("nine").outerText == "" && walkIsTrue == true) {
            document.getElementById("nine").textContent = "O";
            walk = 0;

            array[8] = "o";
        }
    }
}