const bigGrid = document.querySelector(".bigContainer");
const canvasheight = bigGrid.offsetHeight - 20;
const clearBtn = document.querySelector("#clearBtn");
let power = false;
clearBtn.addEventListener('click', clearGrid);

function makeGrid(num) {
    let gridPixels = bigGrid.querySelectorAll('div');
    gridPixels.forEach(gridPixel => gridPixel.remove())
    for (i=0; i<num*num; i++){
        
        bigGrid.style.gridTemplateColumns = `repeat(${num}, ${Math.floor(canvasheight/num)}px)`;
        bigGrid.style.gridTemplateRows = `repeat(${num}, ${Math.floor(canvasheight/num)}px)`;
        let newDiv = document.createElement("div");
        newDiv.classList.add("sketchGridDiv");
        bigGrid.appendChild(newDiv);
    }
    gridPixels = bigGrid.querySelectorAll('div');
    gridPixels.forEach(gridPixel => gridPixel.addEventListener('mouseover', colorGrid))
}

function clearGrid() {
    console.log('clearing');
    let gridPixels  = bigGrid.querySelectorAll('div');
    gridPixels.forEach(gp => gp.style.backgroundColor = "white");
}

function colorGrid(e) {
    // console.log(e.target)
    if(power) {
    e.target.style.backgroundColor = "red";
    }
}

window.onclick = function(event) {
    power = !power;
}

// makeGrid(5);

const modal = document.querySelector(".modal");


// window.onclick = function(event) {
//     if (event.target == modal) {
//       modal.style.display = "none";
//     } else {
//       modal.style.display = "block";
//     }
//   }