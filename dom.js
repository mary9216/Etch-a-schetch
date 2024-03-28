// Set important constants and variables

const container = document.getElementById("container");
let rows = document.getElementsByClassName("gridRow");
let cells = document.getElementsByClassName("cell");

// Creates a default grid sized 16x16

defaultGrid();
function defaultGrid() {
    makeRows(16);
    makeColumns(16);
};

// Takes (rows, columns) input and makes a grid
makeRows();
function makeRows(rowNum) {

    // Creates rows
    for(r = 0;  r < rowNum; r++){
        let row = document.createElement("div");
        container.appendChild(row).className = "gridRow";
    };
};


// Creates columns
function makeColumns(cellNum){
    for (i = 0; i < rows.length; i++){
        for (j = 0; j < cellNum; j++){
            let newCell = document.createElement("div");
            rows[j].appendChild(newCell).className = "cell";
        };
    };
};

// Change color on mouseover & mouseout


let color = [, "#3C9EE7", "#E7993C",
            "#E73C99", "#3CE746", "#E7993C", "#FF0000"];
 
document.getElementsByClassName("cell").addEventListener(
    "mouseover", function () {
 
        document.getElementsByClassName("cell").style.background
            = color[(Math.floor(Math.random() * color.length))];
    });

