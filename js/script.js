const playElement = document.querySelector('button');
const gridElement = document.getElementById('grid');
const difficultySelectEl = document.getElementById('difficulty');
let bombNumber = [];
let maxScore = 0;
let clicks = 0;



playElement.addEventListener('click', function(){
    
    clicks = 0;
    document.getElementById('points').innerHTML = clicks;
    resetGame(gridElement);
    let cells;
    let className;
    switch (difficultySelectEl.value){
        case '0':
            cells = 100;
            className = 'easy';
            break;
        case '1':
            cells = 81;
            className = 'medium';
            break;
        case '2':
            cells = 49;
            className = 'hard';
            break;
        default:
            cells = 100;
            className = 'easy'; 
    }
    
    bombNumber = bombsGenerator(cells);
    console.log(bombNumber);
    maxScore = cells - bombNumber.length;
    
    gridGenerator(gridElement, cells, className);
    
})


// Functions
function resetGame(element){
    // let reset;
    element.innerHTML = '';
    // return reset
}


function clickME(element) {
    element.disabled = true;
    clicks += 1;
    document.getElementById('points').innerHTML = clicks;
}

function bombsGenerator(maxRange){
    let bombs = [];
    while(bombs.length < 16) {
        const randomBombNumber = Math.floor(Math.random() * maxRange) + 1;
        if(!bombs.includes(randomBombNumber)) {
            bombs.push(randomBombNumber);
        }
    }
    return bombs
}

function disableAll() {
    let allCells = document.getElementsByClassName('square');
    for(let i = 0; i < allCells.length; i++) {
        allCells[i].disabled = true;
    }
}

function gridGenerator(gridElement, numberOfCells, classToAdd){
    gridElement.classList.add('border');

    for(let i = 0; i < numberOfCells; i++){
        let squareElement = document.createElement('button');
        squareElement.classList.add('square', classToAdd);
        squareElement.classList.add('border');
        squareElement.classList.add('centered');
        squareElement.append(i +1);
        
        squareElement.addEventListener('click', function(){
            
            
            if (bombNumber.includes(i+1)){
                squareElement.classList.add('bomb');
                // let allBombs = document.getElementsByClassName('bomb');
                let allCells = document.getElementsByClassName('square');
                // allCells[5].addClass('bomb');

                for(let i = 0; i < bombNumber.length; i++) {
                    let numeroCella = bombNumber[i]; // indica il numero della bomba - es.5
                    allCells[numeroCella - 1].classList.add('bomb');
                }
                disableAll();
            } else {
                squareElement.classList.add('active');
                clickME(squareElement);
                if(maxScore === clicks) {
                    disableAll();
                }
            }
            console.log(i +1);
        });

        gridElement.appendChild(squareElement);
    }
}
