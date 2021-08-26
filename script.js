let gridContainer = document.querySelector('.gridContainer');

let containerColor = 'beige';

let numCol = 8;
let numRow = numCol;
let numBox = numCol * numRow;
let color = 'black';
let tool = 'colorTool';

let sliderValue;

//Pick color
colorPicker = document.querySelector('#colorPicker');
colorPicker.addEventListener('change', (event) => {color = event.target.value;})

//Pick dimension
slider = document.querySelector('#slider');
slider.addEventListener('change', (event) => {
    numCol = numRow = event.target.value;
    setUpGrid(numCol, numRow);
})

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
        gridContainer.appendChild(gridBox);
    }

    //Adds functionality to the boxes.
    gridBox = document.querySelectorAll('.gridBox');
    gridBox.forEach(box => {
        box.addEventListener('mouseover', (event) => mouseOverEvent(event, color, tool));
        // box.addEventListener('mouseout', (event) => mouseOutEvent(event));
        // box.addEventListener('mousedown', (event) => mouseDownEvent(event));
    });
}

//Sets up the Grid.
function setUpGrid(numCol, numRow) {
    let numBox = numCol * numRow;
    setGridColRow(numCol, numRow);
    addGridBoxes(numBox);
}

//Box functionality functions.
function mouseOverEvent(event, color, tool) {
    if (tool == 'colorTool') {
        backgroundColorStr = 'background-color: ' + color + ';';
        event.target.setAttribute('style', backgroundColorStr);
    }
    else if (tool == 'eraser') {
        backgroundColorStr = 'background-color: ' + containerColor + ';';
        event.target.setAttribute('style', backgroundColorStr);
    }
    else if (tool == 'rainbow') {
        randomColor = 'rgb(' + Math.floor(Math.random() * 255).toString() + ',' + Math.floor(Math.random() * 255).toString() + ',' + Math.floor(Math.random() * 255).toString() +')';
        backgroundColorStr = 'background-color: ' + randomColor + ';';
        event.target.setAttribute('style', backgroundColorStr);
    }
    
}

function reset() {
    backgroundColorStr = 'background-color: ' + containerColor + ';';
    gridBox.forEach((item), () => {
        item.setAttribute('style', backgroundColorStr);
    })
}


setUpGrid(numCol, numRow);



