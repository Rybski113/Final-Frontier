const grid = document.getElementById('grid');
let currentShooterIndex = 202;


for (let i = 0; i < 225; i++) {
    const square = document.createElement('div');
    grid.appendChild(square);
}

const squares = Array.from(document.querySelectorAll('#grid div'));

squares[currentShooterIndex].classList.add('shooter')