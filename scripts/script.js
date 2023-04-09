document.getElementById("main-action").onclick = () => {
    document.getElementById("cars").scrollIntoView({behavior: "smooth"})
}

let buttons = document.getElementsByClassName("car-button")

for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = () => {
        document.getElementById("price").scrollIntoView({behavior: "smooth"})
    }
}

document.getElementById("price-action").onclick = () => {
    if (document.getElementById("name").value === "") {
        alert("Заполните поле имя!")
    } else if (document.getElementById("phone").value === "") {
        alert("Заполните поле телефон!")
    } else if (document.getElementById("car").value === "") {
        alert("Заполните поле автомобиль!")
    } else {
        alert("Спасибо за заявку, мы свяжемся с вами в ближайшее время!")
    }
}