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
  let clam = '<input type="image" src="Images/clamshell03.jpg" style="position: absolute; top:200px; left:20px class="clam'+ clamNumber + '" id="clamButton" />'
  let results = [];
  let re = new RegExp('1234567890');
  let huntingGrounds = '<img id="Images" src="Images/seabed01.jpg" alt="Hunting grounds">';
  let resultsOutput = "Results <br> Round 1 " + results[0] + " clamss <br> Round 2 " + results[1] + " clams <br> Round 3 " + results[2] + " clams";


  window.onload = loadDeplay();
  //
  //
  function loadDeplay() {
    document.getElementById("seabed").style.display = "none";
    // xpos = Math.floor(Math.random(300) * 250);
    // ypos = Math.floor(Math.random(300) * 100);
    $("#dialog1").dialog({
      autoOpen: false
    });
    $("#dialog2").dialog({
      autoOpen: false
    });
    let canvas = document.getElementById('huntingGroundsCanvas');
    let ctx = canvas.getContext('2d');
    let img = document.getElementById("seabed");
    // const img = document.createElement('img');
    // img.src='Image/seabed01.jpg';
    ctx.drawImage(img, 0, 0, 300, 150);

  }

  $("#instructions").on("click", function() {
    $( "#dialog1" ).dialog("open")({
      resizable: false,
      modal: true,
      dialogClass: "dialog"
    });
  });

  $("#startHunting").on("click", function() {
    count = 0
    clamNumber = 0;
    document.getElementById("count").innerHTML = count;
    if (round == 3) {
      $( "#dialog2" ).dialog("open")({
        resizable: false,
        modal: true,
        dialogClass: "dialog"
      });
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
          results.push(this.count);
          document.getElementById("dailog2text").innerHTML = resultsOutput;
          // if (round == 3) {
          //   document.getElementById("dailog2text").innerHTML = resultsOutput;
          //   $( "#dialog2" ).dialog("open")({
          //     resizable: false,
          //     modal: true,
          //     dialogClass: "dialog"
          //   });
          // }
          clearInterval(timer);
        } else {
          document.getElementById("time").innerHTML = time;
        }
        time -= 1;
      }, 1000);
    }
    if (round == 1) {
      let xpos = Math.floor(Math.random(1000) * 250);
      let ypos = Math.floor(Math.random(1000) * 100);
      let xdem = Math.floor(Math.random(30));
      let ydem = Math.floor(Math.random(30));
      let canvas = document.getElementById('huntingGroundsCanvas');
      let ctx = canvas.getContext('2D');
      let img = document.getElementById("#clamImage");
      for (let i = 0; i < 20; i++) {
            ctx.drawImage(img, xpos, ypos, xdem, ydem);
      }
    } else if (round == 2) {
      document.getElementById("huntingGroundsDiv").innerHTML = huntingGrounds;
      for (let i = 0; i < 20; i++) {
        xpos = Math.floor(Math.random(1000) * 1000);
        ypos = Math.floor(Math.random(600) * 600);
        clamNumber += 1;
        clam = '<input type="image" src="Images/clamshell03.jpg" style="position: absolute; top:' + xpos +'px; left:' + ypos + 'px class="clam" id="clam' + clamNumber + '" />';
        document.getElementById("huntingGroundsDiv").innerHTML += clam;
      }
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
