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
        let count = 1
        console.log(count)
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
            count = count +1
            console.log(count)

            let x2 = parseInt(TL.dataset.x)
            let y2 = parseInt(TL.dataset.y)
            let TL2 = document.querySelector(`[data-x='${x2-1}'][data-y='${y2-1}']`)

            if (player === TL2.id) {
                count = count +1
                console.log(count)

                let x3 = parseInt(TL2.dataset.x)
                let y3 = parseInt(TL2.dataset.y)
                let TL3 = document.querySelector(`[data-x='${x3-1}'][data-y='${y3-1}']`)
               
                if (player === TL3.id) {
                    count = count +1
                    console.log(count)  
                    alert(`${turn} wins`)
                    window.location.reload()
                    
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
            count = count +1
            console.log(count)

            let x2 = parseInt(TR.dataset.x)
            let y2 = parseInt(TR.dataset.y)
            let TR2 = document.querySelector(`[data-x='${x2+1}'][data-y='${y2-1}']`)

            if (player === TR2.id) {
                count = count +1
                console.log(count)

                let x3 = parseInt(TR2.dataset.x)
                let y3 = parseInt(TR2.dataset.y)
                let TR3 = document.querySelector(`[data-x='${x3+1}'][data-y='${y3-1}']`)
               
                if (player === TR3.id) {
                    count = count +1
                    console.log(count)  
                    alert(`${turn} wins`)
                    window.location.reload()
                    
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
            count = count +1
            console.log(count)

            let x2 = parseInt(ML.dataset.x)
            let y2 = parseInt(ML.dataset.y)
            let ML2 = document.querySelector(`[data-x='${x2-1}'][data-y='${y2}']`)

            if (player === ML2.id) {
                count = count +1
                console.log(count)

                let x3 = parseInt(ML2.dataset.x)
                let y3 = parseInt(ML2.dataset.y)
                let ML3 = document.querySelector(`[data-x='${x3-1}'][data-y='${y3}']`)
               
                if (player === ML3.id) {
                    count = count +1
                    console.log(count)  
                    alert(`${turn} wins`)
                    window.location.reload()
                    
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
            count = count +1
            console.log(count)

            let x2 = parseInt(MR.dataset.x)
            let y2 = parseInt(MR.dataset.y)
            let MR2 = document.querySelector(`[data-x='${x2+1}'][data-y='${y2}']`)

            if (player === MR2.id) {
                count = count +1
                console.log(count)

                let x3 = parseInt(MR2.dataset.x)
                let y3 = parseInt(MR2.dataset.y)
                let MR3 = document.querySelector(`[data-x='${x3+1}'][data-y='${y3}']`)
               
                if (player === MR3.id) {
                    count = count +1
                    console.log(count)  
                    alert(`${turn} wins`)
                    window.location.reload()
                    
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
            count = count +1
            console.log(count)

            let x2 = parseInt(BL.dataset.x)
            let y2 = parseInt(BL.dataset.y)
            let BL2 = document.querySelector(`[data-x='${x2-1}'][data-y='${y2+1}']`)

            if (player === BL2.id) {
                count = count +1
                console.log(count)

                let x3 = parseInt(BL2.dataset.x)
                let y3 = parseInt(BL2.dataset.y)
                let BL3 = document.querySelector(`[data-x='${x3-1}'][data-y='${y3+1}']`)
               
                if (player === BL3.id) {
                    count = count +1
                    console.log(count)  
                    alert(`${turn} wins`)
                    window.location.reload()
                    
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
            count = count +1
            console.log(count)

            let x2 = parseInt(BC.dataset.x)
            let y2 = parseInt(BC.dataset.y)
            let BC2 = document.querySelector(`[data-x='${x2}'][data-y='${y2+1}']`)

            if (player === BC2.id) {
                count = count +1
                console.log(count)

                let x3 = parseInt(BC2.dataset.x)
                let y3 = parseInt(BC2.dataset.y)
                let BC3 = document.querySelector(`[data-x='${x3}'][data-y='${y3+1}']`)
               
                if (player === BC3.id) {
                    count = count +1
                    console.log(count)  
                    alert(`${turn} wins`)
                    window.location.reload()
                    
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
            count = count +1
            console.log(count)

            let x2 = parseInt(BR.dataset.x)
            let y2 = parseInt(BR.dataset.y)
            let BR2 = document.querySelector(`[data-x='${x2+1}'][data-y='${y2+1}']`)

            if (player === BR2.id) {
                count = count +1
                console.log(count)

                let x3 = parseInt(BR2.dataset.x)
                let y3 = parseInt(BR2.dataset.y)
                let BR3 = document.querySelector(`[data-x='${x3+1}'][data-y='${y3+1}']`)
               
                if (player === BR3.id) {
                    count = count +1
                    console.log(count)  
                    alert(`${turn} wins`)
                    window.location.reload()
                    
                }else{
                    null
                }

            }else{
                null
            }

        }else{
            null
        }

    }








 // end of coding space
});

// end of code

// switch (player) {
    //     case TL.id:        
    //         console.log("TL has same user Id",TL.id)
    
    //     case TC.id:
    //         console.log("TC has same user Id",TC.id)
    
            
    
    //     case TR.id:
    //         console.log("TR has same user Id",TR.id)
            
            
    
    //     case ML.id:
    //         console.log("ML has same user Id",ML.id)
            
            
    
    //     case MR.id:
    //         console.log("MR has same user Id",MR.id)
            
            
    
    //     case BL.id:
    //         console.log("BL has same user Id",BL.id)
            
            
    
    //     case BC.id:
    //         console.log("BC has same user Id",BC.id)
            
            
    
    //     case BR.id:
    //         console.log("BR has same user Id",BR.id)
            
            
    
    //     default:
    //         break;
    // }