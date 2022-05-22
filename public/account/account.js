const darkButton = document.getElementById("dark");
const darkMode = () => {
  document.body.classList.toggle("dark");
}

darkButton.addEventListener("click", () => {
  setDarkMode = localStorage.getItem("dark");

  // using localStorage to store the SCSS style of the page i.e. if the page is on darkMode or lightMode
  if(setDarkMode !== "on") {
    darkMode();
    setDarkMode = localStorage.setItem("dark", "on");
  } else {
    darkMode();
    setDarkMode = localStorage.setItem("dark", "null");
  } 
});

// checking if darkMode is on when the page is refreshed based on localStorage
let setDarkMode = localStorage.getItem("dark");
if(setDarkMode === "on") {
  darkMode();
} 