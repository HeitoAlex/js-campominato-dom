const playElement = document.querySelector('button');
const gridElement = document.getElementById('grid');
let clicks = 0;

playElement.addEventListener('click', function(){
    resetGame(gridElement);
    bombsGenerator();
    gridElement.classList.add('border');

    for(let i = 0; i < 100; i++){
        let squareElement = document.createElement('button');
        squareElement.classList.add('square');
        squareElement.classList.add('border');
        squareElement.classList.add('centered');
        squareElement.append(i +1);
        
        squareElement.addEventListener('click', function(){
            clickME(squareElement);
            
            if {
                squareElement.classList.add('bomb');
            } else {
                squareElement.classList.add('active');
            }
            console.log(i +1);
        });

        gridElement.appendChild(squareElement);
    }

})


// Functions
function resetGame(element){
    let reset;
    element.innerHTML = ''
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