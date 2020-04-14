console.log("hey");
const body = document.querySelector("body");
const container = document.createElement("div");
container.classList.add("container");
body.appendChild(container);

const initialSize = 8;
const reset = document.querySelector("#reset");
const color = document.querySelector("#color");
const gradient = document.querySelector("#gradient");

createGrid(initialSize);

function createGrid(rowOfBlocks, coloring) {
    container.style.cssText = `grid-template-columns: repeat(${rowOfBlocks}, 1fr);
    grid-template-rows: repeat(${rowOfBlocks}, 1fr)`;
    console.log(color);
    for (let i = 0; i < rowOfBlocks ** 2; i++) {
        const myBlock = document.createElement("div");
        myBlock.classList.add("block");
        myBlock.style.filter = 'brightness(100%)';
        console.log(myBlock.style.filter)
        container.appendChild(myBlock);
    }
    const blocks = document.querySelectorAll(".block");
    blocks.forEach((block) => {
        block.addEventListener("mouseover", () => {
        
            switch (coloring) {
                case "color":
                    var randomColor = generateRGB();
                    console.log(randomColor);
                    block.style.cssText = `background-color: ${randomColor};
                    border: ${randomColor}`;
                    break;
                case "grey":
          
                  let grey = block.style.filter.match(/\d+/);
                    console.log(grey);
                    block.style.filter = `brightness(${grey - 10}%)`;    
                    break;
        
                default:
                    block.classList.add("filled-block");
                    break;
            }
        })
    });
}
function clearGrid() {
    const rows = document.querySelectorAll(".block");
    rows.forEach((row) => {
        container.removeChild(row);
    });
}
// This needs work!
reset.addEventListener("click", (e) => {
    let color = "black";
    requestGridSize(color);
});
color.addEventListener("click", (e) => {
    let color = "color";
    requestGridSize(color);
});
gradient.addEventListener("click", (e) => {
    let color = "grey";
    requestGridSize(color);
});

function requestGridSize(color) {
    let requestedSize = prompt(
        "How many bricks wide should the square be? \n (Min = 1, Max = 100)"
    );
    let size = Math.floor(requestedSize);
    console.log(size);
    if (size >= 1 && size <= 100) {
        clearGrid();
        createGrid(size, color);
    } else {
        return alert("Sorry that is not okay.");
    }
}

function generateRGB() {
    var R = Math.floor(Math.random() * 256);
    var G = Math.floor(Math.random() * 256);
    var B = Math.floor(Math.random() * 256);
    return "rgb(" + R + "," + G + "," + B + ")";
}
