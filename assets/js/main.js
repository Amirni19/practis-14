"use strict";

let tabBtns = document.querySelectorAll('.tab__btn')
let tabTexts = document.querySelectorAll('.tab__text')

tabBtns.forEach((item, index)=>{
    item.addEventListener('click', function(){
        document.querySelector('.tab__btn.active').classList.remove('active');
        item.classList.add('active');

        document.querySelector('.tab__text.active').classList.remove('active');
        tabTexts[index].classList.add('active')
    })
})

function sayHi(){
    alert('hi')
}
let timerId;
start.onclick = function(){
    timerId = setTimeout(sayHi, 3000)
}
cancel.onclick = function(){
    clearTimeout(timerId)
    alert(`Отмена таймера с id: ${timerId}`)
}

let count = +timer.innerHTML;
let intervalId;

timerStart.onclick = function(){
    intervalId = setInterval(()=>{
        if(count == 0){
            clearInterval(intervalId)
            count = 10;
            timer.innerHTML = 10
        }else{
            timer.innerHTML = --count;
        }
    }, 1000);
}
timerCancel.onclick = function(){
    clearInterval(intervalId)
}
// setTimeout(sayHi, 2000);
// setTimeout(()=>{alert('lol')}, 5000)
