const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");
const popup = document.getElementById("popup");
const card = document.getElementById("card");
const success = document.getElementById("success");

const messages = [
  "Oops! Missed me 😜",
  "Too slow 🏃‍♂️",
  "Why fight destiny 😌",
  "oieeee Sallyyyyyyysss💖",
  "ayeeee Kar ki g yesssssssssssss 🏃‍♀️"
];

let msgIndex = 0;
let yesScale = 1;

noBtn.addEventListener("mouseenter", () => {
  // Move NO randomly
  const x = Math.random() * 220;
  const y = Math.random() * 60;
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";

  // Show popup message
  popup.textContent = messages[msgIndex % messages.length];
  popup.classList.remove("show");
  void popup.offsetWidth; // restart animation
  popup.classList.add("show");
  msgIndex++;

  // Make YES bigger
  yesScale += 0.15;
  yesBtn.style.transform = `scale(${yesScale})`;
});

yesBtn.addEventListener("click", () => {
  card.style.display = "none";
  success.classList.remove("hidden");
});
