// Get the modal
var modal = document.getElementById("myModal");
let gameDIV = document.getElementById('game')
let welcomeDIV = document.getElementById('welcome')
let player1_display_name_and_score = document.getElementById('player1-display-name-and-score')
let player2_display_name_and_score = document.getElementById('player2-display-name-and-score')
let first_player_input = document.getElementById('player1')
let second_player_input = document.getElementById('player2')
let play_btn = document.getElementById('submitNamesAndPlayBtn')
let score_1 = 0
let score_2 = 0
// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
  gameDIV.style.display= 'none'
  player1_display_name_and_score.innerHTML = ''
  player2_display_name_and_score.innerHTML = ''
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

play_btn.addEventListener('click', getNamesAndPlay)

function getNamesAndPlay () {
    let first_player = first_player_input.value
    let seconed_player = first_player_input.value
    player1_display_name_and_score.innerHTML += first_player +' : '
    player2_display_name_and_score.innerHTML += seconed_player +' : '
    modal.style.display = 'none'
    gameDIV.style.display = 'block'
}





