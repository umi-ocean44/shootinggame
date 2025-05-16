const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let bullets = [];
let player = {
    x: canvas.width / 2,
    y: canvas.height - 50,
    size: 20,
    color: "aqua"
};

function drawPlayer() {
    ctx.fillStyle = player.color;
    ctx.beginPath();
    ctx.arc(player.x, player.y, player.size, 0, Math.PI * 2);
    ctx.fill();
}

function drawBullets() {
    ctx.fillStyle = "yellow";
    bullets.forEach((b) => {
        ctx.beginPath();
        ctx.arc(b.x, b.y, 5, 0, Math.PI * 2);
        ctx.fill();
    });
}

function updateBullets() {
    bullets.forEach((b) => b.y -= 5);
    bullets = bullets.filter((b) => b.y > 0);
}

function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawPlayer();
    drawBullets();
    updateBullets();
    requestAnimationFrame(gameLoop);
}

window.addEventListener("keydown", (e) => {
    if (e.code === "Space") {
        bullets.push({ x: player.x, y: player.y });
    }
});

window.addEventListener("touchstart", () => {
    bullets.push({ x: player.x, y: player.y });
});

gameLoop();
