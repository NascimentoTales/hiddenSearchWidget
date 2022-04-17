const search = document.querySelector('.search')
const input = document.querySelector('.input')
const btn = document.querySelector('.btn')

btn.addEventListener('click', () => {
    if (input.value === '') {
        search.classList.toggle('active')
    }
})