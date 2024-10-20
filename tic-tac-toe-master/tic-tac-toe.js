gameboard.addEventListener("DOMContentLoaded", () => {
    let squares = gameboard.querySelectorAll("#board > div");

    squares.forEach(square => {
        square.classList.add("square");
    });
});
