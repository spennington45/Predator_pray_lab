/*
Button Script  version 1.0
Date: 26 August 2020
Author: Steven Pennington

This script runs buttons for Predator Prey lab lab
*/


// Check that document is fully loaded
$(document).ready(function() {

  let round = 0;
  let count = 0;
  let time = 0;
  let clamNumber = 1;
  let clma = '<input type="image" src="Images/clamshell03.jpg" class="clam'+ clamNumber + '" id="clamButton" />'
  let results = [];
  let re = new RegExp('1234567890');
  let huntingGrounds = '<img id="Images" src="Images/seabed01.jpg" alt="Hunting grounds">';


  // window.onload = loadDeplay();
  //
  //
  // function loadDeplay() {
  //  desplay image before expirement starts optional
  // };

  $("#instructions").on("click", function() {
    alert("Say something");
    // Desplay information
  });

  $("#startHunting").on("click", function() {
    count = 0
    document.getElementById("count").innerHTML = count;
    if (round == 3) {
      // Desplay results
    }
    if (round < 3) {
      document.getElementById("startHunting").disabled = true;
      round += 1;
      document.getElementById("round").innerHTML = round;
      time = 15;
      timer = setInterval(function(){
        if(time <= 0){
          document.getElementById("time").innerHTML = time;
          document.getElementById("startHunting").disabled = false;
          results.add(count);
          clearInterval(timer);
        } else {
          document.getElementById("time").innerHTML = time;
        }
        time -= 1;
      }, 1000);
    }
    if (round == 1) {
      document.getElementById("huntingGrounds").innerHTML = huntingGrounds;
      let clamImage = document.getElementById("canvas").innerHTML = clam;
      for (let i = 0; i < 20; i++) {
        clamImage;
      }
    } else if (round == 2) {
      // Draw clams that are hard to see
    } else if (round == 3) {
      // Draw clams that are easy to see
      document.getElementById("startHunting").innerHTML = "Results"
    }

  });
// Change if I can figure out the regular expression
  $("#clam1").on("click", function() {
    count += 1;
    document.getElementById("count").innerHTML = count;
    $("#clam1").toggle();
  });
  $("#clam2").on("click", function() {
    count += 1;
    document.getElementById("count").innerHTML = count;
    $("#clam2").toggle();
  });
  $("#clam3").on("click", function() {
    count += 1;
    document.getElementById("count").innerHTML = count;
    $("#clam3").toggle();
  });
  $("#clam4").on("click", function() {
    count += 1;
    document.getElementById("count").innerHTML = count;
    $("#clam4").toggle();
  });
  $("#clam5").on("click", function() {
    count += 1;
    document.getElementById("count").innerHTML = count;
    $("#clam5").toggle();
  });
  $("#clam6").on("click", function() {
    count += 1;
    document.getElementById("count").innerHTML = count;
    $("#clam6").toggle();
  });
  $("#clam7").on("click", function() {
    count += 1;
    document.getElementById("count").innerHTML = count;
    $("#clam7").toggle();
  });
  $("#clam8").on("click", function() {
    count += 1;
    document.getElementById("count").innerHTML = count;
    $("#clam8").toggle();
  });
  $("#clam9").on("click", function() {
    count += 1;
    document.getElementById("count").innerHTML = count;
    $("#clam9").toggle();
  });
  $("#clam10").on("click", function() {
    count += 1;
    document.getElementById("count").innerHTML = count;
    $("#clam10").toggle();
  });
  $("#clam11").on("click", function() {
    count += 1;
    document.getElementById("count").innerHTML = count;
    $("#clam11").toggle();
  });
  $("#clam12").on("click", function() {
    count += 1;
    document.getElementById("count").innerHTML = count;
    $("#clam12").toggle();
  });
  $("#clam13").on("click", function() {
    count += 1;
    document.getElementById("count").innerHTML = count;
    $("#clam13").toggle();
  });
  $("#clam14").on("click", function() {
    count += 1;
    document.getElementById("count").innerHTML = count;
    $("#clam14").toggle();
  });
  $("#clam15").on("click", function() {
    count += 1;
    document.getElementById("count").innerHTML = count;
    $("#clam15").toggle();
  });
  $("#clam16").on("click", function() {
    count += 1;
    document.getElementById("count").innerHTML = count;
    $("#clam16").toggle();
  });
  $("#clam17").on("click", function() {
    count += 1;
    document.getElementById("count").innerHTML = count;
    $("#clam17").toggle();
  });
  $("#clam18").on("click", function() {
    count += 1;
    document.getElementById("count").innerHTML = count;
    $("#clam18").toggle();
  });
  $("#clam19").on("click", function() {
    count += 1;
    document.getElementById("count").innerHTML = count;
    $("#clam19").toggle();
  });
  $("#clam20").on("click", function() {
    count += 1;
    document.getElementById("count").innerHTML = count;
    $("#clam20").toggle();
  });


});
