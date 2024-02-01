document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('container');
    const resetButton = document.getElementById('resetButton');

    function createGrid(size) {
        container.innerHTML = '';

        for (let i = 0; i < size * size; i++) {
            const square = document.createElement('div');
            square.className = 'square';
            container.appendChild(square);
        }

        const squares = document.querySelectorAll('.square');
        squares.forEach((square) => {
            square.addEventListener('mouseenter', changeColor);
        });
    }

    function changeColor(event) {
        const square = event.target;

        // Uncomment one of the following methods to change the color

        // Method 1: Add a new class
        // square.classList.add('hovered');

        // Method 2: Change the background color using JavaScript
        // square.style.backgroundColor = getRandomColor();

        // Bonus: Progressive darkening effect
        const currentColor = square.style.backgroundColor || 'rgb(255, 255, 255)';
        const newColor = darkenColor(currentColor);
        square.style.backgroundColor = newColor;
    }

    function getRandomColor() {
        const randomColor = () => Math.floor(Math.random() * 256);
        return `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;
    }

    function darkenColor(color) {
        const rgb = color.match(/\d+/g);
        const darkenedRgb = rgb.map((value) => Math.floor(value * 0.9));
        return `rgb(${darkenedRgb.join(', ')})`;
    }

    function resetGrid() {
        const size = prompt('Enter the number of squares per side (max: 100):');
        if (size && !isNaN(size) && size > 0 && size <= 100) {
            createGrid(size);
        } else {
            alert('Please enter a valid number between 1 and 100.');
        }
    }

    resetButton.addEventListener('click', resetGrid);

    // Initial grid creation
    createGrid(16);
});
