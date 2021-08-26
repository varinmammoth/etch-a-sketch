let gridContainer = document.querySelector('.gridContainer');

let numCol = 8;
let numRow = 8;
let numBox = numCol * numRow;

//Add grid-template-columns and grid-template-rows style to the gridContainer.
function setGridColRow(numCol, numRow) {
    let setStyleStr = 'grid-template-columns: repeat(' + numCol.toString() + ', 1fr); grid-template-rows: repeat(' + numRow.toString() + ', 1fr)';
    gridContainer.setAttribute('style', setStyleStr);
}

//Add boxes to the gridContainer.
function addGridBoxes(numBox) {
    for (let i=0; i<numBox; i+=1) {
        //Adds the grid to the gridContainer.
        let gridBox = document.createElement('div');
        gridBox.setAttribute('class', 'gridBox');
        gridBox.textContent = i
        gridContainer.appendChild(gridBox);
    }

    //Adds functionality to the boxes.
    gridBox = document.querySelectorAll('.gridBox');
    gridBox.forEach(box => {
        box.addEventListener('mouseover', (event) => mouseOverEvent(event));
        box.addEventListener('mouseout', (event) => mouseOutEvent(event));
        box.addEventListener('mousedown', (event) => mouseDownEvent(event));
    });
}

//Sets up the Grid.
function setUpGrid(numCol, numRow) {
    let numBox = numCol * numRow;
    setGridColRow(numCol, numRow);
    addGridBoxes(numBox);
}

setUpGrid(numCol, numRow);

//Box functionality functions.
function mouseOverEvent(event) {
    event.target.setAttribute('style', 'background-color: grey;');
}

function mouseOutEvent(event) {
    setTimeout(() => {
        event.target.setAttribute('style', 'background-color: beige;');
    }, 500);
}

function mouseDownEvent(event) {
    event.target.setAttribute('style', 'background-color: black;');
}

