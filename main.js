function getComputerChoice(){
    const options = ['paper', 'rock', 'scissors']
    return options[Math.floor(Math.random()*3)]
}

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase()
    let result = `Player selection: ${playerSelection}\n`
    result += `Computer selection: ${computerSelection}\n`
    
    if (playerSelection == 'paper'){
        if (computerSelection == 'paper') result += 'Tie!'
        else if (computerSelection == 'rock') result += 'Winner: Player'
        else result += 'Winner: Computer'
    }
    else if (playerSelection == 'rock'){
        if (computerSelection == 'paper') result += 'Winner: Computer'
        else if (computerSelection == 'rock') result += 'Tie!'
        else result += 'Winner: Player'
    }
    else if (playerSelection == 'scissors'){
        if (computerSelection == 'paper') result += 'Winner: Player'
        else if (computerSelection == 'rock') result += 'Winner: Computer'
        else result += 'Tie!'
    }
    else result = ('Error: Invalid choice!')

    return result
}

function getWinner(result){
    let winner = result.split('\n')
    winner = winner[2].split(': ')
    if (winner.length == 2) return winner[1]
    else return winner[0]
}
const playerSelection = 'rock'
const computerSelection = getComputerChoice()

console.log(getWinner(playRound(playerSelection, computerSelection)))
