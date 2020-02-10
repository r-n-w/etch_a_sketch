console.log('hey')
const body = document.querySelector('body');
const container = document.createElement('div');
container.classList.add('container');
body.appendChild(container);

const initialSize = 8;
const button = document.querySelector('button');


createGrid(initialSize);



button.addEventListener('click', (e) => {
    let requestedSize = prompt('How many bricks wide should the square be? \n (Min = 1, Max = 100)');
    let size = Math.floor(requestedSize)
    console.log(size);
    if(size >=1 && size <=100) {
        clearGrid();
        createGrid(size);
    } else {
        return alert('Sorry that is not okay.');
    }

});

function clearGrid() {
    const rows = document.querySelectorAll('.block');
    rows.forEach((row) => {
        container.removeChild(row);
    })
}


function createGrid(rowOfBlocks) {
    container.style.cssText = `grid-template-columns: repeat(${rowOfBlocks}, 1fr);
    grid-template-rows: repeat(${rowOfBlocks}, 1fr)`;
    
    for (let i = 0; i < rowOfBlocks ** 2; i++) {
        const myBlock = document.createElement('div');
        myBlock.classList.add('block');
        container.appendChild(myBlock);
    }

    const blocks = document.querySelectorAll('.block');
    blocks.forEach((block) => {
        block.addEventListener('mouseover', (e) => {
            block.classList.add('filled-block');
        });
    });

}


