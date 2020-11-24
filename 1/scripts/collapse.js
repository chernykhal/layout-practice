const togglers = document.querySelectorAll(".collapse__toggler");
let menuArr = []
togglers.forEach(function (toggler) {
    toggler.addEventListener('click', function () {
        toggler.classList.toggle('toggled')
        let menu = toggler.getAttribute('data-target')
        document.querySelector(menu).classList.toggle('collapsed')
    })
})
