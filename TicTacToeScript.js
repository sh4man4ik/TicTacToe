let walk = 0; //x => 1, o => 0
let rememberWalk = 5;

let walkIsTrue = Boolean(true);

let xWins = 0;
let oWins = 0;

//Array
let array = ["0", "1", "2",
             "3", "4", "5",
             "6", "7", "8"];

//Play Again
function playAgain() {
    document.getElementById("playAgain").style.display = "none";
    document.getElementById("win").style.display = "none";

    walkIsTrue = true;

    array[0] = "0";
    array[1] = "1";
    array[2] = "2";
    array[3] = "3";
    array[4] = "4";
    array[5] = "5";
    array[6] = "6";
    array[7] = "7";
    array[8] = "8";

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

    if (rememberWalk == 0) {
        document.getElementById("x").checked = true;
        walk = 0;
    } else {
        document.getElementById("o").checked = true;
        walk = 1;
    }

    rememberWalk = 5;
}

//Controll
function controll() {

    if (rememberWalk == 5) {
        rememberWalk = walk;
    }

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
