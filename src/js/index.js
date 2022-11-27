const btnDarkMode = document.querySelector(".dark-mode-btn");

const darkMode = localStorage.getItem("DarkMode");

// If change system settings, to change mode
window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", (event) => {
    const newColorScheme = event.matches ? "dark" : "light";

    if (newColorScheme === "dark") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  });

if (darkMode === "dark") {
  document.body.classList.add("dark");
}

// Check dark mode on the level system settings
if (
  window.matchMedia &&
  window.matchMedia("(prefers-color-schema: dark)").matches
) {
  btnDarkMode.classList.add("dark-mode-btn--active");
  document.body.classList.add("dark");
}

btnDarkMode.onclick = () => {
  btnDarkMode.classList.toggle("dark-mode-btn__active");
  const darkMode = document.body.classList.toggle("dark");

  darkMode
    ? localStorage.setItem("DarkMode", "dark")
    : localStorage.setItem("DarkMode", "light");
};
