window.addEventListener('scroll', function () {
    let background = document.querySelector('.background__mountains')
    let hills = document.querySelector('.background__hills')
    let filter = document.querySelector('.background__filter')
    filter.style.transform = "translateY(0px)"

    background.style.transform = "translateY(-200px)"
    background.style.transition = "transform 2s"
    hills.style.transform = "translateY(0px)"
})