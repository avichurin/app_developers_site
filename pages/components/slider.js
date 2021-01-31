import React from "react";

let slider;
let isDown;
let startX;
let startY;
let scrollLeft;

export function Slider() {
    slider = document.querySelector('.items');
    isDown = false;

    slider.addEventListener('mousedown', onDown);
    slider.addEventListener('mouseleave', onLeave);
    slider.addEventListener('mouseup', onUp);
    slider.addEventListener('mousemove', onMove);

    slider.addEventListener('touchstart', onFinger);
    slider.addEventListener('touchcancel', onLeave);
    slider.addEventListener('touchend', onUp);
    slider.addEventListener("touchmove", fingerMove);
}

function onFinger(e) {
    e.preventDefault();
    isDown = true;
    slider.classList.add('active');
    var touchSlider = e.changedTouches[0]; // первая точка прикосновения
    startX = touchSlider.pageX - slider.offsetLeft;
    startY = touchSlider.pageY;
    scrollLeft = slider.scrollLeft - startX * 3;
   
}

function fingerMove(e) {
    e.preventDefault();
    if (!isDown) return;
    var touchSlider = e.changedTouches[0];
    var x = parseInt(touchSlider.pageX) - startX;
    var y = parseInt(touchSlider.pageY);
   
    const walk = (x - startX) * 3; //scroll-fast
    const walkY = (y - startY);

    
    console.log('move');

    if(Math.abs(walkY) < 70){
        slider.scrollLeft = scrollLeft - walk;
    }else{
        let step = (walkY - 70);
        if(walkY < 0){
            step = walkY + 70;
        }

        if(document.documentElement.scrollTop){
            document.documentElement.scrollTop -= step;
        }else{
            document.body.scrollTop -= step / 4;
        }
        

    }
    
}

function onDown(e) {
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
}

function onLeave(e) {
    isDown = false;
    slider.classList.remove('active');
}

function onUp(e) {
    isDown = false;
    slider.classList.remove('active');
}

function onMove(e) {
    e.preventDefault();
    if (!isDown) return;
   
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 3; //scroll-fast
    slider.scrollLeft = scrollLeft - walk;
}

