const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const loveMessage = document.querySelector(".love-message");

let attempts = 0; // Jumlah percobaan
const maxAttempts = 5; // Batas maksimum percobaan

// Change text and gif when the Yes button is clicked
yesBtn.addEventListener("click", () => {
  question.innerHTML = "Aku tau kamu sayang aku! 😘";
  gif.src =
    "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExZGI1cW5wMWhpaDF5b3pjdTF0OHZrcHJvaGkzOHJteDhmd245OGRnZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Vuw9m5wXviFIQ/giphy.gif";
  loveMessage.style.display = "none"; // Hapus pesan jika Yes ditekan
  attempts = 0; // Reset attempts jika 'Yes' ditekan
  yesBtn.style.display = "none";
  noBtn.style.display = "none";
  const audio = document.getElementById("background-audio");
  audio.play().catch((error) => {
    console.log("Audio tidak bisa diputar:", error);
  });
});

// Make the No button move randomly on hover
noBtn.addEventListener("mouseover", () => {
  attempts++; // Increment attempts every time 'No' is hovered over
  const wrapper = document.querySelector(".wrapper");
  const wrapperRect = wrapper.getBoundingClientRect();
  const noBtnRect = noBtn.getBoundingClientRect();

  // Calculate max positions to ensure the button stays within the wrapper
  const maxX = wrapperRect.width - noBtnRect.width;
  const maxY = wrapperRect.height - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";

  // Looping the messages even after maxAttempts
  if (attempts === 1) {
    loveMessage.textContent = "Ayolah, jawab 'Yes'!";
    loveMessage.style.opacity = "1"; // Show message with first attempt
  } else if (attempts === 3) {
    loveMessage.textContent = "Kamu yakin mau menolak?";
    gif.src =
      "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExZHJ5NTZ0dm5iN3k4dWhwbTZ3MGlmZ21jcTZqdmV2NXRxd2N1d2djZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/OPU6wzx8JrHna/giphy.gif";
  } else if (attempts >= maxAttempts) {
    loveMessage.textContent = "Sudah, jawab 'Yes' saja!";
    gif.src =
      "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExMzVoaTZxZW5lMzg4ZXBveHVuOGlwc2dkemJlZ3JjdGgwbzcwcjFrZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/M9yC8b0x7Y7oA/giphy.gif";
    // Reset attempts after maxAttempts to loop the messages
    attempts = 0;
  }
});
