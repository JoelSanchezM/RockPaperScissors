function getComputerChoice(){
    const options = ['paper', 'rock', 'scissors']
    return options[Math.floor(Math.random()*3)]
}

function playRound(playerSelection, computerSelection){
    let winner = ''
    
    if (playerSelection == 'paper'){
        if (computerSelection == 'paper') winner += 'Tie'
        else if (computerSelection == 'rock') winner += 'Player'
        else winner += 'Computer'
    }
    else if (playerSelection == 'rock'){
        if (computerSelection == 'paper') winner += 'Computer'
        else if (computerSelection == 'rock') winner += 'Tie'
        else winner += 'Player'
    }
    else if (playerSelection == 'scissors'){
        if (computerSelection == 'paper') winner += 'Player'
        else if (computerSelection == 'rock') winner += 'Computer'
        else winner += 'Tie'
    }

    return winner
}

function game(choice){
    let playerSelection, computerSelection, result
    playerSelection = choice
    computerSelection = getComputerChoice()

    winner = playRound(playerSelection, computerSelection)
    
    result = [playerSelection, computerSelection, winner]
    
    return result
}

buttons = document.querySelectorAll('.buttons > button')
scoreboard = document.querySelector('.scoreboard')
message = document.querySelector('.message')
playerSelectionImg = document.querySelector('.player__selections > img')
computerSelectionImg = document.querySelector('.computer__selections > img')



buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        choice = e.srcElement.parentElement.id.slice(0,-4)
        result = game(choice)   
        if (result[2] == 'Player') playerWins++
        else if (result[2] == 'Computer') computerWins++
        
        scoreboard.innerHTML = `<p>Scores</p>
        <p>Player: ${playerWins}</p>
        <p>Computer: ${computerWins}</p>`
        playerSelectionImg.src = `./imgs/${result[0]}.jpg`
        computerSelectionImg.src = `./imgs/${result[1]}.jpg`
        if (result[2] == 'Tie') message.innerText = 'Tie!'
        else message.innerText = `Winner: ${result[2]}`
        
    })

});

let playerWins = 0
let computerWins = 0

