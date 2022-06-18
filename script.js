const button = document.querySelector('.share-button')
const data = document.querySelector('.data__container-0')
const path = document.querySelector('path')

let toggle = true;

button.addEventListener('click', () => {
    data.classList.toggle('data__active')
    if (toggle == true) {
        path.attributes[0].textContent = "#fff";
        button.style.backgroundColor = "hsl(214, 17%, 51%)";
    } else {
        path.attributes[0].textContent = "#6E8098";
        button.style.backgroundColor = "hsl(210, 46%, 95%)";
    }
    toggle = !toggle;
})




// console.log(svg.attributes[0].textContent);