#!Just want to do a comment line with this syntax


//variables
let humanScore = 0
let computerScore = 0


function getComputerChoice(){
    let x = Math.random()

    if (x<=0.3){
        alert("COMPUTER CHOSE:\nROCK") 
        return 1
    }
    else if(x>0.3 && x<0.6){
        alert("COMPUTER CHOSE:\nPAPER") 
        return 2
    }
    else if(x>=0.6 && x<=1){
        alert("COMPUTER CHOSE:\nSCISSORS") 
        return 3
    }

}

function validChoice(op){
    if (op === 1 || op === 2 || op === 3)
        return op
    
    else
        do{
        op = parseInt(prompt(`\t\tERROR!\nCHOOSE:\n\n1- ROCK\n2- PAPER\n3- SCISSORS\n`))
        } while (op !== 1 && op !== 2 && op !== 3)    
        return op

}

function getHumanChoice (){

    let x = parseInt(prompt(`CHOOSE:\n\n1- ROCK\n2- PAPER\n3- SCISSORS\n`))
    x = validChoice(x)

    if(x === 1)
        return 1
    else if (x === 2)
        return 2
    else if (x === 3)
        return 3
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

function playRound(){
    alert("ROCK")
    alert("PAPER")
    alert("SCISSORS")
    
    let h = getHumanChoice()
    let c = getComputerChoice()

    let win = whoWon(h,c)
    return win
}

function playGame(){
    for (let i = 1; i <= 5; i++) {
     
        alert(`ROUND ${i}\nMATCH ${humanScore} - ${computerScore}`)
        
        let score = playRound()
     
        switch (score) {
            case -1:
                break;
            case 0:
                computerScore++;
                break;
            case 1:
                humanScore++;
                break;}
    }

    if(humanScore>computerScore)
        alert(`YOU WON! CONGRATULATIONS!\nGAME ${humanScore} - ${computerScore}`)
    else if (humanScore<computerScore)
        alert(`YOU LOSE! TRY NEXT TIME!\nGAME ${humanScore} - ${computerScore}`)
    else
        alert(`YOU TIE! TRY NEXT TIME!\nGAME ${humanScore} - ${computerScore}`)
}

playGame()

