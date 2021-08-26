let gridContainer = document.querySelector('.gridContainer');

let numCol = 8;
let numRow = 8;
let numBox = numCol * numRow;

function setGridColRow(numCol, numRow) {
    let setStyleStr = 'grid-template-columns: repeat(' + numCol.toString() + ', 1fr); grid-template-rows: repeat(' + numRow.toString() + ', 1fr)';
    gridContainer.setAttribute('style', setStyleStr);
}

function addGridBoxes(numBox) {
    for (let i=0; i<numBox; i+=1) {
        let gridBox = document.createElement('div');
        gridBox.setAttribute('class', 'gridBox');
        gridBox.textContent = i
        gridContainer.appendChild(gridBox);
    }
}

function setUpGrid(numCol, numRow) {
    let numBox = numCol * numRow;
    setGridColRow(numCol, numRow);
    addGridBoxes(numBox);
}

setUpGrid(numCol, numRow);



