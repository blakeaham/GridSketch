const bigGrid = document.querySelector(".bigContainer");
const clearBtn = document.querySelector("#clearBtn");
const storeBtn = document.querySelector("#storeBtn");
const items = JSON.parse(localStorage.getItem('items')) || [];
let canvasheight = window.innerHeight - 20;
let power = false;
let num = 10;
clearBtn.addEventListener('click', clearGrid);
storeBtn.addEventListener('click', remember);

function makeGrid(num) {
    // Clears Previous grid
    let gridPixels = bigGrid.querySelectorAll('div') ;
    gridPixels.forEach(gridPixel => gridPixel.remove())
    //Creates new grid of given size
    for (i=0; i<num*num; i++){
        bigGrid.style.width = `${Math.floor(canvasheight/num)*num}px`;
        bigGrid.style.gridTemplateColumns = `repeat(${num}, ${Math.floor(canvasheight/num)}px)`;
        bigGrid.style.gridTemplateRows = `repeat(${num}, ${Math.floor(canvasheight/num)}px)`;
        let newDiv = document.createElement("div");
        newDiv.classList.add("sketchGridDiv");
        bigGrid.appendChild(newDiv);
    }
    //activates each pixel-div for color
    gridPixels = bigGrid.querySelectorAll('div');
    gridPixels.forEach(gridPixel => gridPixel.addEventListener('mouseover', colorGrid))
    console.log('made new grid of ' + num + ' height and width')
}

function clearGrid() {
    console.log('clearing');
    let gridPixels  = bigGrid.querySelectorAll('div');
    gridPixels.forEach(gp => gp.style.backgroundColor = "white");
    power = false;
    modal.style.display = "none";
}

function colorGrid(e) {
    // console.log(e.target)
    if(power) {
    e.target.style.backgroundColor = "red";
    }
}
document.onload = alert("Use Space Bar for options and Help");
window.onclick = function(event) {
    if (event.target.classList[0] === "sketchGridDiv"){
    // console.log(event.target.classList)
    power = !power;
    }
}

makeGrid(10);

function reportWindowSize() {
    canvasheight = window.innerHeight - 20;
    bigGrid.style.width = `${Math.floor(canvasheight/num)*num}px`;
    bigGrid.style.gridTemplateColumns = `repeat(${num}, ${Math.floor(canvasheight/num)}px)`;
    bigGrid.style.gridTemplateRows = `repeat(${num}, ${Math.floor(canvasheight/num)}px)`;
    console.log('window resized')
}

window.addEventListener('resize', reportWindowSize);


const modal = document.querySelector(".modal");
window.addEventListener("keydown", event => {
    if (event.keyCode === 32 && modal.style.display !== "block") {
        modal.style.display = "block"
        console.log('popping UP!');
    } else if (event.keyCode === 32 && modal.style.display === "block")  {
        modal.style.display = "none";
        console.log('hiding modal');
    }
})

function myFunction() {
    var x = document.getElementById("usernumber").value;
    num = x;
    makeGrid(num);
    power = false;
    modal.style.display = "none";
  }

function myFunction2() {
    var y = document.getElementById("storenumber").value;
    recall(y);
    power = false;
    modal.style.display = "none";
}

// window.onclick = function(event) {
//     if (event.target == modal) {
//       modal.style.display = "none";
//     } else {
//       modal.style.display = "block";
//     }
//   }
let savedGrids = [];

function remember() {
    let tempMem = [];
    let gp = bigGrid.querySelectorAll('div');
    gp.forEach( i => {
        tempMem.push(i.style.backgroundColor)
    })
    items.push(tempMem);
    localStorage.setItem('items', JSON.stringify(items));
}

function recall(n) {
    let tempMem = items[n];
    let dim = Math.sqrt(tempMem.length);
    let gridSpace = 0
    makeGrid(dim);
    let gp = bigGrid.querySelectorAll('div');

    gp.forEach(i => {
        i.style.backgroundColor = tempMem[gridSpace];
        gridSpace ++;
    })
}
