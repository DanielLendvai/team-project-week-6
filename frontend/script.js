const rootElement = document.querySelector("#root");

rootElement.insertAdjacentHTML("afterend", 
`<div class="container">
    <div class="nav">
        <a href="">Hamburger</a>
        <a href="">apartments</a>
        <a href="">why griffith wood</a>
        <a href="">living here</a>
        <a href="">LOGO</a>,
        <a href="">find us</a>
        <a href="">enquire now</a>
    </div>
    <div class="titleText">
        <h1>A new way of city living</h1>
        <p>A different avenue of renting</p>
    </div>
</div>
<div class="page1">
    <div class="textwrap">
        <h1>WELCOME</h1>
        <div class="text">
            Where city life meets suburban tranquillity, that’s Griffith Wood in Dublin. The finest urban facilities in a leafy setting.
        </div>
        <a href="#">
            <span>WHY GRIFFITH WOOD</span>
        </a>
    </div>
    <div class="images">
        <div class="left">
            <img src="/img/page1_left.jpg"></img>
        </div>
        <div class="right">
            <div class="righttop">
                <img src="/img/page1_righttop.jpg"></img>
            </div>
            <div class="rightbottom">
                <img src="/img/page1_rightbottom.jpg"></img>
            </div>
        </div>
    </div>
</div>
`);

const containerElement = document.querySelector(".container");
containerElement.insertAdjacentHTML("afterend", `<div class="splashScreen"><p>Griffith<br>Wood</p></div>`);

let splashScreen = document.querySelector('.splashScreen');
window.addEventListener('DOMContentLoaded', () => {
    setTimeout(()=> {
        splashScreen.style.top = '-99vh'
    }, 1600)
});

