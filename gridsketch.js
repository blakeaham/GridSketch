const bigGrid = document.querySelector(".bigContainer");

function makeGrid(num) {

    for (i=0; i<num; i++){
        let newDiv = document.createElement("div");
        newDiv.classList.add("sketchGridDiv");
        bigGrid.appendChild(newDiv);
    }
}

makeGrid(5);