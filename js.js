let points = 0;
const player = prompt("podaj swoje imię:");
const imie = document.querySelector(".dd");
const rez = document.querySelector(".punkty");
const pokaz = document.querySelector(".show");
const pop = document.querySelector(".res");
const buttony = document.querySelectorAll(".but");
const ddd = document.querySelector(".ddd");
imie.textContent += player;

for (let i = 0; i < buttony.length; i++) {
    buttony[i].addEventListener("click", function () {
        buttony[i].classList.add("select");
        if (buttony[i].classList.contains("ok")) {
            points++;
        }
    });
}

function wyn() {
    rez.textContent = "wynik:" + " " + points + " " + "pkt";
}

function dobre() {
    for (let i = 0; i < buttony.length; i++) {
        if (buttony[i].classList.contains("ok")) {
            buttony[i].classList.add("green");
            buttony[i].classList.remove("select");
        } else {
            buttony[i].classList.remove("select");
        }
    }
}

function reset() {
    for (let i = 0; i < buttony.length; i++)
        buttony[i].classList.remove("green", "select");
    points = 0;
    rez.textContent = "wynik:" + " " + points + " " + "pkt";
}

pop.addEventListener("click", reset);

pokaz.addEventListener("click", wyn);

ddd.addEventListener("click", dobre);
