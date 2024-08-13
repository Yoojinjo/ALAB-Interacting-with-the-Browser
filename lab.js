

function startGame() {
    for (let i = 0; i < 7; i++) {
        
        currentNumber = Math.floor(Math.random() * 6) + 1;
console.log(currentNumber);
        
        guess = window.prompt("Pick a number between 1 and 6: You have " + (7-i) + " guesses left.");
        console.log(guess);

        if (guess == currentNumber) {
            console.log("Correct!");
            // answer = document.querySelector("answer")
            answer.innerHTML = "Correct!";
            break
        } else {
            console.log("Wrong!");
            answer.innerHTML = "Wrong!";
        }
    }
    if ((i = 3)) {
        answer.innerText += " Game Over!";
    } 
}
startGame();
 