document.addEventListener("DOMContentLoaded", () => {  
  const heading = document.getElementById("greet");
  const fullText = heading.textContent;
  heading.textContent = ""; // Clear text initially

  let index = 0;
  const speed = 100; // Typing speed in milliseconds

  function typeWriter() {
    if (index < fullText.length) {
      heading.textContent += fullText.charAt(index);
      index++;
      setTimeout(typeWriter, speed);
    }
  }

  typeWriter();
});

