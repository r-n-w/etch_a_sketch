console.log('hey')
const body = document.querySelector('body');
const container = document.createElement('div');
container.classList.add('container');
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
    const rows = document.querySelectorAll('.row');
    rows.forEach((row) => {
        container.removeChild(row);
    })
}


function createGrid(length) {

    var blockPixelWidth = Math.floor(500/length);
    
    for (let i = 0; i < length; i++) {
        
        const myRow = document.createElement('div');
        myRow.style.cssText = `height: ${blockPixelWidth}px`;
        myRow.classList.add('row');
        
        for (let k = 0; k < length; k++) {
            const myDiv = document.createElement('div');
            myDiv.style.cssText = `width: ${blockPixelWidth}px; height: ${blockPixelWidth}px`;
            myDiv.classList.add('box', 'empty-box');
            myRow.appendChild(myDiv);
        }
        
        container.appendChild(myRow);
    }
    body.appendChild(container);

    const blocks = document.querySelectorAll('.box');
    blocks.forEach((block) => {
        block.addEventListener('mouseover', (e) => {
            block.classList.toggle('filled-box');
        });
    });

}


