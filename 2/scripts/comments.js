let form = document.querySelector('.comments-form');
let comments = document.querySelector('.comments-list')
let comment = document.querySelector('.comment').cloneNode(true)
form.addEventListener('submit', (event) => {
    event.preventDefault()
    let name = comment.querySelector('b');
    name.innerHTML = 'Иван Иванов'
    let text = document.querySelector('.textarea')
    let oldText = comment.querySelector('p');
    oldText.innerHTML = text.value
    comments.append(comment)
    form.remove()
})

let like = document.querySelector('.like')
like.addEventListener('click', () => {
    let icon = like.querySelector('.icon')
    if (icon.getAttribute("fill") === "black")
        icon.setAttribute("fill", "pink")
    else
        icon.setAttribute("fill", "black")
})