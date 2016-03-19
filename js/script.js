var numBoxes = 16;
setBoxSize(numBoxes);

$(document).ready(function(){
  drawGrid();
  $('button').click(function(){
    $('.square').remove();
    requestUserInput();
    setBoxSize(numBoxes);
    drawGrid();
  });
});

function drawGrid(){
  for(var i = 1; i <= numBoxes*numBoxes; i++){
    $('.grid').append('<div class="square"></div>');
  }
  $('.square').css({'height':setSize, 'width':setSize});
  $('.square').hover(function(){
    /* $('.highlight').css("background-color", randomColor()); */
    $(this).addClass('highlight');
    $(this).css('opacity', '+=0.1');
  });
}

function requestUserInput () {
  validEntry = false;
  do {
    userInput = prompt('How many squares per side would you like on your sketch pad?');
    if(isNaN(userInput) || userInput != parseInt(userInput) || userInput < 1){
      alert("Invalid entry. Please try again.");
    } else {
      validEntry = true;
    }
  } while(validEntry == false);
  numBoxes = userInput;
}

function setBoxSize(num) {
  setSize = 600 / num - 6;
}

function randomRGB() {
  return Math.floor(Math.random()*256);
}

function randomColor() {
  return 'rgb('+randomRGB()+','+randomRGB()+','+randomRGB()+')';
}
