document.addEventListener("DOMContentLoaded", () => {  
  const heading = document.getElementById("greet");
  const fullText = heading.textContent;
  heading.textContent = ""; // Clear text initially

  let index = 0;
  const speed = 100; // Typing speed in milliseconds
  const delay = 1000; // Delay before starting the typing effect

  function typeWriter() {
    if (index < fullText.length) {
      heading.textContent += fullText.charAt(index);
      index++;
      setTimeout(typeWriter, speed);
    }
  }

  setTimeout(typeWriter, delay);
});

