function navigateTo(sectionId) {
  document.querySelectorAll(".magazine-page").forEach((sec) => sec.classList.remove("active"));
  document.getElementById(sectionId).classList.add("active");
}

function showLoveMessage() {
  document.getElementById("love-message").classList.remove("hidden");
}

function moveButton(button) {
  const x = Math.random() * window.innerWidth * 0.8;
  const y = Math.random() * window.innerHeight * 0.6;
  button.style.position = 'absolute';
  button.style.left = `${x}px`;
  button.style.top = `${y}px`;
}

window.onload = () => {
  navigateTo('cover');
};
