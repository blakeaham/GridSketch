const bigGrid = document.querySelector(".bigContainer");
let canvasheight = window.innerHeight - 20;
const clearBtn = document.querySelector("#clearBtn");
let power = false;
clearBtn.addEventListener('click', clearGrid);
let num = 6;

function makeGrid(num) {
    // Clears Previous grid
    let gridPixels = bigGrid.querySelectorAll('div');
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
    console.log(event.target.classList)
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

// window.onclick = function(event) {
//     if (event.target == modal) {
//       modal.style.display = "none";
//     } else {
//       modal.style.display = "block";
//     }
//   }