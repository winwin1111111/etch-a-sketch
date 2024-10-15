const container = document.querySelector('.grid-container');
const askBtn = document.querySelector('.numberSquareBtn');
function createGrid(numberOfSquare){
    for (let i = 0; i < numberOfSquare * numberOfSquare; i++){
        const item = document.createElement("div");
        item.classList.add("grid-item");
        item.style.width = `${400/numberOfSquare}px`;
        item.addEventListener("mouseover", function(){
            item.style.backgroundColor = "red";
        });
        container.appendChild(item);
    }
}
let squareNumber = 16;
createGrid(squareNumber);

askBtn.textContent = "Number of Square";
askBtn.addEventListener("click", function(){
    do {
        squareNumber = prompt("Enter the number of square (1 - 100): ");
    }
    while(squareNumber > 100 || squareNumber < 0);
    const square = document.querySelectorAll('.grid-item');
    for (let i = 0; i < square.length; i++){
        container.removeChild(square[i]);
    }
    createGrid(squareNumber);
    
})


