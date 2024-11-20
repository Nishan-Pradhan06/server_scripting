// Select the character element
const character = document.getElementById('character');

// Initial position of the character
let positionX = 50; // Horizontal position
let positionY = 168; // Vertical (bottom) position

// Movement step size
const step = 10;

// Flags to check if jumping or moving
let isJumping = false;
let moveLeft = false;
let moveRight = false;

// Container bounds
const containerWidth = window.innerWidth;
const containerHeight = window.innerHeight;

// Keydown Event Listener
document.addEventListener('keydown', (event) => {
    if (event.key === 'a' || event.key === 'A') {
        moveLeft = true;  // Set moveLeft flag to true for A key
    }
    if (event.key === 'd' || event.key === 'D') {
        moveRight = true; // Set moveRight flag to true for D key
    }
    if (event.key === 'w' || event.key ==='W') { // Jump with spacebar
        if (!isJumping) {
            isJumping = true;
            positionY += 100; // Jump height
        }
    }
    updatePosition();
});

// Keyup Event Listener for releasing keys
document.addEventListener('keyup', (event) => {
    if (event.key === 'a' || event.key === 'A') {
        moveLeft = false; // Stop moving left when A is released
    }
    if (event.key === 'd' || event.key === 'D') {
        moveRight = false; // Stop moving right when D is released
    }
    if (event.key === 'w' || event.key === 'W') { // Reset jump position when spacebar is released
        isJumping = false;
        positionY = 168; // Return to ground level
    }
    updatePosition();
});

// Update the character's position based on key press flags
function updatePosition() {
    // Move left or right
    if (moveLeft) {
        positionX = Math.max(0, positionX - step); // Prevent moving off screen
    }
    if (moveRight) {
        positionX = Math.min(containerWidth - 50, positionX + step); // Prevent moving off screen
    }

    // Update the character's position
    character.style.left = `${positionX}px`;
    character.style.bottom = `${positionY}px`;
}
