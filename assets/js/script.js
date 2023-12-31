function isArrayIncluded(mainArray, subArray) {
    return mainArray.some((arr) =>
      subArray.every((value, index) => value === arr[index])
    );
  } // chatGPT
  


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
let first_player = first_player_input.value
let seconed_player = second_player_input.value
let back_home = document.getElementById('back-home-btn')
// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block"
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
    first_player = first_player_input.value
    seconed_player = second_player_input.value
    modal.style.display = 'none'
    gameDIV.style.display = 'block'
    btn.style.display = 'none'
    player1_display_name_and_score.innerHTML += first_player +' : '+score_1
    player2_display_name_and_score.innerHTML += seconed_player +' : '+score_2
    
}

var clicker = 1
let number_checked = 0
let ttt_grid_matrix_rows = [[0,0,0],
                            [0,0,0],
                            [0,0,0]]

let ttt_grid_matrix_columns = [[0,0,0],
                               [0,0,0],
                               [0,0,0]]
let ttt_grid_diagonals = [[0,0,0],[0,0,0]]

let one = document.getElementById('one')
let two = document.getElementById('two')
let three = document.getElementById('three')
let four = document.getElementById('four')
let five = document.getElementById('five')
let six = document.getElementById('six')
let seven = document.getElementById('seven')
let eight = document.getElementById('eight')
let nine = document.getElementById('nine')
let reset_round_btn = document.getElementById('reset-round-btn')
reset_round_btn.addEventListener('click', resetButtonsAndMatrix)
back_home.addEventListener('click',resetAndGoHome)

xo_buttons = [one, two, three, four, five, six, seven, eight, nine]

function resetButtonsAndMatrix () {
    for (let i = 0; i < xo_buttons.length; i++) {
        xo_buttons[i].innerHTML = '&nbsp;'
    }
    for (let j = 0; j < ttt_grid_diagonals.length; j++) {
        ttt_grid_diagonals[j] = [0,0,0]
    }
    for (let k = 0; k < ttt_grid_matrix_rows.length; k++) {
        ttt_grid_matrix_rows[k] = [0,0,0]
    }
    for (let l = 0; l < ttt_grid_matrix_columns.length; l++) {
        ttt_grid_matrix_columns[l] = [0,0,0]
    }
    clicker = 1
    number_checked = 0
}

function resetAndGoHome (){
    resetButtonsAndMatrix()
    score_1 = 0
    score_2 = 0
    gameDIV.style.display = 'none'
    btn.style.display = 'inline-block'
}
function checkWinConditions (){
    if (isArrayIncluded(ttt_grid_diagonals, [1,1,1]) || isArrayIncluded(ttt_grid_matrix_rows, [1,1,1])
            || isArrayIncluded(ttt_grid_matrix_columns, [1,1,1])){
        score_1 += 1
        player1_display_name_and_score.innerHTML = first_player+' : '+score_1
        resetButtonsAndMatrix()
        
    } else if (isArrayIncluded(ttt_grid_diagonals, [2,2,2]) || isArrayIncluded(ttt_grid_matrix_rows, [2,2,2])
            || isArrayIncluded(ttt_grid_matrix_columns, [2,2,2])) {
        score_2 += 1
        player2_display_name_and_score.innerHTML = seconed_player+' : '+score_2
        resetButtonsAndMatrix()
    }
}


one.addEventListener('click', box1Clicked)
two.addEventListener('click', box2Clicked)
three.addEventListener('click', box3Clicked)
four.addEventListener('click', box4Clicked)
five.addEventListener('click', box5Clicked)
six.addEventListener('click', box6Clicked)
seven.addEventListener('click', box7Clicked)
eight.addEventListener('click', box8Clicked)
nine.addEventListener('click', box9Clicked)

function checkfull(somebutton) {
    if (somebutton.innerHTML == 'x' || somebutton.innerHTML == 'o'){
        return
    }
}

function box1Clicked () {
    if (one.innerHTML == 'x' || one.innerHTML == 'o'){
        return
    }
    else if (clicker == 1){
        ttt_grid_matrix_rows[0][0] = 1
        ttt_grid_matrix_columns[0][0] = 1
        ttt_grid_diagonals[0][0] = 1
        clicker = 2
        one.innerHTML = 'x'
        number_checked++
        
    } else if (clicker == 2) {
        ttt_grid_matrix_rows[0][0] = 2
        ttt_grid_matrix_columns[0][0] = 2
        ttt_grid_diagonals[0][0] = 2
        clicker = 1
        one.innerHTML = 'o'
        number_checked++
    }
    if (number_checked==9){
        resetButtonsAndMatrix()
    }
    checkWinConditions()
    
}

function box2Clicked () {
    if (two.innerHTML == 'x' || two.innerHTML == 'o'){
        return
    }
    else if (clicker == 1){
        ttt_grid_matrix_rows[0][1] = 1
        ttt_grid_matrix_columns[1][0] = 1
        clicker = 2
        two.innerHTML = 'x'
        number_checked++
    } else if (clicker == 2) {
        ttt_grid_matrix_rows[0][1] = 2
        ttt_grid_matrix_columns[1][0] = 2
        clicker = 1
        two.innerHTML = 'o'
        number_checked++
    }
    if (number_checked == 9){
        resetButtonsAndMatrix()
    }
    checkWinConditions()
    
}

function box3Clicked () {
    if (three.innerHTML == 'x' || three.innerHTML == 'o'){
        return
    }
    else if (clicker == 1){
        ttt_grid_matrix_rows[0][2] = 1
        ttt_grid_matrix_columns[2][0] = 1
        ttt_grid_diagonals[1][0] = 1
        clicker = 2
        three.innerHTML = 'x'
        number_checked++
    } else if (clicker == 2) {
        ttt_grid_matrix_rows[0][2] = 2
        ttt_grid_matrix_columns[2][0] = 2
        ttt_grid_diagonals[1][0] = 2
        clicker = 1
        three.innerHTML = 'o'
        number_checked++
    }   
    if (number_checked == 9){
        resetButtonsAndMatrix()
    }
    checkWinConditions()
    
}

function box4Clicked () {
    if (four.innerHTML == 'x' || four.innerHTML == 'o'){
        return
    }
    else if (clicker == 1){
        ttt_grid_matrix_rows[1][0] = 1
        ttt_grid_matrix_columns[0][1] = 1
        clicker = 2
        four.innerHTML = 'x'
        number_checked++
    } else if (clicker == 2) {
        ttt_grid_matrix_rows[1][0] = 2
        ttt_grid_matrix_columns[0][1] = 2
        clicker = 1
        four.innerHTML = 'o'
        number_checked++
    }
    if (number_checked == 9){
        resetButtonsAndMatrix()
    }
    checkWinConditions()
    
}

function box5Clicked () {
    if (five.innerHTML == 'x' || five.innerHTML == 'o'){
        return
    }
    else if (clicker == 1){
        ttt_grid_matrix_rows[1][1] = 1
        ttt_grid_matrix_columns[1][1] = 1
        ttt_grid_diagonals[0][1] = 1
        ttt_grid_diagonals[1][1] = 1
        clicker = 2
        five.innerHTML = 'x'
        number_checked++
    } else if (clicker == 2) {
        ttt_grid_matrix_rows[1][1] = 2
        ttt_grid_matrix_columns[1][1] = 2
        ttt_grid_diagonals[0][1] = 2
        ttt_grid_diagonals[1][1] = 2
        clicker = 1
        five.innerHTML = 'o'
        number_checked++
    }   
    if (number_checked == 9){
        resetButtonsAndMatrix()
    }
    checkWinConditions()
    
}

function box6Clicked () {
    if (six.innerHTML == 'x' || six.innerHTML == 'o'){
        return
    }
    else if (clicker == 1){
        ttt_grid_matrix_rows[1][2] = 1
        ttt_grid_matrix_columns[2][1] = 1
        clicker = 2
        six.innerHTML = 'x'
        number_checked++
    } else if (clicker == 2) {
        ttt_grid_matrix_rows[1][2] = 2
        ttt_grid_matrix_columns[2][1] = 2
        clicker = 1
        six.innerHTML = 'o'
        number_checked++
    }   
    if (number_checked == 9){
        resetButtonsAndMatrix()
    }
    checkWinConditions()
    
}

function box7Clicked () {
    if (seven.innerHTML == 'x' || seven.innerHTML == 'o'){
        return
    }
    else if (clicker == 1){
        ttt_grid_matrix_rows[2][0] = 1
        ttt_grid_matrix_columns[0][2] = 1
        ttt_grid_diagonals[1][2] = 1
        clicker = 2
        seven.innerHTML = 'x'
        number_checked++
    } else if (clicker = 2) {
        ttt_grid_matrix_rows[2][0] = 2
        ttt_grid_matrix_columns[0][2] = 2
        ttt_grid_diagonals[1][2] = 2
        clicker = 1
        seven.innerHTML = 'o'
        number_checked++
    }   
    if (number_checked == 9){
        resetButtonsAndMatrix()
    }
    checkWinConditions()
    
}

function box8Clicked () {
    if (eight.innerHTML == 'x' || eight.innerHTML == 'o'){
        return
    }
    else if (clicker == 1){
        ttt_grid_matrix_rows[2][1] = 1
        ttt_grid_matrix_columns[1][2] = 1
        clicker = 2
        eight.innerHTML = 'x'
        number_checked++
    } else if (clicker == 2) {
        ttt_grid_matrix_rows[2][1] = 2
        ttt_grid_matrix_columns[1][2] = 2
        clicker = 1
        eight.innerHTML = 'o'
        number_checked++
    }   
    if (number_checked == 9){
        resetButtonsAndMatrix()
    }
    checkWinConditions()
    
}

function box9Clicked () {
    if (nine.innerHTML == 'x' || nine.innerHTML == 'o'){
        return
    }
    else if (clicker == 1){
        ttt_grid_matrix_rows[2][2] = 1
        ttt_grid_matrix_columns[2][2] = 1
        ttt_grid_diagonals[0][2] = 1
        clicker = 2
        nine.innerHTML = 'x'
        number_checked++
    } else if (clicker == 2) {
        ttt_grid_matrix_rows[2][2] = 2
        ttt_grid_matrix_columns[2][2] = 2
        ttt_grid_diagonals[0][2] = 2
        clicker = 1
        nine.innerHTML = 'o'
        number_checked++
    }   
    if (number_checked == 9){
        resetButtonsAndMatrix()
    }
    checkWinConditions()
    
}
