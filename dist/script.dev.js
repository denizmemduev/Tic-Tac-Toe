"use strict";

var x = document.getElementById("x");
var o = document.getElementById("o");

function refresh() {
  location.reload();
}

$(document).ready(function () {
  var winner = false;
  var player1 = [];
  var player2 = [];
  var winc = [];

  function check() {
    var conditions = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
    console.log(player1);

    for (var i = 0; i < conditions.length; i++) {
      if (player1.includes(conditions[i][0]) && player1.includes(conditions[i][1]) && player1.includes(conditions[i][2])) {
        console.log("WE have a winner");
        winner = true;
        winc.push(conditions[i][0]);
        winc.push(conditions[i][1]);
        winc.push(conditions[i][2]);
        x.innerHTML = "(X) WINS ";
        break;
      }

      if (player2.includes(conditions[i][0]) && player2.includes(conditions[i][1]) && player2.includes(conditions[i][2])) {
        console.log("WE have a winner");
        winner = true;
        winc.push(conditions[i][0]);
        winc.push(conditions[i][1]);
        winc.push(conditions[i][2]);
        o.innerHTML = "(O) WINS ";
        break;
      }
    }
  }

  var num = 0;
  $('li').click(function () {
    if (winner == false) {
      if (num % 2 == 0 && $(this).text() != 'X' && $(this).text() != 'O') {
        $(this).html('X');
        player1.push($(this).val());
        num++;
      }

      if (num % 2 != 0 && $(this).text() != 'X' && $(this).text() != 'O') {
        $(this).html('O');
        player2.push($(this).val());
        num++;
      }

      check();
    }

    if (winner == true) {
      console.log(winc);

      for (var y = 0; y < winc.length; y++) {
        $("#" + winc[y]).css({
          "transition": "0.5s",
          "background-color": "#1DB954"
        });
        $('h1').css({
          "transition": "0.5s",
          "color": "#1DB954"
        });
      }
    }
  });
});