document.addEventListener("DOMContentLoaded", () => {
    const cells = document.querySelectorAll(".cell");
    const resetButton = document.getElementById("reset");
    let currentPlayer = "X";
    let gameBoard = ["", "", "", "", "", "", "", "", ""];
    let gameActive = true;

    const winningConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    const handleCellClick = (e) => {
        const clickedCell = e.target;
        const clickedCellIndex = parseInt(clickedCell.getAttribute("data-index"));

        if (gameBoard[clickedCellIndex] !== "" || !gameActive) {
            return;
        }

        gameBoard[clickedCellIndex] = currentPlayer;
        clickedCell.innerHTML = currentPlayer;

        checkForWinner();
    };

    const checkForWinner = () => {
        let roundWon = false;

        for (let i = 0; i < winningConditions.length; i++) {
            const winCondition = winningConditions[i];
            const a = gameBoard[winCondition[0]];
            const b = gameBoard[winCondition[1]];
            const c = gameBoard[winCondition[2]];

            if (a === "" || b === "" || c === "") {
                continue;
            }

            if (a === b && b === c) {
                roundWon = true;
                break;
            }
        }

        if (roundWon) {
            setTimeout(() => alert(`Player ${currentPlayer} has won!`), 100);
            gameActive = false;
            return;
        }

        const roundDraw = !gameBoard.includes("");
        if (roundDraw) {
            setTimeout(() => alert("It's a draw!"), 100);
            gameActive = false;
            return;
        }

        currentPlayer = currentPlayer === "X" ? "O" : "X";
    };

    const resetGame = () => {
        currentPlayer = "X";
        gameBoard = ["", "", "", "", "", "", "", "", ""];
        gameActive = true;
        cells.forEach(cell => cell.innerHTML = "");
    };

    cells.forEach(cell => cell.addEventListener("click", handleCellClick));
    resetButton.addEventListener("click", resetGame);
});
document.addEventListener("DOMContentLoaded", () => {
    const cells = document.querySelectorAll(".cell");
    const resetButton = document.getElementById("reset");
    const themeButton = document.getElementById("theme-toggle");
    let currentPlayer = "X";
    let gameBoard = ["", "", "", "", "", "", "", "", ""];
    let gameActive = true;

    const winningConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    const handleCellClick = (e) => {
        const clickedCell = e.target;
        const clickedCellIndex = parseInt(clickedCell.getAttribute("data-index"));

        if (gameBoard[clickedCellIndex] !== "" || !gameActive) {
            return;
        }

        gameBoard[clickedCellIndex] = currentPlayer;
        clickedCell.innerHTML = currentPlayer;

        // Add animation class
        clickedCell.classList.add("broken-grid-animation");

        // Remove animation class after animation ends to allow re-triggering
        clickedCell.addEventListener("animationend", () => {
            clickedCell.classList.remove("broken-grid-animation");
        }, { once: true });

        checkForWinner();
    };

    const checkForWinner = () => {
        let roundWon = false;

        for (let i = 0; i < winningConditions.length; i++) {
            const winCondition = winningConditions[i];
            const a = gameBoard[winCondition[0]];
            const b = gameBoard[winCondition[1]];
            const c = gameBoard[winCondition[2]];

            if (a === "" || b === "" || c === "") {
                continue;
            }

            if (a === b && b === c) {
                roundWon = true;
                break;
            }
        }

        if (roundWon) {
            setTimeout(() => alert(`Player ${currentPlayer} has won!`), 100);
            gameActive = false;
            return;
        }

        const roundDraw = !gameBoard.includes("");
        if (roundDraw) {
            setTimeout(() => alert("It's a draw!"), 100);
            gameActive = false;
            return;
        }

        currentPlayer = currentPlayer === "X" ? "O" : "X";
    };

    const resetGame = () => {
        currentPlayer = "X";
        gameBoard = ["", "", "", "", "", "", "", "", ""];
        gameActive = true;
        cells.forEach(cell => cell.innerHTML = "");
    };

    const toggleTheme = () => {
        document.body.classList.toggle("dark-theme");
    };

    cells.forEach(cell => cell.addEventListener("click", handleCellClick));
    resetButton.addEventListener("click", resetGame);
    themeButton.addEventListener("click", toggleTheme);
});
