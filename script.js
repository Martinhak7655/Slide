var slider_img = document.querySelector('.slider-img');
var images = ['a.jpg', 'b.jpg', 'c.jpg'];
var i = 0;
let prev = document.getElementById("prev")
let next = document.getElementById("next")

function setImg() {
    return slider_img.setAttribute('src', 'images/'+images[i]);
}

prev.onclick = () => {
    if(i <= 0) i = images.length;
    i--;
    return setImg();
}

next.onclick = () => {
    if(i <= 0) i = images.length;
    i--;
    return setImg();
}