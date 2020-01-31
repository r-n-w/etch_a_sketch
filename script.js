console.log('hey')
const bod = document.querySelector('body');
const container = document.createElement('div');
container.classList.add('container');
const length = 8;

createGrid(length);

function createGrid(length) {

    
    for (let i = 0; i < length; i++) {
        
        const myRow = document.createElement('div');
        myRow.classList.add('row');
        
        for (let k = 0; k < length; k++) {
            const myDiv = document.createElement('div');
            myDiv.classList.add('empty-box');
            myRow.appendChild(myDiv);
        }
        
        container.appendChild(myRow);
    }
    bod.appendChild(container);
}
