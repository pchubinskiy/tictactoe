$(function() {

var turn = Math.floor(Math.random() * 10);
var ex = "images/ex.png";
var oh = "images/oh.png";
var i = 1;
var j = 10;
var k = 20;
var l = 30;

function clearBoard() {
  openSquares();
  $('#char1, #char2, #char3, #char4, #char5, #char6, #char7, #char8, #char9').removeClass().addClass('black').attr("src", "images/black.png");
  i = 1;
  j = 10;
  k = 20;
  l = 30;
}

function xFirst() {
  if ($('#x_first').hasClass('yes')) {
    $('#x_first').removeClass('yes').addClass('no').text("Turn X-First On");
    //used for assigning X/O/Black image
    localStorage.setItem(1, oh);
    localStorage.setItem(2, ex);
    localStorage.setItem(3, oh);
    localStorage.setItem(4, ex);
    localStorage.setItem(5, oh);
    localStorage.setItem(6, ex);
    localStorage.setItem(7, oh);
    localStorage.setItem(8, ex);
    localStorage.setItem(9, oh);

    //used for recording X/O mark
    localStorage.setItem(10, 'oh');
    localStorage.setItem(11, 'ex');
    localStorage.setItem(12, 'oh');
    localStorage.setItem(13, 'ex');
    localStorage.setItem(14, 'oh');
    localStorage.setItem(15, 'ex');
    localStorage.setItem(16, 'oh');
    localStorage.setItem(17, 'ex');
    localStorage.setItem(18, 'oh');

    localStorage.setItem(20, '');
    localStorage.setItem(21, '');
    localStorage.setItem(22, '');
    localStorage.setItem(23, '');
    localStorage.setItem(24, '');
    localStorage.setItem(25, '');
    localStorage.setItem(26, '');
    localStorage.setItem(27, '');
    localStorage.setItem(28, '');

    localStorage.setItem(30, '');
    localStorage.setItem(31, '');
    localStorage.setItem(32, '');
    localStorage.setItem(33, '');
    localStorage.setItem(34, '');
    localStorage.setItem(35, '');
    localStorage.setItem(36, '');
    localStorage.setItem(37, '');
    localStorage.setItem(38, '');

    //record of mark
    // localStorage.setItem(20, 'black');
    // localStorage.setItem(21, 'black');
    // localStorage.setItem(22, 'black');
    // localStorage.setItem(23, 'black');
    // localStorage.setItem(24, 'black');
    // localStorage.setItem(25, 'black');
    // localStorage.setItem(26, 'black');
    // localStorage.setItem(27, 'black');
    // localStorage.setItem(28, 'black');

    // //record of board state
    // localStorage.setItem(30, 'busy');
    // localStorage.setItem(31, 'busy');
    // localStorage.setItem(32, 'busy');
    // localStorage.setItem(33, 'busy');
    // localStorage.setItem(34, 'busy');
    // localStorage.setItem(35, 'busy');
    // localStorage.setItem(36, 'busy');
    // localStorage.setItem(37, 'busy');
    // localStorage.setItem(38, 'busy');
  } else {
    $('#x_first').removeClass('no').addClass('yes').text("Turn X-First Off");
    localStorage.setItem(1, ex);
    localStorage.setItem(2, oh);
    localStorage.setItem(3, ex);
    localStorage.setItem(4, oh);
    localStorage.setItem(5, ex);
    localStorage.setItem(6, oh);
    localStorage.setItem(7, ex);
    localStorage.setItem(8, oh);
    localStorage.setItem(9, ex);

    localStorage.setItem(10, 'ex');
    localStorage.setItem(11, 'oh');
    localStorage.setItem(12, 'ex');
    localStorage.setItem(13, 'oh');
    localStorage.setItem(14, 'ex');
    localStorage.setItem(15, 'oh');
    localStorage.setItem(16, 'ex');
    localStorage.setItem(17, 'oh');
    localStorage.setItem(18, 'ex');

  localStorage.setItem(20, '');
  localStorage.setItem(21, '');
  localStorage.setItem(22, '');
  localStorage.setItem(23, '');
  localStorage.setItem(24, '');
  localStorage.setItem(25, '');
  localStorage.setItem(26, '');
  localStorage.setItem(27, '');
  localStorage.setItem(28, '');

  localStorage.setItem(30, '');
  localStorage.setItem(31, '');
  localStorage.setItem(32, '');
  localStorage.setItem(33, '');
  localStorage.setItem(34, '');
  localStorage.setItem(35, '');
  localStorage.setItem(36, '');
  localStorage.setItem(37, '');
  localStorage.setItem(38, '');
  }
}

if (turn >= 5) {
  localStorage.setItem(1, ex);
  localStorage.setItem(2, oh);
  localStorage.setItem(3, ex);
  localStorage.setItem(4, oh);
  localStorage.setItem(5, ex);
  localStorage.setItem(6, oh);
  localStorage.setItem(7, ex);
  localStorage.setItem(8, oh);
  localStorage.setItem(9, ex);

  localStorage.setItem(10, 'ex');
  localStorage.setItem(11, 'oh');
  localStorage.setItem(12, 'ex');
  localStorage.setItem(13, 'oh');
  localStorage.setItem(14, 'ex');
  localStorage.setItem(15, 'oh');
  localStorage.setItem(16, 'ex');
  localStorage.setItem(17, 'oh');
  localStorage.setItem(18, 'ex');

  localStorage.setItem(20, '');
  localStorage.setItem(21, '');
  localStorage.setItem(22, '');
  localStorage.setItem(23, '');
  localStorage.setItem(24, '');
  localStorage.setItem(25, '');
  localStorage.setItem(26, '');
  localStorage.setItem(27, '');
  localStorage.setItem(28, '');

  localStorage.setItem(30, '');
  localStorage.setItem(31, '');
  localStorage.setItem(32, '');
  localStorage.setItem(33, '');
  localStorage.setItem(34, '');
  localStorage.setItem(35, '');
  localStorage.setItem(36, '');
  localStorage.setItem(37, '');
  localStorage.setItem(38, '');
} else {
  localStorage.setItem(1, oh);
  localStorage.setItem(2, ex);
  localStorage.setItem(3, oh);
  localStorage.setItem(4, ex);
  localStorage.setItem(5, oh);
  localStorage.setItem(6, ex);
  localStorage.setItem(7, oh);
  localStorage.setItem(8, ex);
  localStorage.setItem(9, oh);

  localStorage.setItem(10, 'oh');
  localStorage.setItem(11, 'ex');
  localStorage.setItem(12, 'oh');
  localStorage.setItem(13, 'ex');
  localStorage.setItem(14, 'oh');
  localStorage.setItem(15, 'ex');
  localStorage.setItem(16, 'oh');
  localStorage.setItem(17, 'ex');
  localStorage.setItem(18, 'oh');

  localStorage.setItem(20, '');
  localStorage.setItem(21, '');
  localStorage.setItem(22, '');
  localStorage.setItem(23, '');
  localStorage.setItem(24, '');
  localStorage.setItem(25, '');
  localStorage.setItem(26, '');
  localStorage.setItem(27, '');
  localStorage.setItem(28, '');

  localStorage.setItem(30, '');
  localStorage.setItem(31, '');
  localStorage.setItem(32, '');
  localStorage.setItem(33, '');
  localStorage.setItem(34, '');
  localStorage.setItem(35, '');
  localStorage.setItem(36, '');
  localStorage.setItem(37, '');
  localStorage.setItem(38, '');
}

function closeSquares() {
  $('#char1, #char2, #char3, #char4, #char5, #char6, #char7, #char8, #char9').addClass('busy');
}

function openSquares() {
  $('#char1, #char2, #char3, #char4, #char5, #char6, #char7, #char8, #char9').removeClass('busy');
}

function updateScore(winner) {
  if (winner === "ex") {
    var x_score = $('#x_score').text();
    x_score = parseInt(x_score);
    var new_score = x_score + 1;
    $('#x_score').text(new_score);
    //$("#show_winner").text("X Won").fadeOut('slow/1000', function() {});
  } else {
    var o_score = $('#o_score').text();
    o_score = parseInt(o_score);
    var new_score = o_score + 1;
    $('#o_score').text(new_score);
    //$("#show_winner").text("O Won").fadeOut('slow/1000', function() {});
  }
}

function colorSquares(one, two, three) {
  // var color = Math.floor(Math.random() * 100);
  // console.log(color);
  // if (67 < color && color < 100) {
  //   color = 'cya';
  // } else if (33 < color && color < 67) {
  //   color = 'mag';
  // } else if (color < 33) {
  //   color = 'yel';
  // }
  closeSquares();

  if (one === "#char1" && two === "#char2" && three === "#char3") {
      $('#sq1').removeClass('game_square').addClass('cya');
      $('#sq2').removeClass('game_square').addClass('mag');
      $('#sq3').removeClass('game_square').addClass('yel');
  } else if (one === "#char4" && two === "#char5" && three === "#char6") {
      $('#sq4').removeClass('game_square').addClass('cya');
      $('#sq5').removeClass('game_square').addClass('mag');
      $('#sq6').removeClass('game_square').addClass('yel');
  } else if (one === "#char7" && two === "#char8" && three === "#char9") {
      $('#sq7').removeClass('game_square').addClass('cya');
      $('#sq8').removeClass('game_square').addClass('mag');
      $('#sq9').removeClass('game_square').addClass('yel');
  } else if (one === "#char1" && two === "#char4" && three === "#char7") {
      $('#sq1').removeClass('game_square').addClass('cya');
      $('#sq4').removeClass('game_square').addClass('mag');
      $('#sq7').removeClass('game_square').addClass('yel');
  } else if (one === "#char2" && two === "#char5" && three === "#char8") {
      $('#sq2').removeClass('game_square').addClass('cya');
      $('#sq5').removeClass('game_square').addClass('mag');
      $('#sq8').removeClass('game_square').addClass('yel');
  } else if (one === "#char3" && two === "#char6" && three === "#char9") {
      $('#sq3').removeClass('game_square').addClass('cya');
      $('#sq6').removeClass('game_square').addClass('mag');
      $('#sq9').removeClass('game_square').addClass('yel');
  } else if (one === "#char1" && two === "#char5" && three === "#char9") {
      $('#sq1').removeClass('game_square').addClass('cya');
      $('#sq5').removeClass('game_square').addClass('mag');
      $('#sq9').removeClass('game_square').addClass('yel');
  } else if (one === "#char3" && two === "#char5" && three === "#char7") {
      $('#sq7').removeClass('game_square').addClass('cya');
      $('#sq5').removeClass('game_square').addClass('mag');
      $('#sq3').removeClass('game_square').addClass('yel');
  }
}

function decolorSquares() {
  if ($('#sq1').hasClass('cya')) {
    $('#sq1').removeClass('cya').addClass('game_square');
  } else if ($('#sq1').hasClass('mag')) {
    $('#sq1').removeClass('mag').addClass('game_square');
  } else if ($('#sq1').hasClass('yel')) {
    $('#sq1').removeClass('yel').addClass('game_square');
  }
  $('#sq2').removeClass().addClass('game_square');
  $('#sq3').removeClass().addClass('game_square');

  if ($('#sq4').hasClass('cya')) {
    $('#sq4').removeClass('cya').addClass('game_square');
  } else if ($('#sq4').hasClass('mag')) {
    $('#sq4').removeClass('mag').addClass('game_square');
  } else if ($('#sq4').hasClass('yel')) {
    $('#sq4').removeClass('yel').addClass('game_square');
  }
  $('#sq5').removeClass().addClass('game_square');
  $('#sq6').removeClass().addClass('game_square');

  if ($('#sq7').hasClass('cya')) {
    $('#sq7').removeClass('cya').addClass('game_square');
  } else if ($('#sq7').hasClass('mag')) {
    $('#sq7').removeClass('mag').addClass('game_square');
  } else if ($('#sq7').hasClass('yel')) {
    $('#sq7').removeClass('yel').addClass('game_square');
  }
  $('#sq8').removeClass().addClass('game_square');
  $('#sq9').removeClass().addClass('game_square');
}

function chkWin() {
  //check for Tie
  if (!$('#char1, #char2, #char3, #char4, #char5, #char6, #char7, #char8, #char9').hasClass('black')) {
    setTimeout(clearBoard, 1000);
  }

  //check for X
  if ($('#char1').hasClass('ex') && $('#char2').hasClass('ex') && $('#char3').hasClass('ex')) {
    colorSquares("#char1", "#char2", "#char3");
    setTimeout(decolorSquares, 1000);
    setTimeout(clearBoard, 1000);
    updateScore('ex');
  }
  if ($('#char4').hasClass('ex') && $('#char5').hasClass('ex') && $('#char6').hasClass('ex')) {
    colorSquares("#char4", "#char5", "#char6");
    setTimeout(decolorSquares, 1000);
    setTimeout(clearBoard, 1000);
    updateScore("ex");
  }
  if ($('#char7').hasClass('ex') && $('#char8').hasClass('ex') && $('#char9').hasClass('ex')) {
    colorSquares("#char7", "#char8", "#char9");
    setTimeout(decolorSquares, 1000);
    setTimeout(clearBoard, 1000);
    updateScore("ex");
  }
  if ($('#char1').hasClass('ex') && $('#char4').hasClass('ex') && $('#char7').hasClass('ex')) {
    colorSquares("#char1", "#char4", "#char7");
    setTimeout(decolorSquares, 1000);
    setTimeout(clearBoard, 1000);
    updateScore("ex");
  }
  if ($('#char2').hasClass('ex') && $('#char5').hasClass('ex') && $('#char8').hasClass('ex')) {
    colorSquares("#char2", "#char5", "#char8");
    setTimeout(decolorSquares, 1000);
    setTimeout(clearBoard, 1000);
    updateScore("ex");
  }
  if ($('#char3').hasClass('ex') && $('#char6').hasClass('ex') && $('#char9').hasClass('ex')) {
    colorSquares("#char3", "#char6", "#char9");
    setTimeout(decolorSquares, 1000);
    setTimeout(clearBoard, 1000);
    updateScore("ex");
  }
  if ($('#char1').hasClass('ex') && $('#char5').hasClass('ex') && $('#char9').hasClass('ex')) {
    colorSquares("#char1", "#char5", "#char9");
    setTimeout(decolorSquares, 1000);
    setTimeout(clearBoard, 1000);
    updateScore("ex");
  }
  if ($('#char3').hasClass('ex') && $('#char5').hasClass('ex') && $('#char7').hasClass('ex')) {
    colorSquares("#char3", "#char5", "#char7");
    setTimeout(decolorSquares, 1000);
    setTimeout(clearBoard, 1000);
    updateScore("ex");
  }

  //check for O
  if ($('#char1').hasClass('oh') && $('#char2').hasClass('oh') && $('#char3').hasClass('oh')) {
    colorSquares("#char1", "#char2", "#char3");
    setTimeout(decolorSquares, 1000);
    setTimeout(clearBoard, 1000);
    updateScore("oh");
  }
  if ($('#char4').hasClass('oh') && $('#char5').hasClass('oh') && $('#char6').hasClass('oh')) {
    colorSquares("#char4", "#char5", "#char6");
    setTimeout(decolorSquares, 1000);
    setTimeout(clearBoard, 1000);
    updateScore("oh");
  }
  if ($('#char7').hasClass('oh') && $('#char8').hasClass('oh') && $('#char9').hasClass('oh')) {
    colorSquares("#char7", "#char8", "#char9");
    setTimeout(decolorSquares, 1000);
    setTimeout(clearBoard, 1000);
    updateScore("oh");
  }
  if ($('#char1').hasClass('oh') && $('#char4').hasClass('oh') && $('#char7').hasClass('oh')) {
    colorSquares("#char1", "#char4", "#char7");
    setTimeout(decolorSquares, 1000);
    setTimeout(clearBoard, 1000);
    updateScore("oh");
  }
  if ($('#char2').hasClass('oh') && $('#char5').hasClass('oh') && $('#char8').hasClass('oh')) {
    colorSquares("#char2", "#char5", "#char8");
    setTimeout(decolorSquares, 1000);
    setTimeout(clearBoard, 1000);
    updateScore("oh");
  }
  if ($('#char3').hasClass('oh') && $('#char6').hasClass('oh') && $('#char9').hasClass('oh')) {
    colorSquares("#char3", "#char6", "#char9");
    setTimeout(decolorSquares, 1000);
    setTimeout(clearBoard, 1000);
    updateScore("oh");
  }
  if ($('#char1').hasClass('oh') && $('#char5').hasClass('oh') && $('#char9').hasClass('oh')) {
    colorSquares("#char1", "#char5", "#char9");
    setTimeout(decolorSquares, 1000);
    setTimeout(clearBoard, 1000);
    updateScore("oh");
  }
  if ($('#char3').hasClass('oh') && $('#char5').hasClass('oh') && $('#char7').hasClass('oh')) {
    colorSquares("#char3", "#char5", "#char7");
    setTimeout(decolorSquares, 1000);
    setTimeout(clearBoard, 1000);
    updateScore("oh");
  }
}

$('#x_first').click(function() {
  xFirst();
});
$('#x_score').change(function() {
  xFirst();
});
$('#o_score').change(function() {
  xFirst();
});

$("#sq1").click(function() {
  if (localStorage[20] === 'black' || localStorage[30] === 'busy') {
    return false;
  } else {
    localStorage.setItem(20, localStorage[10]);
    $('#char1').attr("src", localStorage[i]);
    i+=1;
  }
  chkWin();
});
$("#sq2").click(function() {
  if (localStorage[21] === 'black' || localStorage[31] === 'busy') {
    return false;
  } else {
    localStorage.setItem(21, localStorage[11]);
    $('#char2').attr("src", localStorage[i]);
    i+=1;
  }
  chkWin();
});
$("#sq3").click(function() {
  if (localStorage[22] === 'black' || localStorage[32] === 'busy') {
    return false;
  } else {
    localStorage.setItem(22, localStorage[12]);
    $('#char3').attr("src", localStorage[i]);
    i+=1;
  }
  chkWin();
});

$("#sq4").click(function() {
  if (localStorage[23] === 'black' || localStorage[33] === 'busy') {
    return false;
  } else {
    localStorage.setItem(23, localStorage[13]);
    $('#char4').attr("src", localStorage[i]);
    i+=1;
  }
  chkWin();
});
$("#sq5").click(function() {
  if (localStorage[24] === 'black' || localStorage[34] === 'busy') {
    return false;
  } else {
    localStorage.setItem(24, localStorage[14]);
    $('#char5').attr("src", localStorage[i]);
    i+=1;
  }
  chkWin();
});
$("#sq6").click(function() {
  if (localStorage[25] === 'black' || localStorage[35] === 'busy') {
    return false;
  } else {
    localStorage.setItem(25, localStorage[15]);
    $('#char6').attr("src", localStorage[i]);
    i+=1;
  }
  chkWin();
});

$("#sq7").click(function() {
  if (localStorage[26] === 'black' || localStorage[36] === 'busy') {
    return false;
  } else {
    localStorage.setItem(26, localStorage[16]);
    $('#char7').attr("src", localStorage[i]);
    i+=1;
  }
  chkWin();
});
$("#sq8").click(function() {
  if (localStorage[27] === 'black' || localStorage[37] === 'busy') {
    return false;
  } else {
    localStorage.setItem(27, localStorage[17]);
    $('#char8').attr("src", localStorage[i]);
    i+=1;
  }
  chkWin();
});
$("#sq9").click(function() {
  if (localStorage[28] === 'black' || localStorage[38] === 'busy') {
    return false;
  } else {
    localStorage.setItem(28, localStorage[18]);
    $('#char9').attr("src", localStorage[i]);
    i+=1;
  }
  chkWin();
});

$('#refresh').click(function() {
    location.reload();
});

});
