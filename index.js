// let parentNode = document.getElementById("1")
// let child = document.createElement('div')
// child.innerHTML = "We hit MVP"
// parentNode.appendChild(child)
const board = document.getElementById('board')
const body = document.getElementsByTagName('body')[0]
const gameBoard = document.getElementById('game')
let player1Form = document.createElement('form')
player1Form.id = "logIn"
player1Form.className = "turn"
player1Form.innerHTML = `
Player 1 Name:
<br>
<br>
<input type="text" name="name">
<br>
<br>
<input type="submit" value="Submit">
`

let player2Form = document.createElement('form')
player2Form.id = "logIn"
player2Form.className = "turn"
player2Form.innerHTML = `
Player 2 Name:
<br>
<br>
<input type="text" name="name">
<br>
<br>
<input type="submit" value="Start Game">
`

let player1 = null
let player2 = null

let rulesButton = document.getElementById('rules')
let rules = document.createElement('div')
rules.className = "turn"
rules.innerHTML = "Make a straight line of four Sindys; the line can be vertical, horizontal or diagonal."

let leaderboard = document.createElement('div')
leaderboard.id = "leaderboard"
let turnDiv = document.getElementById('turn')

window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
    body.replaceChild(player1Form, gameBoard)
    let turn = "Player 1"

     player1Form.addEventListener("submit", e=> {
         e.preventDefault()
         body.replaceChild(player2Form, player1Form)
        player1 = e.target.name.value




     })

     player2Form.addEventListener("submit", e=> {
        e.preventDefault()
        body.replaceChild(gameBoard, player2Form)
        player2 = e.target.name.value
        turnDiv.textContent = `Current Turn: ${player1}`
    })
    
    board.addEventListener("click", e => {     
        let column = e.target.dataset.x
        let row = 1
        let current = document.querySelector(`[data-x='${column}'][data-y='${row}']`)
        if (turn === "Player 1") {

            if (current.id) {
                alert("Can't you see??? Column full! ")
            } else {
                row = row + 1
                current = document.querySelector(`[data-x='${column}'][data-y='${row}']`)         
                if (current.id){ 
                    //take disc above this and add id
                    current = document.querySelector(`[data-x='${column}'][data-y='${row-1}']`)
                    current.id = "p1"   
                } else {
                    //keep going
                    row = row + 1
                    current = document.querySelector(`[data-x='${column}'][data-y='${row}']`)                   
                    if (current.id){ 
                        //take disc above this and add id
                        current = document.querySelector(`[data-x='${column}'][data-y='${row-1}']`)
                        current.id = "p1"     
                    } else {
                        //keep going
                        row = row + 1
                        current = document.querySelector(`[data-x='${column}'][data-y='${row}']`)                          
                        if (current.id){ 
                            //take disc above this and add id
                            current = document.querySelector(`[data-x='${column}'][data-y='${row-1}']`)
                            current.id = "p1"       
                        } else {
                            //keep going
                            row = row + 1
                            current = document.querySelector(`[data-x='${column}'][data-y='${row}']`)                                      
                            if (current.id){ 
                                //take disc above this and add id
                                current = document.querySelector(`[data-x='${column}'][data-y='${row-1}']`)
                                current.id = "p1"             
                            } else {
                                //keep going
                                row = row + 1
                                current = document.querySelector(`[data-x='${column}'][data-y='${row}']`)                
                                if (current.id){ 
                                    //take disc above this and add id
                                    current = document.querySelector(`[data-x='${column}'][data-y='${row-1}']`)
                                    current.id = "p1"                 
                                } else {
                                    //keep going
                                    current.id = "p1"
                                }
                            } 
                        }
                    }
                }
            } 
            
            checkWin(current, turn)
            turn = "Player 2"
            turnDiv.textContent = `Current Turn: ${player2}`          
        } else {
            if (current.id) {
                alert("Can't you see??? Column full! ")
            } else {
                row = row + 1
                current = document.querySelector(`[data-x='${column}'][data-y='${row}']`)    
                if (current.id){ 
                    //take disc above this and add id
                    current = document.querySelector(`[data-x='${column}'][data-y='${row-1}']`)
                    current.id = "p2"
                } else {
                    //keep going
                    row = row + 1
                    current = document.querySelector(`[data-x='${column}'][data-y='${row}']`)
                    if (current.id){ 
                        //take disc above this and add id
                        current = document.querySelector(`[data-x='${column}'][data-y='${row-1}']`)
                        current.id = "p2"
                    } else {
                        //keep going
                        row = row + 1
                        current = document.querySelector(`[data-x='${column}'][data-y='${row}']`)
                        if (current.id){ 
                            //take disc above this and add id
                            current = document.querySelector(`[data-x='${column}'][data-y='${row-1}']`)
                            current.id = "p2"
                        } else {
                            //keep going
                            row = row + 1
                            current = document.querySelector(`[data-x='${column}'][data-y='${row}']`)
                            if (current.id){ 
                                //take disc above this and add id
                                current = document.querySelector(`[data-x='${column}'][data-y='${row-1}']`)
                                current.id = "p2"
                            } else {
                                //keep going
                                row = row + 1
                                current = document.querySelector(`[data-x='${column}'][data-y='${row}']`)
                                if (current.id){ 
                                    //take disc above this and add id
                                    current = document.querySelector(`[data-x='${column}'][data-y='${row-1}']`)
                                    current.id = "p2"
                                } else {
                                    //keep going
                                    current.id = "p2"
                                }
                            } 
                        }
                    }
                }
            } 
            checkWin(current, turn)
            turn = "Player 1"
            turnDiv.textContent = `Current Turn: ${player1}`
        }
    }) // end of board event listener

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
                } else {
                    null
                }
            } else {
                null
            }
        } else {
           null
        }
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
                } else {
                    null
                }
            } else {
                null
            }
        } else {
            null
        }
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
                } else {
                    null
                }
            } else {
                null
            }
        } else {
            null
        }
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
                } else {
                    null
                }
            } else {
                null
            }
        } else {
            null
        }
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
                } else {
                    null
                }
            } else {
                null
            }
        } else {
            null
        }
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
                } else {
                    null
                }
            } else {
                null
            }
        } else {
            null
        }
        console.log("countV:",countV)
        console.log("countH:",countH)
        console.log("countD:",countD)
        console.log("countU:",countU)
        if (countV >=4 || countH >=4 || countD >=4 || countU >=4) {
            if (turn == "Player 1") {alert(`${player1} wins!!`)}
            else {alert(`${player2} wins!!`)}
            window.location.reload()
        }
        checkTie()
    }

 function checkTie() {
    let p1Chips = parseInt(board.querySelectorAll("#p1").length)
    let p2Chips = parseInt(board.querySelectorAll("#p2").length)
    let allChips = p1Chips + p2Chips
    if (allChips === 42) {
        alert("You both suck... Try again!")
        window.location.reload()
    }
 }
 
 // leaderboard
 let leaderboardButton = document.getElementById('leaderboard')
 leaderboardButton.addEventListener("click", e=> {
     leaderboard.innerHTML = `
     <table id="players">
     <tr>
     <th>Game</th>
     <th>Player 1</th>
     <th>Player 2</th>
     <th>Winner</th>
     </tr>
     </table>
     `
     fetch('http://localhost:3000/api/v1/games')
     .then(response => {response.json()})
     .then(games => {
         console.dir(games)
        games.forEach( game => {
             let newTr = document.createElement('tr')
             newTr.innerHTML = `
             <td>"${game.id}"</td>
             <td>"${game.player_1}"</td>
             <td>"${game.player_2}"</td>
             <td>"${game.winner}"</td>     
             `
             let table = document.getElementById('players')
             table.appendChild(newTr)
         })
     })

     if (gameBoard.parentNode == body) {body.replaceChild(leaderboard, gameBoard)
     } else if (rules.parentNode == body) { body.replaceChild(leaderboard, rules) 
      } else {body.replaceChild(leaderboard, player1Form)}
    })

    //rules
    rulesButton.addEventListener("click", e=> {
       let leaderboard = document.getElementById('leaderboard')
        if (gameBoard.parentNode == body) {body.replaceChild(rules, gameBoard)
       } else if (leaderboard.parentNode == body) { body.replaceChild(rules, leaderboard) }
     else { body.replaceChild(rules, player1Form) }}
    )


 // end of coding space
});

// end of code

