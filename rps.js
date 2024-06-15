#!Just want to do a comment line with this syntax


function getComputerChoice(){
    let x = Math.random()

    if (x<=0.3)
    return "ROCK"
    else if(x>0.3 && x<0.6)
    return "PAPER"
    else if(x>=0.6 && x<=1)
    return "SCISSORS"

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
        return "ROCK"
    else if (x === 2)
        return "PAPER"
    else if (x === 3)
        return "SCISSORS"
}

getHumanChoice()
getComputerChoice()