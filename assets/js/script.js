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
    player1_display_name_and_score.innerHTML += first_player +' : '+score_1
    player2_display_name_and_score.innerHTML += seconed_player +' : '+score_2
    modal.style.display = 'none'
    gameDIV.style.display = 'block'
}

let ttt_grid_matrix_rows = [[0,0,0],
                            [0,0,0],
                            [0,0,0],]

let ttt_grid_matrix_columns = [[0,0,0],
                               [0,0,0],
                               [0,0,0],]
let ttt_grid_diagonals = [[0,0,0],[0,0,0]]

let number_of_clicks = 0

let start_round_btn = document.getElementById('start-round-btn')
let reset_round_btn = document.getElementById('reset-round-btn')

let one = document.getElementById('one')
let two = document.getElementById('two')
let three = document.getElementById('three')
let four = document.getElementById('four')
let five = document.getElementById('five')
let six = document.getElementById('six')
let seven = document.getElementById('seven')
let eight = document.getElementById('nine')
let nine = document.getElementById('nine')

one.addEventListener('click', box1Clicked)
two.addEventListener('click', box2Clicked)
three.addEventListener('click', box3Clicked)
four.addEventListener('click', box4Clicked)
five.addEventListener('click', box5Clicked)
six.addEventListener('click', box6Clicked)
seven.addEventListener('click', box7Clicked)
eight.addEventListener('click', box8Clicked)
nine.addEventListener('click', box9Clicked)

function box1Clicked () {
    if (number_of_clicks % 2 == 0 || number_of_clicks != 0){
        ttt_grid_matrix_rows[0][0] = 1
        ttt_grid_matrix_columns[0][0] = 1
        ttt_grid_diagonals[0][0] = 1
    } else {
        ttt_grid_matrix_rows[0][0] = 2
        ttt_grid_matrix_columns[0][0] = 2
        ttt_grid_diagonals[0][0] = 2
    }   
}

function box2Clicked () {
    if (number_of_clicks % 2 == 0 || number_of_clicks != 0){
        ttt_grid_matrix_rows[0][1] = 1
        ttt_grid_matrix_columns[1][0] = 1
    } else {
        ttt_grid_matrix_rows[0][1] = 2
        ttt_grid_matrix_columns[1][0] = 2
    }   
}

function box3Clicked () {
    if (number_of_clicks % 2 == 0 || number_of_clicks != 0){
        ttt_grid_matrix_rows[0][2] = 1
        ttt_grid_matrix_columns[2][0] = 1
        ttt_grid_diagonals[1][0] = 1
    } else {
        ttt_grid_matrix_rows[0][2] = 2
        ttt_grid_matrix_columns[2][0] = 2
        ttt_grid_diagonals[1][0] = 2
    }   
}

function box4Clicked () {
    if (number_of_clicks % 2 == 0 || number_of_clicks != 0){
        ttt_grid_matrix_rows[1][0] = 1
        ttt_grid_matrix_columns[0][1] = 1
    } else {
        ttt_grid_matrix_rows[1][0] = 2
        ttt_grid_matrix_columns[0][1] = 2
    }
}

function box5Clicked () {
    if (number_of_clicks % 2 == 0 || number_of_clicks != 0){
        ttt_grid_matrix_rows[1][1] = 1
        ttt_grid_matrix_columns[1][1] = 1
        ttt_grid_diagonals[0][1] = 1
        ttt_grid_diagonals[1][1] = 1
    } else {
        ttt_grid_matrix_rows[1][1] = 2
        ttt_grid_matrix_columns[1][1] = 2
        ttt_grid_diagonals[0][0] = 2
        ttt_grid_diagonals[1][1] = 2
    }   
}

function box6Clicked () {
    if (number_of_clicks % 2 == 0 || number_of_clicks != 0){
        ttt_grid_matrix_rows[1][2] = 1
        ttt_grid_matrix_columns[2][1] = 1
    } else {
        ttt_grid_matrix_rows[1][2] = 2
        ttt_grid_matrix_columns[2][1] = 2
    }   
}

function box7Clicked () {
    if (number_of_clicks % 2 == 0 || number_of_clicks != 0){
        ttt_grid_matrix_rows[2][0] = 1
        ttt_grid_matrix_columns[0][2] = 1
        ttt_grid_diagonals[1][2] = 1
    } else {
        ttt_grid_matrix_rows[2][0] = 2
        ttt_grid_matrix_columns[0][2] = 2
        ttt_grid_diagonals[1][2] = 2
    }   
}

function box8Clicked () {
    if (number_of_clicks % 2 == 0 || number_of_clicks != 0){
        ttt_grid_matrix_rows[2][1] = 1
        ttt_grid_matrix_columns[1][2] = 1
    } else {
        ttt_grid_matrix_rows[2][1] = 2
        ttt_grid_matrix_columns[1][2] = 2
    }   
}

function box9Clicked () {
    if (number_of_clicks % 2 == 0 || number_of_clicks != 0){
        ttt_grid_matrix_rows[2][2] = 1
        ttt_grid_matrix_columns[2][2] = 1
        ttt_grid_diagonals[0][2] = 1
    } else {
        ttt_grid_matrix_rows[2][2] = 2
        ttt_grid_matrix_columns[2][2] = 2
        ttt_grid_diagonals[0][2] = 2
    }   
}


start_round_btn.addEventListener('click', playRound)

function playRound () {
    while (number_of_clicks != 9){
        if (number_of_clicks % 2 == 0){

        }
    }
}

