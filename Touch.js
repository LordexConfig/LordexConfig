let startX = null;
let startY = null;

const threshold = 5;

document.addEventListener("touchstart", (e) => {
  const touch = e.touches[0];
  startX = touch.clientX;
  startY = touch.clientY;
});

document.addEventListener("touchmove", (e) => {
  if (startX === null) return;

  const touch = e.touches[0];
  const dx = touch.clientX - startX;
  const dy = touch.clientY - startY;

  const distance = Math.sqrt(dx * dx + dy * dy);

  if (distance > threshold) {
    console.log("Swipe detected (high sensitivity)");
  } else {
    console.log("Ignoring small movement");
  }
});

document.addEventListener("touchend", () => {
  startX = null;
  startY = null;
});