#!Just want to do a comment line with this syntax


//variables
let humanScore = 0
let computerScore = 0

//querySelectors
let options = document.querySelector("#options")
let match = document.querySelector("#match")
let computer = document.querySelector("#computer")
let winner = document.querySelector("#winner")

const playerSelection = () => {
    options.addEventListener ("click", (event) =>{
        let target = event.target

        switch (target.id) {
            case "rock":
                playRound(1)
                break;
            case "paper":
                playRound(2)
                break;
            case "scissors":
                playRound(3)
                break;  
        }
    })
}

playerSelection()

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
        op = parseInt(prompt(`\t\tERROR!\nCHOOSE:\n\n1- ROCK\n2- PAPER\n3- SCISSORS\n\n 0- QUIT GAME`))
        } while (op !== 1 && op !== 2 && op !== 3 && op !== 0)    
        return op

}

function getHumanChoice (){

    let x = parseInt(prompt(`CHOOSE:\n\n1- ROCK\n2- PAPER\n3- SCISSORS\n\n 0- QUIT GAME`))
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
        alert("YOU TIE!\nGOOD GAME!")
        ww = -1}

    else if (h === 1 && c === 2){
        alert("YOU LOSE!\nPAPER BEATS ROCK!")
        ww = 0}
    else if (h === 1 && c === 3){
        alert("YOU WON!\nROCK BEATS SCISSORS!")
        ww = 1}

    else if (h === 2 && c === 3){
        alert("YOU LOSE!\nSCISSORS BEATS PAPER!")
        ww = 0}
    else if (h === 2 && c === 1){
        alert("YOU WON!\nPAPER BEATS ROCK!")
        ww = 1}

    else if (h === 3 && c === 1){
        alert("YOU LOSE!\nROCK BEATS SCISSORS!")
        ww = 0}
    else if (h === 3 && c === 2){
        alert("YOU WON!\nSCISSORS BEATS PAPER!")
        ww = 1} 
    
    return ww
}

function playRound(p){
    /* alert("ROCK")
    alert("PAPER")
    alert("SCISSORS") */
    
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

        alert(`ROUND ${i}\nMATCH ${humanScore} - ${computerScore}`)
        
        score = playRound()
        
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
        alert(`YOU WON! CONGRATULATIONS!\nGAME ${humanScore} - ${computerScore}`)
    else if (humanScore<computerScore)
        alert(`YOU LOSE! TRY NEXT TIME!\nGAME ${humanScore} - ${computerScore}`)
    else 
        alert(`YOU TIE! TRY NEXT TIME!\nGAME ${humanScore} - ${computerScore}`)        

}

/* playGame() */