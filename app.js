let color = 'black';
let click = true;
const mode = document.querySelector('.mode');
let backGroundImage = 'linear-gradient(to left, violet, indigo, blue, green, yellow, orange, red);'


function populateBoard(size) {
    let board = document.querySelector('.board');
    let squares = board.querySelectorAll('div');
    squares.forEach((div) => div.remove());
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let amount = size * size;

    for (let i = 0; i < amount; i++) {
        let square = document.createElement('div');
        square.addEventListener('mouseover', colorSquare)
        square.style.backgroundColor = 'white';
        square.style.border = '1px solid black';
        board.insertAdjacentElement('beforeend', square);
    }

}

function colorSquare() {
    if (click) {
        if (color === 'random') {
            this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`
        } else {
            this.style.backgroundColor = color;
        }
    }
}

populateBoard(16);


function changeSize(input) {
    if (input >= 2 && input <= 100) {
        document.querySelector('.error').style.display = 'none';
        populateBoard(input);
    } else {
        document.querySelector('.error').style.display = 'flex';
        console.log("Nope not right!");
    }
}

const slider = document.getElementById('slider');
const output = document.getElementById('value');

output.innerHTML = slider.value;

slider.oninput = function () {
    output.innerHTML = this.value;
}


function changeColor(choice) {
    color = choice;
}

function resetButton() {
    let board = document.querySelector('.board');
    let squares = board.querySelectorAll('div');
    squares.forEach((div) => div.style.backgroundColor = 'white');
}

document.querySelector('body').addEventListener('click', (e) => {
    if (e.target.tagName != 'BUTTON') {
        click = !click;
        if (click) {
            mode.textContent = 'Mode: Coloring';
            mode.style.backgroundColor = backGroundImage

        } else {
            mode.textContent = 'Mode: Not Coloring';
        }
    }
})