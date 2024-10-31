const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const four = document.querySelector(".four");
const five = document.querySelector(".five");

one.onclick = function() {
    one.classList.add("active");
    two.classList.remove("active");
    three.classList.remove("active");
    four.classList.remove("active");
    five.classList.remove("active");
}

two.onclick = function() {
    one.classList.add("active");
    two.classList.add("active");
    three.classList.remove("active");
    four.classList.remove("active");
    five.classList.remove("active");
}
three.onclick = function() {
    one.classList.add("active");
    two.classList.add("active");
    three.classList.add("active");
    four.classList.remove("active");
    five.classList.remove("active");
}
four.onclick = function() {
    one.classList.add("active");
    two.classList.add("active");
    three.classList.add("active");
    four.classList.add("active");
    five.classList.remove("active");
}
five.onclick = function() {
    one.classList.add("active");
    two.classList.add("active");
    three.classList.add("active");
    four.classList.add("active");
    five.classList.add("active");
}

let swiper = new Swiper(".swiper",{
    garbCursor:true,
    noSwiping:true,
    freeMode:false,
    speed:400,
    mousewheel:{
        invert:true,
    },
    scrollbar:{
        el:".swiper-scrollbar",
        draggable: true,
    },
    slidesPerView:1,
    spaceBetween:10,
    breakpoints:{
        520:{
            slidesPerView:2,
            spaceBetween:10, 
        },
        960:{
            slidesPerView:3,
            spaceBetween:20, 
        }

    }
});

document.getElementById('halfCircle').addEventListener('click', function() {
    const header = document.getElementById('header');
    header.style.display = header.style.display === 'none' ? 'block' : 'none';
});
