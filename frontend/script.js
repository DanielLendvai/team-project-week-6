const rootElement = document.querySelector("#root");

rootElement.insertAdjacentHTML(
    "afterend",
    `<div class="container">
    <div class="navContainer nav-fixed">
        <div class="hamburger hideMenu">
        <a id="hamburger" class="openbtn" onclick="openNav()">
            <img src="img/hamburger.png" />
        </a>
        </div>
        <div class="navLeft hide">
        <div class="hiddenSection">
            <div class="hiddenSectionContainer">
                <div class="wrapper">
                    <div class="rooms">
                    <img src="img/room1.jpg">
                        <h2>One Bed</h2>
                        <p>from €2,140 p/m</p>
                        <button>View Details</button>
                    </div>
                    <div class="rooms">
                        <img src="img/room2.jpg" alt="">
                        <h2>Two Bed</h2>
                        <p>from €2,445 p/m</p>
                        <button>View Details</button>
                    </div>
                    <div class="rooms">
                        <img src="img/room3.jpg" alt="">
                        <h2>Three Bed</h2>
                        <p>from €3,600 p/m</p>
                        <button>View Details</button>
                    </div>
                </div>
            </div>
        </div>
            <a href="">
                APARTMENTS
            </a>
        </div>
        <div class="navLeft">
            <a href="">               
                WHY GRIFFITH WOOD            
            </a>
        </div>
        <div class="navLeft">
            <a href="">
                LIVING HERE
            </a>
        </div>
        <div class="navCenter">
            <a href="">
                Griffith<br>Wood
            </a>
        </div>
        <div class="navRight">
            <a href="">
                <img src="img/map-icon.png" alt="">
                find us
            </a>
        </div>
        <div class="navRight">
            <a class="enquire" href="">
                enquire now
            </a>
        </div>
    </div>
    <div class="hiddenMenu hidden">
    <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">X Close</a>
    <div class="hiddenContainer">
        <h1>Apartments</h1>
        <span><p>One Bed,</p><p>Two Bed,</p><p>Three Bed</p></span>
        <h1>Why Griffith Wood</h1>
        <h1>Living here</h1>
        <h4>Our location</h4>
        <h4>FAQ</h4>
        <h4>enquire now</h4>
        <h4>apply now</h4>
        <h4>resident portal</h4>
    </div>
    </div>
    <div class="titleText">
        <h1>A new way of city living</h1>
        <p>A different avenue of renting</p>
    </div>
</div>
<div class="floatingIcon"><img src="img/security.png"</div>`
);

const containerElement = document.querySelector(".container");

containerElement.insertAdjacentHTML(
    "afterend",
    `<div class="splashScreen"><p>Griffith<br>Wood</p></div>`
);
const floatingIcon = document.querySelector(".floatingIcon") 
const splashScreen = document.querySelector(".splashScreen");
const titleText = document.querySelectorAll(".titleText h1, .titleText p");

window.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        splashScreen.style.top = "-100vh";
        containerElement.classList.add("pinkBorder");
        for (let i = 0; i < titleText.length; i += 1) {
            titleText[i].classList.add("fade-in");
        }
    }, 1600);
    setTimeout(() => {
        floatingIcon.classList.add("floatIn")
    }, 1000);
});

containerElement.insertAdjacentHTML(
    "afterend",
    `
    <div class="page1">
        <div class="textwrap pageOneFade">
            <h1>WELCOME</h1>
            <div class="text">
                Where city life meets suburban tranquillity, that’s Griffith Wood in Dublin. The finest urban facilities in a leafy setting.
            </div>
            <a href="#"><span>WHY GRIFFITH WOOD</span></a>
        </div>
        <div class="images">
            <div class="left">
                <img src="img/page1_left.jpg" class="pageOneFade"></img>
            </div>
            <div class="right">
                <div class="righttop">
                    <img src="img/page1_righttop.jpg" class="pageOneFade"></img>
                </div>
                <div class="rightbottom">
                    <img src="img/page1_rightbottom.jpg" class="pageOneFade"></img>
                </div>
            </div>
        </div>
    </div>
    `
);

const pageOne = document.querySelector(".page1");
pageOne.insertAdjacentHTML(
    "afterend",
    `<div class="containerSecond">
<div class="containerSecondLeft pageOneFade">
<img class="imageSecond" src="https://www.griffith-wood.com/wp-content/uploads/2021/09/20210825_GREYSTAR_GRIFFITHWOOD_0122_GRD_WEB-560x728.jpg" alt="">
</div>

<div class="containerSecondRight pageOneFade">
<div class="headerSecond"><h2>The avenue to <br>better living</h2></div>
<div class="paragraphSecond"><p>One, two and three-bedroom apartments to rent, within a parkland setting on Dublin’s prestigious Griffith Avenue. Each designed to the highest specification and furnished to suit your needs, with access to a dedicated concierge service, bespoke gym, residents’ lounge and co-working space. And the best places to play, work and learn close to home.</p></div>
<div class="details">
<div class="discription">
<a href="">
<p class="paragraphThird">One Bed</p>
<p class="paragraphFourth">From €2,140 p/m</p>
</a>
</div>
<div class="discription">
<a href="">
<p class="paragraphThird">Two Bed</p>
<p class="paragraphFourth">From €2,445 p/m</p>
</a>
</div>
<div class="discription">
<a href="">
<p class="paragraphThird">Three Bed</p>
<p class="paragraphFourth">From €3,600 p/m</p>
</a>
</div>
</div>

<div class="apartmentsButton">
<a href="">
<button class="btn1">OUR APARTMENTS</button>
</a>
</div>
</div>
</div>`
);

let elementsArray = document.querySelectorAll(".pageOneFade");
console.log(elementsArray);
window.addEventListener('scroll', fadeIn ); 
function fadeIn() {
    for (let i = 0; i < elementsArray.length; i++) {
        let elem = elementsArray[i]
        let distInView = elem.getBoundingClientRect().top - window.innerHeight + 150;
        if (distInView < 0) {
            elem.classList.add("pageOneFadeIn");
        } else {
            elem.classList.remove("pageOneFadeIn");
        }
    }
}
fadeIn();

const navbar = document.querySelector(".nav-fixed");
const hamburgerIcon = document.querySelector("#hamburger");
const mapIcon = document.querySelector(".navRight img");

window.onscroll = () => {
    if (window.scrollY > 100) {
        navbar.classList.add("nav-scrolled");
        hamburgerIcon.classList.add("filter");
        mapIcon.classList.add("filter2");
    } else {
        navbar.classList.remove("nav-scrolled");
        hamburgerIcon.classList.remove("filter");
        mapIcon.classList.remove("filter2");
    }
};

//hamburger menu
// const bodyElement = document.querySelector("body");
const hiddenMenu = document.querySelector(".hiddenMenu");

function openNav() {
    hiddenMenu.classList.toggle("hidden");
}
function closeNav() {
    hiddenMenu.classList.toggle("hidden");
}
