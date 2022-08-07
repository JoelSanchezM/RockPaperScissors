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

function game(n_games){
    let playerSelection, computerSelection
    let playerWins = 0
    let computerWins = 0
    let ties = 0
    
    for (let i = 0; i < n_games; i++){
        playerSelection = prompt('Write:\na) Rock\nb)Paper\nc)Scissors')
        computerSelection = getComputerChoice()

        result = playRound(playerSelection, computerSelection)
        winner = getWinner(result)
        console.log(result)
        if (winner == 'Player') playerWins++
        else if (winner == 'Computer') computerWins++
        else ties++
    }

    console.log(`Player won ${playerWins} times\n`)
    console.log(`Computer won ${computerWins} times\n`)
    console.log(`There were ${ties} ties\n`)
}

game(5)