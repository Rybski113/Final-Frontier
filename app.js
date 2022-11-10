const grid = document.getElementById('grid');
let currentShooterIndex = 202;
let width = 40;

for (let i = 0; i < 225; i++) {
    const square = document.createElement('div');
    grid.appendChild(square);
}

const squares = Array.from(document.querySelectorAll('#grid div'));

squares[currentShooterIndex].classList.add('shooter')

const alienInvaders = [
    0,1,2,3,4,5,6,7,8,9,
    15,16,17,18,19,20,21,22,23,24,
    30,31,32,33,34,35,36,37,38,39
]

function draw() {
    for (let i = 0; i < alienInvaders.length; i++) {
        squares[alienInvaders[i]].classList.add('invader')
    }
}
draw()

function moveShooter(e) {
    squares[currentShooterIndex].classList.remove('shooter')

    switch(e.key) {
        case 'ArrowLeft':
            
            currentShooterIndex -=1
            break
        case 'ArrowRight':
            
            currentShooterIndex +=1
            break   
    }
    squares[currentShooterIndex].classList.add('shooter')
}
document.addEventListener('keyup', moveShooter)