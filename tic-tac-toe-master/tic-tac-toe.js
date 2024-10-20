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
    