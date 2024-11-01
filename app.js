
 var mainimg = document.querySelector('.slider img')
 var images = ['slider/ısparta1.jpg', 'slider/ısparta2.jpg', 'slider/ısparta3.jpg', 'slider/ısparta4.jpg',]
 var num = 0;
const auto = true
const Intervaltime = 5000;
let slideInterval
function next() {
    num++;
    if (num >= images.length) {
        num = 0;
    }
    mainimg.src = images[num];
}

function back() {
    num--;
    if (num < 0) {
        num = images.length - 1;
    }
    mainimg.src = images[num];
}
if (auto) {
    slideInterval = setInterval(next, Intervaltime)
}