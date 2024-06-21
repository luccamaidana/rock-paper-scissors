#!Just want to do a comment line with this syntax


//variables
let humanScore = 0
let computerScore = 0

//querySelectors
let options = document.querySelector("#options")
let match = document.querySelector("#match")
let computer = document.querySelector("#computer")
let winner = document.querySelector("#winner")
winner.setAttribute("style","white-space: pre;")


const playerSelection = () => {
    options.addEventListener ("click", (event) =>{
        let target = event.target

        switch (target.id) {
            case "rock":
                win = playRound(1)
                break;
            case "paper":
                win = playRound(2)
                break;
            case "scissors":
                win = playRound(3)
                break;  
        }
        return win
    })
}


function getComputerChoice(){
    let x = Math.random()

    if (x<=0.3){
        computer.textContent = "COMPUTER CHOSE: 🪨"
        return 1
    }
    else if(x>0.3 && x<0.6){
        computer.textContent = "COMPUTER CHOSE: 📜"
        return 2
    }
    else if(x>=0.6 && x<=1){
        computer.textContent = "COMPUTER CHOSE: ✂️"
        return 3
    }

}

function validChoice(op){
    if (op === 1 || op === 2 || op === 3 || op == 0)
        return op
    
    else
        do{
        op = parseInt(prompt(`\t\tERROR!\r\nCHOOSE:\r\n\r\n1- 🪨\r\n2- PAPER\r\n3- ✂️\r\n\r\n 0- QUIT GAME`))
        } while (op !== 1 && op !== 2 && op !== 3 && op !== 0)    
        return op

}

function getHumanChoice (){

    let x = parseInt(prompt(`CHOOSE:\r\n\r\n1- 🪨\r\n2- PAPER\r\n3- ✂️\r\n\r\n 0- QUIT GAME`))
    x = validChoice(x)

    if(x === 1)
        return 1
    else if (x === 2)
        return 2
    else if (x === 3)
        return 3
    else if (x === 0)
        return 0
}

function whoWon(h,c){
    if (h === c){
        winner.textContent = "YOU TIE!\r\nGOOD GAME!"
        ww = -1}

    else if (h === 1 && c === 2){
        winner.textContent = "YOU LOSE!\r\n📜 BEATS 🪨!"
        ww = 0}
    else if (h === 1 && c === 3){
        winner.textContent = "YOU WON!\r\n🪨 BEATS ✂️!"
        ww = 1}

    else if (h === 2 && c === 3){
        winner.textContent = "YOU LOSE!\r\n✂️ BEATS 📜!"
        ww = 0}
    else if (h === 2 && c === 1){
        winner.textContent = "YOU WON!\r\n📜 BEATS 🪨!"
        ww = 1}

    else if (h === 3 && c === 1){
        winner.textContent = "YOU LOSE!\r\n🪨 BEATS ✂️!"
        ww = 0}
    else if (h === 3 && c === 2){
        winner.textContent = "YOU WON!\r\n✂️ BEATS 📜!"
        ww = 1} 
    
    return ww
}

function playRound(p){
    /* alert("🪨")
    alert("PAPER")
    alert("✂️") */
    
    /* let h = getHumanChoice()
    if(h===0)
        return -2
    else { */
        let c = getComputerChoice()
        let win = whoWon(p,c)
        return win
    
}


function playGame(){
    let i = 1
    let score
    do{

        alert(`ROUND ${i}\r\nMATCH ${humanScore} - ${computerScore}`)
        
        score = playerSelection()
        
        switch (score) {
            case -2:
                break;
            case -1:
                break;
            case 0:
                computerScore++;
                break;
            case 1:
                humanScore++;
                break;
        }
        i++;
        
        
    } while (i<=5  && score !== -2)

                
    if(humanScore>computerScore)
        alert(`YOU WON! CONGRATULATIONS!\r\nGAME ${humanScore} - ${computerScore}`)
    else if (humanScore<computerScore)
        alert(`YOU LOSE! TRY NEXT TIME!\r\nGAME ${humanScore} - ${computerScore}`)
    else 
        alert(`YOU TIE! TRY NEXT TIME!\r\nGAME ${humanScore} - ${computerScore}`)        

}

playGame() 