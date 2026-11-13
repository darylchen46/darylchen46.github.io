document.addEventListener("DOMContentLoaded", () => {
  const heading = document.getElementById("greet");
  if (!heading) return; // other pages may not have the greeting

  const root = document.documentElement;
  const fullText = heading.textContent.trim();

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  // The inline script in <head> adds "splash" on the first visit of a session
  const playSplash = root.classList.contains("splash");

  const SPEED = 110;                         // ms per character
  const START_DELAY = playSplash ? 700 : 1000; // pause before typing starts
  const HOLD = 900;                          // pause after typing, before the name moves
  const MOVE = 1000;                         // must match the transition in style.css
  const MAX_SCALE = 4;                       // how large the name gets on the splash screen

  // Build: [typed text][cursor][invisible remaining text]
  // The invisible part reserves the final width, so the name stays centred while typing.
  heading.setAttribute("aria-label", fullText);
  heading.textContent = "";
  const typed = document.createElement("span");
  const cursor = document.createElement("span");
  const ghost = document.createElement("span");
  typed.className = "typed";
  cursor.className = "cursor";
  ghost.className = "ghost";
  [typed, cursor, ghost].forEach((el) => el.setAttribute("aria-hidden", "true"));
  ghost.textContent = fullText;
  heading.append(typed, cursor, ghost);

  if (reduceMotion) {
    typed.textContent = fullText;
    ghost.textContent = "";
    return;
  }

  // Move the heading from its natural spot to the centre of the screen, scaled up
  function placeAtCenter() {
    heading.style.transform = "none";
    const r = heading.getBoundingClientRect();
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const scale = Math.min(MAX_SCALE, (vw * 0.84) / r.width);
    const dx = vw / 2 - (r.left + r.width / 2);
    const dy = vh / 2 - (r.top + r.height / 2);
    heading.style.transform = `translate(${dx}px, ${dy}px) scale(${scale})`;
  }

  function onResize() {
    if (!root.classList.contains("splash-leaving")) placeAtCenter();
  }

  function leave() {
    window.removeEventListener("resize", onResize);
    root.classList.add("splash-leaving"); // fades the dark overlay, restores colours
    heading.style.transform = "";         // animates back to its original position
    setTimeout(finish, MOVE + 100);
  }

  function finish() {
    root.classList.remove("splash", "splash-ready", "splash-leaving");
    root.classList.add("splash-done");
    heading.style.transform = "";
    try { sessionStorage.setItem("splashPlayed", "1"); } catch (e) {}
  }

  let index = 0;
  function typeWriter() {
    index++;
    typed.textContent = fullText.slice(0, index);
    ghost.textContent = fullText.slice(index);
    if (index < fullText.length) {
      setTimeout(typeWriter, SPEED);
    } else if (playSplash) {
      setTimeout(leave, HOLD);
    }
  }

  if (playSplash) {
    window.scrollTo(0, 0);
    placeAtCenter();
    root.classList.add("splash-ready"); // reveal the heading in its centred pose
    window.addEventListener("resize", onResize);
  }

  setTimeout(typeWriter, START_DELAY);
});
