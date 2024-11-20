const character = document.getElementById('character');
const container = document.querySelector('.container');
const scoreElement = document.getElementById('score');
const backgroundMusic = document.getElementById('background-music');

// Initial variables
let positionY = 168;
let gravity = 0.4; // Gravity effect (lower for smoother fall)
let jumpHeight = 10; // How much the character moves up per jump
let velocity = 0; // For smooth jump and fall
let isJumping = false;
let isGravityActive = false; // Gravity starts only after first jump
let score = 0;
let obstacleSpeed = 4;
let spawnInterval = 2000;

// Play background music
backgroundMusic.play();

// Toggle mute with 'M'
document.addEventListener('keydown', (event) => {
    if (event.key === 'm' || event.key === 'M') {
        backgroundMusic.muted = !backgroundMusic.muted;
    }
});

// Apply gravity and update position (smoother fall)
function applyGravity() {
    if (isGravityActive) {
        velocity -= gravity; // Simulate gradual fall with velocity
        positionY += velocity; // Apply velocity to positionY for smooth fall

        if (positionY < 0) {
            positionY = 0; // Prevent falling below ground
            velocity = 0;
            gameOver();
        }
        character.style.bottom = `${positionY}px`;
    }
}

// Handle jump logic (smoother jump)
document.addEventListener('keydown', (event) => {
    if ((event.key === 'w' || event.key === 'W') && !isJumping) {
        isJumping = true;
        velocity = jumpHeight; // Set initial velocity for the jump
        if (!isGravityActive) {
            isGravityActive = true; // Activate gravity after first jump
        }
    }
});

// Handle key release to stop the jump
document.addEventListener('keyup', (event) => {
    if (event.key === 'w' || event.key === 'W') {
        isJumping = false; // Stop jump when key is released
    }
});

// Game over function
function gameOver() {
    alert('Game Over!');
    location.reload();
}

// Continuously apply gravity
setInterval(applyGravity, 20); // Update every 20ms

// Create obstacles
function createObstacle() {
    const obstacle = document.createElement('div');
    obstacle.classList.add('obstacle');
    const obstacleImage = document.createElement('img');
    obstacleImage.src = 'obs.png';
    obstacle.appendChild(obstacleImage);
    container.appendChild(obstacle);
    obstacle.style.animation = `obstacleMove ${obstacleSpeed}s linear infinite`;

    let passed = false; // Flag to check if the obstacle is passed

    const collisionInterval = setInterval(() => {
        const obstacleRect = obstacle.getBoundingClientRect();
        const characterRect = character.getBoundingClientRect();
        if (
            characterRect.left < obstacleRect.right &&
            characterRect.right > obstacleRect.left &&
            characterRect.bottom > obstacleRect.top
        ) {
            clearInterval(collisionInterval);
            gameOver();
        }
    }, 100);

    const scoreInterval = setInterval(() => {
        const obstacleRect = obstacle.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();

        // Check if the obstacle has passed the character (obstacle is beyond character's left)
        if (obstacleRect.right < character.getBoundingClientRect().left && !passed) {
            passed = true; // Mark as passed
            score += 100; // Increment score when passed
            scoreElement.textContent = `Score: ${score}`; // Update score display
        }

        // Remove obstacle when it moves off the screen
        if (obstacleRect.right < containerRect.left) {
            obstacle.remove();
            clearInterval(scoreInterval);
            clearInterval(collisionInterval);
        }
    }, 100);

    obstacle.addEventListener('animationend', () => {
        obstacle.remove();
        clearInterval(collisionInterval);
        clearInterval(scoreInterval);
    });
}

// Create power-ups
function createPowerUp() {
    const powerUp = document.createElement('div');
    powerUp.classList.add('power-up');
    powerUp.style.left = `${Math.random() * container.offsetWidth}px`;
    container.appendChild(powerUp);

    const powerUpInterval = setInterval(() => {
        const powerUpRect = powerUp.getBoundingClientRect();
        const characterRect = character.getBoundingClientRect();
        if (
            characterRect.left < powerUpRect.right &&
            characterRect.right > powerUpRect.left &&
            characterRect.bottom > powerUpRect.top
        ) {
            score += 100;
            powerUp.remove();
            clearInterval(powerUpInterval);
        }
    }, 100);

    powerUp.addEventListener('animationend', () => {
        powerUp.remove();
        clearInterval(powerUpInterval);
    });
}

// Increment score (for background score)
setInterval(() => {
    score += 10;
    scoreElement.textContent = `Score: ${score}`;
}, 1000);

// Increase difficulty
setInterval(() => {
    if (obstacleSpeed > 1) obstacleSpeed -= 0.1;
    if (spawnInterval > 500) spawnInterval -= 100;
}, 10000);

// Spawn obstacles and power-ups
setInterval(createObstacle, spawnInterval);
setInterval(createPowerUp, 10000);
