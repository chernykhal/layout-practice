window.addEventListener('scroll', function () {
    let background = document.querySelector('.background__mountains')
    background.style.transform = "translateY(-" + window.pageYOffset + "px)"
})