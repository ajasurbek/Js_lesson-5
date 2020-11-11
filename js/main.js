var elForm = document.querySelector('.form');
var elInput = elForm.querySelector('.form-input');
var elBtn = elForm.querySelector('.main-button');
var elResult = document.querySelector('.game-text');


elForm.addEventListener('submit', function(evt){
  evt.preventDefault();
  var elForma = parseFloat(elInput.value.trim(), 10);



  if( elForma % 3 === 0 && elForma % 5 === 0 ){
    elResult.textContent = "FizzBuzz";
    return;
  }
  if( elForma % 3 === 0){
    elResult.textContent = "Fizz";
    return;
  }
  if( elForma % 5 === 0){
    elResult.textContent = "Buzz";
    return;
  }
  if( elForma % 3 != 0 || elForma % 5 != 0 ){
    elResult.textContent = "Error";
    return;
  }

})
