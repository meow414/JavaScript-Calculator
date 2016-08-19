$(document).ready(function() {
  var value = "";

  $("#clear").click(function() {
    $("#test1").empty();
    value = "";
  });

  $("#one").click(function() {
    document.getElementById("test1").innerHTML = "1";
    value += "1";
  });

  $("#two").click(function() {
    document.getElementById("test1").innerHTML = "2";
    value += "2";
  });

  $("#three").click(function() {
    document.getElementById("test1").innerHTML = "3";
    value += "3";
  });

  $("#four").click(function() {
    document.getElementById("test1").innerHTML = "4";
    value += "4";
  });

  $("#five").click(function() {
    document.getElementById("test1").innerHTML = "5";
    value += "5";
  });

  $("#six").click(function() {
    document.getElementById("test1").innerHTML = 6;
    value += "6";
  });

  $("#seven").click(function() {
    document.getElementById("test1").innerHTML = 7;
    value += "7";
  });

  $("#eight").click(function() {
    document.getElementById("test1").innerHTML = 8;
    value += "8";
  });

  $("#nine").click(function() {
    document.getElementById("test1").innerHTML = 9;
    value += "9";
  });

  $("#zero").click(function() {
    document.getElementById("test1").innerHTML = 0;
    value += "0";
  });

  $("#plussign").click(function() {
    document.getElementById("test1").innerHTML = "";
    value += "+";
  });

  $("#dividesign").click(function() {
    document.getElementById("test1").innerHTML = "";
    value += "/";
  });

  $("#multiplysign").click(function() {
    document.getElementById("test1").innerHTML = "";
    value += "*";
  });

  $("#minussign").click(function() {
    document.getElementById("test1").innerHTML = "";
    value += "-";
  });

  $("#equalsign").click(function() {
    var res = eval(value);
    if (res == undefined) {
      document.getElementById("test1").innerHTML = "Stop Trolling!";
    } else {
      document.getElementById("test1").innerHTML = res;
    }
  });

});
