console.log('hey')
const body = document.querySelector('body');
const container = document.createElement('div');
container.classList.add('container');
const length = 8;
const button = document.querySelector('button');


button.addEventListener('click', (e) => {
    alert('How many bricks wide should the square be?');
});



createGrid(length);

function createGrid(length) {

    
    for (let i = 0; i < length; i++) {
        
        const myRow = document.createElement('div');
        myRow.classList.add('row');
        
        for (let k = 0; k < length; k++) {
            const myDiv = document.createElement('div');
            myDiv.classList.add('box', 'empty-box');
            myRow.appendChild(myDiv);
        }
        
        container.appendChild(myRow);
    }
    body.appendChild(container);
}

const blocks = document.querySelectorAll('.box');
blocks.forEach((block) => {
    block.addEventListener('mouseover', (e) => {
        block.classList.toggle('filled-box');
    });
});

