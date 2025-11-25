function mostrarMensagem() {
    alert("O invisível também fala.");
}

const btn = document.getElementById("toggle-theme");
const body = document.body;


const savedTheme = localStorage.getItem("theme");
if (savedTheme ==="light") {
    body.classList.add("light");
}

const main = document.querySelector( 'main' )

btn.addEventListener("click", () => {
    body.classList.toggle("light");
    
    if(body.classList.contains("light")) {
        localStorage.setItem("theme", "light");
    } else {
        localStorage.setItem("theme", "dark");
    }
const main = document.getElementById("main");
main.addEventListener ("click", () => {
  mainclassList.add("journal-click");
  setTimeout((() =>main.classList.remove("journal-click"), 350);
});

const
    
});
