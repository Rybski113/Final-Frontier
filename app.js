document.addEventListener('DOMContentLoaded', ()=> {
   
const grid = document.getElementById('grid');
const resultDisplay = document.getElementById('result');
const levelDisplay = document.getElementById('level')
let level = 0;
let results = 0;
let currentShooterIndex = 202;
let width = 15;
let goingRight = true;
let invadersId;
let invadersMove;
let direction = 1;
let aliensRemoved = [];

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










function moveShooter(e) {
    squares[currentShooterIndex].classList.remove('shooter')

    switch(e.key) {
        case 'ArrowLeft':
            if(currentShooterIndex % width  !== 0) 
            currentShooterIndex -=1
            break
        case 'ArrowRight':
            if(currentShooterIndex % width < width -1)
            currentShooterIndex +=1
            break   
    }
    squares[currentShooterIndex].classList.add('shooter')
}
document.addEventListener('keyup', moveShooter)



function shoot(e) {
    let laserId;
    let currentLaserPosition = currentShooterIndex;
    

     function moveLaser() {
            squares[currentLaserPosition].classList.remove('laser')
            currentLaserPosition -= width;
            squares[currentLaserPosition].classList.add('laser')
           

        if (squares[currentLaserPosition].classList.contains('invader')) {
            squares[currentLaserPosition].classList.remove('laser')
            squares[currentLaserPosition].classList.remove('invader')
            

           
            clearInterval(laserId)

            const alienRemoved = alienInvaders.indexOf(currentLaserPosition)
            aliensRemoved.push(alienRemoved)
            results++
            resultDisplay.innerHTML = results
         }
         
     }

     switch(e.key) {
         case ' ':
            laserId = setInterval(moveLaser, 100)
     }
}

document.addEventListener('keydown', shoot)

})



