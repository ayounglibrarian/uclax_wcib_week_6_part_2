$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').trigger('focus')
})
$('#myModal').modal(options)

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

$('#exampleModal').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget) // Button that triggered the modal
  var button = button.data('whatever') // Extract info from data-* attributes
  // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
  // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
  var modal = $(this)
  modal.find('.modal-title').text('New message to ' + recipient)
  modal.find('.modal-body input').val(recipient)
})

//Drinking Game within Modal
              let randomNumber = Math.floor(Math.random() * 100) + 1;

              const guesses = document.querySelector('.guesses');
              const lastResult = document.querySelector('.lastResult');
              const lowOrHi = document.querySelector('.lowOrHi');

              const guessSubmit = document.querySelector('.guessSubmit');
              const guessField = document.querySelector('.guessField');

              let guessCount = 1;
              let resetButton;

            //Conditions
            function checkGuess() {
              let userGuess = Number(guessField.value);
              if (guessCount === 1) {
                guesses.textContent = 'Previous guesses: ';
              }
              guesses.textContent += userGuess + ' ';

              if (userGuess === randomNumber) {
                lastResult.textContent = 'Congratulations! You got it right!';
                lastResult.style.backgroundColor = 'green';
                lowOrHi.textContent = '';
                setGameOver();
              } else if (guessCount === 10) {
                lastResult.textContent = '!!!GAME OVER!!!';
                setGameOver();
              } else {
                lastResult.textContent = 'Wrong!';
                lastResult.style.backgroundColor = 'red';
                if(userGuess < randomNumber) {
                  lowOrHi.textContent = 'Last guess was too low!';
                } else if(userGuess > randomNumber) {
                  lowOrHi.textContent = 'Last guess was too high!';
                }
              }

              guessCount++;
              guessField.value = '';
              guessField.focus();
              }

              //events
              guessSubmit.addEventListener('click', checkGuess);

              //Finishing the game functionality
              function setGameOver() {
                guessField.disabled = true;
                guessSubmit.disabled = true;
                resetButton = document.createElement('button');
                resetButton.textContent = 'Start new game';
                document.body.append(resetButton);
                resetButton.addEventListener('click', resetGame);
              }
              function resetGame() {
                guessCount = 1;

                const resetParas = document.querySelectorAll('.resultParas p');
                for (let i = 0 ; i < resetParas.length ; i++) {
                  resetParas[i].textContent = '';
                }

                resetButton.parentNode.removeChild(resetButton);

                guessField.disabled = false;
                guessSubmit.disabled = false;
                guessField.value = '';
                guessField.focus();

                lastResult.style.backgroundColor = 'white';

                randomNumber = Math.floor(Math.random() * 100) + 1;
              }
