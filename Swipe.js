let lastX = null;
let lastY = null;
let lastTime = null;

document.addEventListener("touchmove", (e) => {
  const touch = e.touches[0];

  const currentX = touch.clientX;
  const currentY = touch.clientY;
  const currentTime = performance.now();

  if (lastX !== null && lastTime !== null) {
    const dx = currentX - lastX;
    const dy = currentY - lastY;
    const dt = (currentTime - lastTime) / 1000;

    if (dt > 0) {
      const velocityX = (dx / dt) * 2;
      const velocityY = (dy / dt) * 2;

      console.log("Velocity X x2:", velocityX, "px/s");
      console.log("Velocity Y x2:", velocityY, "px/s");
    }
  }

  lastX = currentX;
  lastY = currentY;
  lastTime = currentTime;
});

document.addEventListener("touchend", () => {
  lastX = null;
  lastY = null;
  lastTime = null;
});