function getComputerChoice(){
    const options = ['Paper', 'Rock', 'Scissors']
    return options[Math.floor(Math.random()*3)]
}

console.log(getComputerChoice())