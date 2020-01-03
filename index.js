const board = document.getElementById('board')
const body = document.getElementsByTagName('body')[0]
const gameBoard = document.getElementById('game')
let player1Form = document.createElement('div')
player1Form.innerHTML = `
<br>
<br>
<form id="logIn" class="turn">
Player 1 Name:
<br>
<br>
<input type="text" name="name">
<br>
<br>
<input type="submit" value="Submit">
</form>
<br>
<br>
`

let p1Image = document.getElementById('p1_image')
let p2Image = document.createElement('img')
p2Image.id = "p2_image"
p2Image.className = "loginImages"
p2Image.src = "/Users/Carlos/Development/code/MOD_3_PROJ/connect-4-JS/images/cow2.png"

let rulesImage = document.createElement('img')
rulesImage.id = "rules_image"
rulesImage.className = "loginImages"
rulesImage.src = "/Users/Carlos/Development/code/MOD_3_PROJ/connect-4-JS/images/rules.jpg"

let player2Form = document.createElement('div')
player2Form.innerHTML = `
<br>
<br>
<form id="logIn" class="turn">
Player 2 Name:
<br>
<br>
<input type="text" name="name">
<br>
<br>
<input type="submit" value="Start Game">
</form>
<br>
<br>
`

let player1 = null
let player2 = null
let rulesButton = document.getElementById('rules')
let rules = document.createElement('div')
rules.innerHTML = `
<br>
<div class="rules">
To play, click on a column on the game board to place your Sindy chip. To win, connect 4 of your chips vertically, horizontally, or diagonally. The game will end in a tie if neither player is able to connect 4 chips.
</div>

<br>
`

let leaderboard = document.createElement('div')
leaderboard.id = "leaderboard"
let turnDiv = document.getElementById('turn')
let hover = document.querySelectorAll('[data-h]')
function hoverChip(player) {hover.forEach( e => e.dataset.h = `${player}`)}

// play sounds
function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function(){
      this.sound.play();
    }
    // this.stop = function(){
    //   this.sound.pause();
    // }
  }

   // sounds to be used
  let chipSound = new sound("/Users/Carlos/Development/code/MOD_3_PROJ/connect-4-JS/sounds/chip.m4a")
  let mooSound = new sound("sounds/Moo2.m4a")
  let loserSound = new sound("sounds/loser.m4a")

// *** DOM content loader ***
window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
    // LOGIN PAGE *** comment out for game testing ***
    body.replaceChild(player1Form, gameBoard)
    let turn = "Player 1"
     player1Form.addEventListener("submit", e=> {
         e.preventDefault()
         body.replaceChild(player2Form, player1Form)
        player1 = e.target.name.value
        body.replaceChild(p2Image,p1Image)
     })
     player2Form.addEventListener("submit", e=> {
        e.preventDefault()
        body.replaceChild(gameBoard, player2Form)
        player2 = e.target.name.value
        turnDiv.textContent = `Current Turn: ${player1}`
        p2Image.remove()
    })
    
    // make the chip drown down the column 
    function chipAppear(turn,current,row,column){
        console.log(turn)
        console.log("row:",row)
        
        let next = document.querySelector(`[data-x='${column}'][data-y='${row+1}']`)
        console.log(next)
        console.log(next.id)

        let appearDelay = 50
        let disappearDelay = appearDelay + 10
        let rowDelay = row - 1
        
        if (next.id || row >= 6){
            console.log("stopped")

            if (turn === "Player 1"){
                setTimeout(function (){
                current.id = "p1";
                console.log("chip appear")},(appearDelay*rowDelay))
            } else {
                setTimeout(function (){
                    current.id = "p2";
                    console.log("chip appear")},(appearDelay*rowDelay))
            }
        } else {
            if (turn === "Player 1"){
                setTimeout(function (){
                current.id = "p1";
                console.log("chip appear")},(appearDelay*rowDelay))
            } else {
                setTimeout(function (){
                    current.id = "p2";
                    console.log("chip appear")},(appearDelay*rowDelay))
            }
                setTimeout(function (){
                current.id = "";console.log("chip disappear:",rowDelay)},(disappearDelay*rowDelay))
        }
    }

    board.addEventListener("click", e => {     
        chipSound.play()
        let column = e.target.dataset.x
        let row = 1
        let current = document.querySelector(`[data-x='${column}'][data-y='${row}']`)
        // ***PLAYER 2 GAME LOGIC***
        if (turn === "Player 1") {
            if (current.id) {
                alert("Can't you see??? Column full! ")
            } else {
                chipAppear(turn,current,row,column)
                row = row + 1
                current = document.querySelector(`[data-x='${column}'][data-y='${row}']`)         
                 if (current.id){ 
                    //take disc above this and add id
                    current = document.querySelector(`[data-x='${column}'][data-y='${row-1}']`)  
                } else {
                    //keep going
                    chipAppear(turn,current,row,column)
                    row = row + 1
                    current = document.querySelector(`[data-x='${column}'][data-y='${row}']`)                   
                    if (current.id){ 
                        //take disc above this and add id
                        current = document.querySelector(`[data-x='${column}'][data-y='${row-1}']`)    
                    } else {
                        //keep going
                        chipAppear(turn,current,row,column)
                        row = row + 1
                        current = document.querySelector(`[data-x='${column}'][data-y='${row}']`)                          
                        if (current.id){ 
                            //take disc above this and add id
                            current = document.querySelector(`[data-x='${column}'][data-y='${row-1}']`)      
                        } else {
                            //keep going
                            chipAppear(turn,current,row,column)
                             row = row + 1
                            current = document.querySelector(`[data-x='${column}'][data-y='${row}']`)                                      
                            if (current.id){ 
                                //take disc above this and add id
                                current = document.querySelector(`[data-x='${column}'][data-y='${row-1}']`)            
                            } else {
                                //keep going
                                chipAppear(turn,current,row,column)
                              row = row + 1
                                current = document.querySelector(`[data-x='${column}'][data-y='${row}']`)                
                                if (current.id){ 
                                    //take disc above this and add id
                                    current = document.querySelector(`[data-x='${column}'][data-y='${row-1}']`)                
                                } else {
                                    //keep going
                                    chipAppear(turn,current,row,column)
                                }
                            } 
                        }
                    }
                }
            } 
            
        // ***PLAYER 2 GAME LOGIC***
        } else { 
            if (current.id) {
                alert("Can't you see??? Column full! ")
            } else {
                chipAppear(turn,current,row,column)
                row = row + 1
                current = document.querySelector(`[data-x='${column}'][data-y='${row}']`)    
                if (current.id){ 
                    //take disc above this and add id
                    current = document.querySelector(`[data-x='${column}'][data-y='${row-1}']`)  
                } else {
                    //keep going
                    chipAppear(turn,current,row,column)
                    row = row + 1
                    current = document.querySelector(`[data-x='${column}'][data-y='${row}']`)
                    if (current.id){ 
                        //take disc above this and add id
                        current = document.querySelector(`[data-x='${column}'][data-y='${row-1}']`)      
                    } else {
                        //keep going
                        chipAppear(turn,current,row,column)
                        row = row + 1
                        current = document.querySelector(`[data-x='${column}'][data-y='${row}']`)
                        if (current.id){ 
                            //take disc above this and add id
                            current = document.querySelector(`[data-x='${column}'][data-y='${row-1}']`)                         
                        } else {
                            //keep going
                            chipAppear(turn,current,row,column)
                            row = row + 1
                            current = document.querySelector(`[data-x='${column}'][data-y='${row}']`)
                            if (current.id){ 
                                //take disc above this and add id
                                current = document.querySelector(`[data-x='${column}'][data-y='${row-1}']`)                           
                            } else {
                                //keep going
                                chipAppear(turn,current,row,column)
                                row = row + 1
                                current = document.querySelector(`[data-x='${column}'][data-y='${row}']`)
                                if (current.id){ 
                                    //take disc above this and add id
                                    current = document.querySelector(`[data-x='${column}'][data-y='${row-1}']`)                        
                                } else {
                                    //keep going
                                    chipAppear(turn,current,row,column)
                                }
                            } 
                        }
                    }
                }
            }    
        }
        checkWin(current, turn)
        checkTie()

        if (turn === "Player 1") {
            turn = "Player 2"
            turnDiv.textContent = `Current Turn: ${player2}`  
            hoverChip(2)
        } else {
            turn = "Player 1"
            turnDiv.textContent = `Current Turn: ${player1}`
            hoverChip(1)
        }
    }) 
    // end of board event listener

    let newGameButton = document.getElementById('newGame')
    newGameButton.addEventListener('click', e => {
        console.log("new game button pressed")
        window.location.reload()
    })
    function checkWin (current, turn) {
        let countV = 1 // BC
        let countH = 1 // ML + MR
        let countD = 1 // TL + BR
        let countU = 1 // BL + TR
        let x = parseInt(current.dataset.x)
        let y = parseInt(current.dataset.y)
        let TL = document.querySelector(`[data-x='${x-1}'][data-y='${y-1}']`)
        // TC we don't check because always empty -- let TC = document.querySelector(`[data-x='${x}'][data-y='${y-1}']`)
        let TR = document.querySelector(`[data-x='${x+1}'][data-y='${y-1}']`)
        let ML = document.querySelector(`[data-x='${x-1}'][data-y='${y}']`)
        // MC is "current"
        let MR = document.querySelector(`[data-x='${x+1}'][data-y='${y}']`)
        let BL = document.querySelector(`[data-x='${x-1}'][data-y='${y+1}']`)
        let BC = document.querySelector(`[data-x='${x}'][data-y='${y+1}']`)
        let BR = document.querySelector(`[data-x='${x+1}'][data-y='${y+1}']`)
        let player = null
        if  (turn === "Player 1") {
            player = "p1"
        } else {
            player = "p2"
        }
        if (player === TL.id) {
            countD = countD +1
            let x2 = parseInt(TL.dataset.x)
            let y2 = parseInt(TL.dataset.y)
            let TL2 = document.querySelector(`[data-x='${x2-1}'][data-y='${y2-1}']`)
            if (player === TL2.id) {
                countD = countD +1
                let x3 = parseInt(TL2.dataset.x)
                let y3 = parseInt(TL2.dataset.y)
                let TL3 = document.querySelector(`[data-x='${x3-1}'][data-y='${y3-1}']`)         
                if (player === TL3.id) {
                    countD = countD +1                  
                } else { null }
            } else { null }
        } else { null }
        if (player === TR.id) {
            countU = countU +1
            let x2 = parseInt(TR.dataset.x)
            let y2 = parseInt(TR.dataset.y)
            let TR2 = document.querySelector(`[data-x='${x2+1}'][data-y='${y2-1}']`)
            if (player === TR2.id) {
                countU = countU +1
                let x3 = parseInt(TR2.dataset.x)
                let y3 = parseInt(TR2.dataset.y)
                let TR3 = document.querySelector(`[data-x='${x3+1}'][data-y='${y3-1}']`)
                if (player === TR3.id) {
                    countU = countU +1
                } else { null }
            } else { null }
        } else { null }
        if (player === ML.id) {
            countH = countH +1
            let x2 = parseInt(ML.dataset.x)
            let y2 = parseInt(ML.dataset.y)
            let ML2 = document.querySelector(`[data-x='${x2-1}'][data-y='${y2}']`)
            if (player === ML2.id) {
                countH = countH +1
                let x3 = parseInt(ML2.dataset.x)
                let y3 = parseInt(ML2.dataset.y)
                let ML3 = document.querySelector(`[data-x='${x3-1}'][data-y='${y3}']`)         
                if (player === ML3.id) {
                    countH = countH +1
                } else { null }
            } else { null }
        } else { null }
        if (player === MR.id) {
            countH = countH +1
            let x2 = parseInt(MR.dataset.x)
            let y2 = parseInt(MR.dataset.y)
            let MR2 = document.querySelector(`[data-x='${x2+1}'][data-y='${y2}']`)
            if (player === MR2.id) {
                countH = countH +1
                let x3 = parseInt(MR2.dataset.x)
                let y3 = parseInt(MR2.dataset.y)
                let MR3 = document.querySelector(`[data-x='${x3+1}'][data-y='${y3}']`)          
                if (player === MR3.id) {
                    countH = countH +1                    
                } else { null }
            } else { null }
        } else { null }
        if (player === BL.id) {
            countU = countU +1
            let x2 = parseInt(BL.dataset.x)
            let y2 = parseInt(BL.dataset.y)
            let BL2 = document.querySelector(`[data-x='${x2-1}'][data-y='${y2+1}']`)
            if (player === BL2.id) {
                countU = countU +1
                let x3 = parseInt(BL2.dataset.x)
                let y3 = parseInt(BL2.dataset.y)
                let BL3 = document.querySelector(`[data-x='${x3-1}'][data-y='${y3+1}']`)
                if (player === BL3.id) {
                    countU = countU +1
                } else { null }
            } else { null }
        } else { null }
        if (player === BC.id) {
            countV = countV +1
            let x2 = parseInt(BC.dataset.x)
            let y2 = parseInt(BC.dataset.y)
            let BC2 = document.querySelector(`[data-x='${x2}'][data-y='${y2+1}']`)
            if (player === BC2.id) {
                countV = countV +1
                let x3 = parseInt(BC2.dataset.x)
                let y3 = parseInt(BC2.dataset.y)
                let BC3 = document.querySelector(`[data-x='${x3}'][data-y='${y3+1}']`)
                if (player === BC3.id) {
                    countV = countV +1                    
                } else { null }
            } else { null }
        } else { null }

        if (player === BR.id) {
            countD = countD +1
            let x2 = parseInt(BR.dataset.x)
            let y2 = parseInt(BR.dataset.y)
            let BR2 = document.querySelector(`[data-x='${x2+1}'][data-y='${y2+1}']`)
            if (player === BR2.id) {
                countD = countD +1
                let x3 = parseInt(BR2.dataset.x)
                let y3 = parseInt(BR2.dataset.y)
                let BR3 = document.querySelector(`[data-x='${x3+1}'][data-y='${y3+1}']`)
                if (player === BR3.id) {
                    countD = countD +1
                } else { null }
            } else { null }
        } else { null }
        console.log("countV:",countV)
        console.log("countH:",countH)
        console.log("countD:",countD)
        console.log("countU:",countU)
        
        if (countV >=4 || countH >=4 || countD >=4 || countU >=4) {
            mooSound.play()
            if (turn == "Player 1") {
                // mooSound.play()
                alert(`${player1} wins!!`)
                logGame(player1,player2,player1)
            } else {
                // mooSound.play()
                alert(`${player2} wins!!`)
                logGame(player1,player2,player2)
            }   
        }  
    }

 function checkTie() {
    let p1Chips = parseInt(board.querySelectorAll("#p1").length)
    let p2Chips = parseInt(board.querySelectorAll("#p2").length)
    let allChips = p1Chips + p2Chips
    console.log(allChips)
    if (allChips === 41) {
        loserSound.play()
        alert("You both suck... Try again!")
        logGame(player1,player2,"TIE")
        createLeaderboard()
    }   
 }
 
 // leaderboard
 let leaderboardButton = document.getElementById('leaderboard')
 function createLeaderboard() {
    let currentImage = document.getElementsByTagName('img')[0]
    leaderboard.innerHTML = `
    <br>
    <div class="turn"> GAME HISTORY
    </div>
    <br>
    <br>
    <table id="players" class="general">
    <tr>
    <th>Game</th>
    <th>Player 1</th>
    <th>Player 2</th>
    <th>Winner</th>
    </tr>
    </table>
    <br>
    <br>
    `
    fetch('http://localhost:3000/api/v1/games')
    .then(response => response.json())
    .then(games => {
        games.forEach( game => {
            let newTr = document.createElement('tr')
            newTr.innerHTML = `
            <td>${game.id}</td>
            <td>${game.player_1}</td>
            <td>${game.player_2}</td>
            <td>${game.winner}</td>     
            `
            let table = document.getElementById('players')
            table.appendChild(newTr)
        })
    })

    switch (body) {
        case gameBoard.parentNode:
            body.replaceChild(leaderboard, gameBoard)
            currentImage.remove()
            break;
        case rules.parentNode:
            body.replaceChild(leaderboard, rules)
            currentImage.remove()
            break;
        case player1Form.parentNode:
            body.replaceChild(leaderboard, player1Form)
            currentImage.remove()
            break;
        case player2Form.parentNode:
            body.replaceChild(leaderboard, player2Form)
            currentImage.remove()
            break;
        default:
            break;
    }
}
    leaderboardButton.addEventListener("click", e=> {
       createLeaderboard()    
    })
    
    
    //rules
    rulesButton.addEventListener("click", e=> {
        let leaderboard = document.getElementById('leaderboard')
        let currentImage = document.getElementsByTagName('img')[0]
               
       switch (body) {
        case gameBoard.parentNode:
            body.replaceChild(rules, gameBoard)
            body.appendChild(rulesImage)
            break;
        case leaderboard.parentNode:
            body.replaceChild(rules, leaderboard)
            body.appendChild(rulesImage)
            break;
        case player1Form.parentNode:
            body.replaceChild(rules, player1Form)
            body.replaceChild(rulesImage,currentImage)
            break;
        case player2Form.parentNode:
            body.replaceChild(rules, player2Form)
            body.replaceChild(rulesImage,currentImage)
            break;
        default:
            break;
    }
    })

    function logGame(player1,player2,winner) {
        fetch('http://localhost:3000/api/v1/games',{
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "player_1": player1,
                "player_2": player2,
                "winner": winner 
            })
        })
        .then(resp => resp.json())
        .then(data => createLeaderboard())
    }

 // end of coding space
});



