// 💖 Floating hearts on click
document.addEventListener("click", function (e) {
  const heart = document.createElement("div");
  heart.innerHTML = "💖";
  heart.classList.add("heart");

  heart.style.left = e.clientX + "px";
  heart.style.top = e.clientY + "px";

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 1000);
});


// ✨ Cursor glow effect
const glow = document.createElement("div");
glow.classList.add("cursor-glow");
document.body.appendChild(glow);

document.addEventListener("mousemove", (e) => {
  glow.style.left = e.clientX + "px";
  glow.style.top = e.clientY + "px";
});