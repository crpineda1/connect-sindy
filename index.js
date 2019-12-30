// let parentNode = document.getElementById("1")
// let child = document.createElement('div')
// child.innerHTML = "We hit MVP"
// parentNode.appendChild(child)
const board = document.getElementById('board')

window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
    console.log(board)
    let turn = "Player 1"
    let turnDiv = document.getElementById('turn')

     
    

    board.addEventListener("click", e => { 
        // console.log(e.target.dataset.x)
    
        let column = e.target.dataset.x
        let row = 1
        

        let current = document.querySelector(`[data-x='${column}'][data-y='${row}']`)
        // console.log("current before if:", current)

        if (turn === "Player 1") {


            if (current.id) {
                alert("Can't you see??? Column full! ")
            } else {
                row = row + 1
                current = document.querySelector(`[data-x='${column}'][data-y='${row}']`)
                
                // console.log("current after if:", current)
    
                if (current.id){ 
                    //take disc above this and add id
                    // console.log("add id to last div")
                    current = document.querySelector(`[data-x='${column}'][data-y='${row-1}']`)
                    current.id = "p1"
    
                } else{
                    //keep going
                    // console.log("keep going")
                    row = row + 1
                    current = document.querySelector(`[data-x='${column}'][data-y='${row}']`)
                
                    // console.log("current after if:", current)
    
                    if (current.id){ 
                        //take disc above this and add id
                        // console.log("add id to last div")
                        current = document.querySelector(`[data-x='${column}'][data-y='${row-1}']`)
                        current.id = "p1"
        
                    } else{
                        //keep going
                        // console.log("keep going")
                        row = row + 1
                        current = document.querySelector(`[data-x='${column}'][data-y='${row}']`)
                        
                        // console.log("current after if:", current)
        
                        if (current.id){ 
                            //take disc above this and add id
                            // console.log("add id to last div")
                            current = document.querySelector(`[data-x='${column}'][data-y='${row-1}']`)
                            current.id = "p1"
            
                        } else{
                            //keep going
                            // console.log("keep going")
                            row = row + 1
                            current = document.querySelector(`[data-x='${column}'][data-y='${row}']`)
                            
                            // console.log("current after if:", current)
            
                            if (current.id){ 
                                //take disc above this and add id
                                // console.log("add id to last div")
                                current = document.querySelector(`[data-x='${column}'][data-y='${row-1}']`)
                                current.id = "p1"
                
                            } else{
                                //keep going
                                // console.log("keep going")
                                row = row + 1
                                current = document.querySelector(`[data-x='${column}'][data-y='${row}']`)
                                
                                // console.log("current after if:", current)
                
                                if (current.id){ 
                                    //take disc above this and add id
                                    // console.log("add id to last div")
                                    current = document.querySelector(`[data-x='${column}'][data-y='${row-1}']`)
                                    current.id = "p1"
                    
                                } else{
                                    //keep going
                                    // console.log("keep going")
                                    current.id = "p1"
                                }
                            } 
                        }
                    }
                }
            } 
            
            checkWin(current, turn)
            turn = "Player 2"
            turnDiv.textContent = `Current Turn: ${turn}`
            
        } else {
            if (current.id) {
                alert("Can't you see??? Column full! ")
            } else {
                row = row + 1
                current = document.querySelector(`[data-x='${column}'][data-y='${row}']`)
                
                // console.log("current after if:", current)
    
                if (current.id){ 
                    //take disc above this and add id
                    current = document.querySelector(`[data-x='${column}'][data-y='${row-1}']`)
                    current.id = "p2"
    
                } else{
                    //keep going
                    // console.log("keep going")
                    row = row + 1
                    current = document.querySelector(`[data-x='${column}'][data-y='${row}']`)
                
                    // console.log("current after if:", current)
    
                    if (current.id){ 
                        //take disc above this and add id
                        // console.log("add id to last div")
                        current = document.querySelector(`[data-x='${column}'][data-y='${row-1}']`)
                        current.id = "p2"
        
                    } else{
                        //keep going
                        // console.log("keep going")
                        row = row + 1
                        current = document.querySelector(`[data-x='${column}'][data-y='${row}']`)
                        
                        // console.log("current after if:", current)
        
                        if (current.id){ 
                            //take disc above this and add id
                            // console.log("add id to last div")
                            current = document.querySelector(`[data-x='${column}'][data-y='${row-1}']`)
                            current.id = "p2"
            
                        } else{
                            //keep going
                            // console.log("keep going")
                            row = row + 1
                            current = document.querySelector(`[data-x='${column}'][data-y='${row}']`)
                            
                            // console.log("current after if:", current)
            
                            if (current.id){ 
                                //take disc above this and add id
                                // console.log("add id to last div")
                                current = document.querySelector(`[data-x='${column}'][data-y='${row-1}']`)
                                current.id = "p2"
                
                            } else{
                                //keep going
                                // console.log("keep going")
                                row = row + 1
                                current = document.querySelector(`[data-x='${column}'][data-y='${row}']`)
                                
                                // console.log("current after if:", current)
                
                                if (current.id){ 
                                    //take disc above this and add id
                                    // console.log("add id to last div")
                                    current = document.querySelector(`[data-x='${column}'][data-y='${row-1}']`)
                                    current.id = "p2"
                    
                                } else{
                                    //keep going
                                    // console.log("keep going")
                                    current.id = "p2"
                                }
                            } 
                        }
                    }
                }
            } 
            checkWin(current, turn)
            turn = "Player 1"
            turnDiv.textContent = `Current Turn: ${turn}`
            
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
        // console.log(turn)
        // console.log(TL.id,TC.id,TR.id,ML.id,MR.id,BL.id,BC.id,BR.id)

        let player = null
        if  (turn === "Player 1") {
            player = "p1"
            console.log(player)
        } else {
            player = "p2"
            console.log(player)
        }


        if (player === TL.id) {
            countD = countD +1
            console.log("TL1:",countD)

            let x2 = parseInt(TL.dataset.x)
            let y2 = parseInt(TL.dataset.y)
            let TL2 = document.querySelector(`[data-x='${x2-1}'][data-y='${y2-1}']`)

            if (player === TL2.id) {
                countD = countD +1
                console.log("TL2:",countD)

                let x3 = parseInt(TL2.dataset.x)
                let y3 = parseInt(TL2.dataset.y)
                let TL3 = document.querySelector(`[data-x='${x3-1}'][data-y='${y3-1}']`)
               
                if (player === TL3.id) {
                    countD = countD +1
                    console.log("TL3:",countD)  
                    
                }else{
                    null
                }

            }else{
                null
            }

    

        }else{
            null
        }

        if (player === TR.id) {
            countU = countU +1
            console.log("TR1:",countU)

            let x2 = parseInt(TR.dataset.x)
            let y2 = parseInt(TR.dataset.y)
            let TR2 = document.querySelector(`[data-x='${x2+1}'][data-y='${y2-1}']`)

            if (player === TR2.id) {
                countU = countU +1
                console.log("TR2:",countU)

                let x3 = parseInt(TR2.dataset.x)
                let y3 = parseInt(TR2.dataset.y)
                let TR3 = document.querySelector(`[data-x='${x3+1}'][data-y='${y3-1}']`)
               
                if (player === TR3.id) {
                    countU = countU +1
                    console.log("TR3:",countU)  
                    
                }else{
                    null
                }

            }else{
                null
            }

        }else{
            null
        }

        if (player === ML.id) {
            countH = countH +1
            console.log("ML1:",countH)

            let x2 = parseInt(ML.dataset.x)
            let y2 = parseInt(ML.dataset.y)
            let ML2 = document.querySelector(`[data-x='${x2-1}'][data-y='${y2}']`)

            if (player === ML2.id) {
                countH = countH +1
                console.log("ML2:",countH)

                let x3 = parseInt(ML2.dataset.x)
                let y3 = parseInt(ML2.dataset.y)
                let ML3 = document.querySelector(`[data-x='${x3-1}'][data-y='${y3}']`)
               
                if (player === ML3.id) {
                    countH = countH +1
                    console.log("ML3:",countH)  
                    
                }else{
                    null
                }

            }else{
                null
            }

        }else{
            null
        }

        if (player === MR.id) {
            countH = countH +1
            console.log("MR1:",countH)

            let x2 = parseInt(MR.dataset.x)
            let y2 = parseInt(MR.dataset.y)
            let MR2 = document.querySelector(`[data-x='${x2+1}'][data-y='${y2}']`)

            if (player === MR2.id) {
                countH = countH +1
                console.log("MR2:",countH)

                let x3 = parseInt(MR2.dataset.x)
                let y3 = parseInt(MR2.dataset.y)
                let MR3 = document.querySelector(`[data-x='${x3+1}'][data-y='${y3}']`)
               
                if (player === MR3.id) {
                    countH = countH +1
                    console.log("MR3:",countH)  
                    
                }else{
                    null
                }

            }else{
                null
            }

        }else{
            null
        }

        if (player === BL.id) {
            countU = countU +1
            console.log("BL1:",countU)

            let x2 = parseInt(BL.dataset.x)
            let y2 = parseInt(BL.dataset.y)
            let BL2 = document.querySelector(`[data-x='${x2-1}'][data-y='${y2+1}']`)

            if (player === BL2.id) {
                countU = countU +1
                console.log("BL2:",countU)

                let x3 = parseInt(BL2.dataset.x)
                let y3 = parseInt(BL2.dataset.y)
                let BL3 = document.querySelector(`[data-x='${x3-1}'][data-y='${y3+1}']`)
               
                if (player === BL3.id) {
                    countU = countU +1
                    console.log("BL3:",countU)  
                    
                }else{
                    null
                }

            }else{
                null
            }

        }else{
            null
        }

        if (player === BC.id) {
            countV = countV +1
            console.log("BC1:",countV)

            let x2 = parseInt(BC.dataset.x)
            let y2 = parseInt(BC.dataset.y)
            let BC2 = document.querySelector(`[data-x='${x2}'][data-y='${y2+1}']`)

            if (player === BC2.id) {
                countV = countV +1
                console.log("BC2:",countV)

                let x3 = parseInt(BC2.dataset.x)
                let y3 = parseInt(BC2.dataset.y)
                let BC3 = document.querySelector(`[data-x='${x3}'][data-y='${y3+1}']`)
               
                if (player === BC3.id) {
                    countV = countV +1
                    console.log("BC3:",countV)  
                    
                }else{
                    null
                }

            }else{
                null
            }

        }else{
            null
        }

        if (player === BR.id) {
            countD = countD +1
            console.log("BR1:",countD)

            let x2 = parseInt(BR.dataset.x)
            let y2 = parseInt(BR.dataset.y)
            let BR2 = document.querySelector(`[data-x='${x2+1}'][data-y='${y2+1}']`)

            if (player === BR2.id) {
                countD = countD +1
                console.log("BR2:",countD)

                let x3 = parseInt(BR2.dataset.x)
                let y3 = parseInt(BR2.dataset.y)
                let BR3 = document.querySelector(`[data-x='${x3+1}'][data-y='${y3+1}']`)
               
                if (player === BR3.id) {
                    countD = countD +1
                    console.log("BR3:",countD)  
                    
                }else{
                    null
                }

            }else{
                null
            }

        }else{
            null
        }
        console.log("countV:",countV)
        console.log("countH:",countH)
        console.log("countD:",countD)
        console.log("countU:",countU)
        if (countV >=4 || countH >=4 || countD >=4 || countU >=4) {
            alert(`${turn} wins`)
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

 let rulesButton = document.getElementById('rules')
 rulesButton.addEventListener("click", e=> {
     alert("Make a straight line of four Sindys; the line can be vertical, horizontal or diagonal.")
 })




 // end of coding space
});

// end of code

