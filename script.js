const choices = ["rock", "paper", "scissors"];
const icons = { rock: "✊", paper: "✋", scissors: "✌" };

document.getElementById("rock").addEventListener("click", () => playGame("rock"));
document.getElementById("paper").addEventListener("click", () => playGame("paper"));
document.getElementById("scissors").addEventListener("click", () => playGame("scissors"));

function playGame(playerChoice) {
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    let result = "";

    // Determine Winner
    if (playerChoice === computerChoice) {
        result = "It's a tie!";
    } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        result = "You win! 🎉";
    } else {
        result = "You lose! 😞";
    }

    // Display Choices & Result
    document.getElementById("player-choice").innerHTML = `You: ${icons[playerChoice]}`;
    document.getElementById("computer-choice").innerHTML = `Computer: ${icons[computerChoice]}`;
    document.getElementById("result").innerText = result;
}

// Reset Game
function resetGame() {
    document.getElementById("player-choice").innerHTML = "You: ❓";
    document.getElementById("computer-choice").innerHTML = "Computer: ❓";
    document.getElementById("result").innerText = "Make your move!";
}
