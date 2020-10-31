const startLink = document.querySelector("a[href='#start']");
const firstLink = document.querySelectorAll("a[href='#first']");
const secondLink = document.querySelector("a[href='#second']");
const thirdLink = document.querySelector("a[href='#third']");
const startSection = document.querySelector("#start");
const firstSection = document.querySelector("#first");
const secondSection = document.querySelector("#second");
const thirdSection = document.querySelector("#third");

startLink.addEventListener('click', (event) => {
    event.preventDefault()
    startSection.scrollIntoView({ behavior: "smooth" })
})
firstLink.forEach((element) => {
    element.addEventListener('click', (event) => {
        event.preventDefault()
        firstSection.scrollIntoView({ behavior: "smooth" })
    })
})
secondLink.addEventListener('click', (event) => {
    event.preventDefault()

    secondSection.scrollIntoView({ behavior: "smooth" })
})
thirdLink.addEventListener('click', (event) => {
    event.preventDefault()

    thirdSection.scrollIntoView({ behavior: "smooth" })
})

window.onscroll = function () { myFunction() };
function myFunction() {
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (winScroll / height) * 100;
    document.getElementById("progress").style.height = scrolled + 15 + "%";
}