const playElement = document.querySelector('button');

playElement.addEventListener('click', function(){
    resetGame()
    gridCreate()
    bombsGenerator()
})


// Functions
function resetGame(){
    const reset = document.getElementById('grid');
    reset.innerHTML = ''
    return reset
}

function gridCreate(){
    const gridElement = document.getElementById('grid');
    gridElement.classList.add('border');

    for(let i = 0; i < 100; i++){
        let squareElement = document.createElement('article');
        squareElement.classList.add('square');
        squareElement.classList.add('border');
        squareElement.classList.add('centered');
        squareElement.append(i +1);

        squareElement.addEventListener('click', function(){
            squareElement.classList.add('active');
            console.log(i +1);
        });

        gridElement.appendChild(squareElement);
    }
}

function bombsGenerator(){
    let bombs = [];
    while(bombs.length < 16){
        const randomBombNumber = Math.floor(Math.random() * 100) + 1;
        bombs.push(randomBombNumber);
    }
}