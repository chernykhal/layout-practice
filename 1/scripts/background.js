window.addEventListener('scroll', function () {
    let background = document.querySelector('.background__mountains')
    let hills = document.querySelector('.background__hills')
    let filter = document.querySelector('.background__filter')
    background.classList.add('background__transform')
    hills.style.transform = "translateY(0px)"
    filter.style.transform = "translateY(0px)"

})