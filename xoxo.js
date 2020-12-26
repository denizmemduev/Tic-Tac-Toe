var x = document.getElementById("x");
var o = document.getElementById("o");
var boxes = document.getElementsByClassName("box");

$(document).ready(function () {
  var winner = false;
  var player1 = [];
  var player2 = [];
  var winc = [];
  var num = 0;

  var conditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  function check() {
    console.log(player1);

    for (let i = 0; i < conditions.length; i++) {
      if (
        player1.includes(conditions[i][0]) &&
        player1.includes(conditions[i][1]) &&
        player1.includes(conditions[i][2])
      ) {
        console.log("WE have a winner");

        winner = true;
        winc.push(conditions[i][0]);
        winc.push(conditions[i][1]);
        winc.push(conditions[i][2]);
        o.innerHTML = "WINNER - X";
        $("#o").css({
          opacity: "1",
          transition: "0,5s",
        });
      } else if (
        player2.includes(conditions[i][0]) &&
        player2.includes(conditions[i][1]) &&
        player2.includes(conditions[i][2])
      ) {
        console.log("WE have a winner");
        winner = true;
        winc.push(conditions[i][0]);
        winc.push(conditions[i][1]);
        winc.push(conditions[i][2]);
        o.innerHTML = "WINNER - O";
        $("#o").css({
          opacity: "1",
          transition: "0,5s",
        });
      } else if (winner == false && player1.length == 5) {
        o.innerHTML = "DRAW";
        $("#o").css({
          opacity: "1",
          transition: "0,5s",
        });
      }
    }
  }

  $("li").click(function () {
    if (winner == false) {
      if (num % 2 == 0 && $(this).text() != "X" && $(this).text() != "O") {
        $(this).html("X");
        player1.push($(this).val());
        num++;
      }
      if (num % 2 != 0 && $(this).text() != "X" && $(this).text() != "O") {
        $(this).html("O");
        player2.push($(this).val());
        num++;
      }
      check();
    }
    if (winner == true) {
      console.log(winc);
      for (let y = 0; y < winc.length; y++) {
        $("#" + winc[y]).css({
          transition: "0.5s",
          "background-color": "rgb(170, 170, 170)",
        });
        $("h1").css({
          transition: "0.5s",
          color: "#4FA037",
        });
      }
    }
  });

  function refresh() {
    for (let i = 0; i < boxes.length; i++) {
      boxes[i].innerHTML = "";

      for (let y = 0; y <= winc.length; y++) {
        $("#" + winc[y]).css({
          "background-color": "rgb(121, 121, 121)",
        });
        $("h1").css({
          color: "white",
        });
        $("#o").css({
          opacity: "0",
          transition: "0,5s",
        });
      }
    }
    player1 = [];
    winc = [];
    player2 = [];
    winner = false;
    num = 0;
  }

  $("button").click(function () {
    refresh();
  });
});
