function createBlockMethod1(digit) {
  const div = document.createElement("div");
  div.className = "otp-block";
  div.textContent = digit;
  return div;
}

function createBlockMethod2(digit) {
  return `<div class="otp-block">${digit}</div>`;
}

function randomDigit() {
  return Math.floor(Math.random() * 10);
}

function generateOTP() {
  const container = document.getElementById("otpContainer");
  container.innerHTML = "";

  const digits = [randomDigit(), randomDigit(), randomDigit(), randomDigit()];

  const block1 = createBlockMethod1(digits[0]);
  const block2 = createBlockMethod1(digits[1]);

  const sep1 = document.createElement("div");
  sep1.className = "separator";
  sep1.innerHTML = '<div class="dot"></div><div class="dot"></div>';

  const sep2 = document.createElement("div");
  sep2.className = "separator";
  sep2.innerHTML = '<div class="dot"></div><div class="dot"></div>';

  container.appendChild(block1);
  container.appendChild(sep1);
  container.appendChild(block2);
  container.appendChild(sep2);

  const htmlBlocks = createBlockMethod2(digits[2]) + createBlockMethod2(digits[3]);
  container.insertAdjacentHTML("beforeend", htmlBlocks);

  document.querySelectorAll(".otp-block").forEach((block, i) => {
    block.style.animation = "none";
    block.offsetHeight;
    block.style.animation = "";
    block.style.animationDelay = `${i * 0.08}s`;
    block.classList.add("animate");
    block.addEventListener("animationend", () => block.classList.remove("animate"), { once: true });
  });
}

generateOTP();