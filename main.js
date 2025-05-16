
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

let x = canvas.width / 2;
let bullets = [];

function drawPlayer() {
  ctx.fillStyle = "#00aaff";
  ctx.fillRect(x - 20, canvas.height - 40, 40, 30);
}

function drawBullets() {
  ctx.fillStyle = "red";
  bullets.forEach((b) => {
    ctx.fillRect(b.x - 2, b.y, 4, 10);
  });
}

function updateBullets() {
  bullets = bullets.map((b) => ({ x: b.x, y: b.y - 5 })).filter((b) => b.y > 0);
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawPlayer();
  drawBullets();
  updateBullets();
  requestAnimationFrame(draw);
}

function shoot() {
  bullets.push({ x });
}

document.addEventListener("keydown", (e) => {
  if (e.code === "Space") shoot();
});

canvas.addEventListener("click", () => shoot());

draw();
