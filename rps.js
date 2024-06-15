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

getComputerChoice()