const container = document.querySelector("#container");

function createGrid(rows, columns) {
    for (let i = 1; i <= rows * columns; i++) {
        const gridItem = document.createElement("div");
        gridItem.classList.add("grid-item");
        container.appendChild(gridItem);
    }
}

function resizeGrid() {
    const newSize = parseInt(prompt("Enter new size: "));
    if(!isNaN(newSize) && newSize > 0) {
        createGrid(newSize, newSize);
    } else if(newSize > 100) {
        alert('Sorry max length is 100');
    } else {
        alert('Please enter a number');
    }
}

createGrid(16, 16);