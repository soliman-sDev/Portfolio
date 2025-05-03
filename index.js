
let themeTogglerBtn = document.getElementById('theme-toggler');
const body = document.body;


if (localStorage.getItem('darkMode') === "true") {
    document.body.classList.add('dark-mode');
    themeTogglerBtn.innerText = "light_mode";
} else {
    console.log("Using in light mode");
}

themeTogglerBtn.addEventListener('click', (event) => {
    if(localStorage.getItem("darkMode") === "true") {
        localStorage.setItem("darkMode", false);
        body.classList.remove("dark-mode");
        themeTogglerBtn.innerText = "dark_mode";
    } else {
        localStorage.setItem("darkMode", true);
        body.classList.add("dark-mode");
        themeTogglerBtn.innerText = "light_mode";
    }
})
