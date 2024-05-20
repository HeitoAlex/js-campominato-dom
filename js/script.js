const playElement = document.querySelector('button');
const gridElement = document.getElementById('grid');
const difficultySelectEl = document.getElementById('difficulty');
let clicks = 0;

playElement.addEventListener('click', function(){
    
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
    bombsGenerator();
    gridGenerator(gridElement, cells, className);
    
})


// Functions
function resetGame(element){
    let reset;
    element.innerHTML = '';
    return reset
}


function clickME(element) {
    element.disabled = true;
    clicks += 1;
    document.getElementById('points').innerHTML = clicks;
}

function bombsGenerator(){
    let bombs = [];
    while(bombs.length < 16){
        const randomBombNumber = Math.floor(Math.random() * 100) + 1;
        bombs.push(randomBombNumber);
    }
    return bombs
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
            clickME(squareElement);
            
            if (bombs){
                squareElement.classList.add('bomb');
            } else {
                squareElement.classList.add('active');
            }
            console.log(i +1);
        });

        gridElement.appendChild(squareElement);
    }
}
