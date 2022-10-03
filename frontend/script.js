const rootElement = document.querySelector("#root");

rootElement.insertAdjacentHTML("afterend", 
`<div class="container">
<div class="nav">
<a href="">Hamburger</a><a href="">apartments</a><a href="">why griffith wood</a><a href="">living here</a><a href="">LOGO</a><a href="">find us</a><a href="">enquire now</a>
</div>
<div class="titleText">
<h1>A new way of city living</h1>
<p>A different avenue of renting</p>
</div>
</div>`);

const containerElement = document.querySelector(".container");
containerElement.insertAdjacentHTML("afterend", `<div class="splashScreen"><p>Griffith<br>Wood</p></div>`);

const splashScreen = document.querySelector('.splashScreen');
const titleText = document.querySelectorAll('.titleText h1, .titleText p');

window.addEventListener('DOMContentLoaded', () => {
    setTimeout(()=> {
        splashScreen.style.top = '-100vh'
        containerElement.classList.add("pinkBorder");
        for(let i = 0; i < titleText.length; i += 1)
        {
            titleText[i].classList.add("fade-in");
        }
    }, 1600)
});

