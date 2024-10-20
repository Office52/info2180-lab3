gameboard.addEventListener("DOMContentLoaded", () => {
    let squares = gameboard.querySelectorAll("#board > div");

    squares.forEach(square => {
        square.classList.add("square");
    });
});
    //Exercise2
    let activeUser = "X";  

    gameboard.querySelectorAll("#board > div").forEach(square => {
        square.addEventListener("click", function() {
            if (square.textContent === "") {
                square.textContent = activeUser;
                square.classList.add(activeUser);  

                activeUser = activeUser=== "X" ? "O" : "X";  
            }
        });
    
    });
    //Exercise3
    gameboard.querySelectorAll("#board > div").forEach(square => {
        square.addEventListener("mouseover", function() {
            if (square.textContent === "") {
                square.classList.add("hover");
            }
        });

        square.addEventListener("mouseout", function() {
            square.classList.remove("hover");
        });
    });
    //Exercise4
    let gameState = Array(9).fill("");  

    gameboard.querySelectorAll("#board > div").forEach((square, index) => {
        square.addEventListener("click", function() {
            if (square.textContent === "") {
                square.textContent = activeUser;
                square.classList.add(activeUser);

                gameState[index] = activeUser;

                if (checkWinner()) {
                    let status = gameboard.getElementById("status");
                    status.classList.add("you-won");
                    status.textContent = `${activeUser} wins`;
                }

                currentPlayer = currentPlayer === "X" ? "O" : "X";
            }
        });
    });

    function checkWinner() {
        const winningCombinations = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],  
            [0, 3, 6], [1, 4, 7], [2, 5, 8],  
            [0, 4, 8], [2, 4, 6]              
        ];

        return winningCombinations.some(combination => {
            return gameState[combination[0]] &&
                gameState[combination[0]] === gameState[combination[1]] &&
                gameState[combination[1]] === gameState[combination[2]];
        });
    }
   