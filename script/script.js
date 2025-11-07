/*
document.querySelectorAll('.s_button')[1].onclick = () =>{
    let list = document.querySelectorAll('.item');
    document.querySelector('#slide').appendChild(list[0]);
}

document.querySelectorAll('.s_button')[0].onclick = () =>{
    let list = document.querySelectorAll('.item');
    document.querySelector('#slide').prepend(list[list.length - 1]);
}
*/

let _direction = true;
let _move = () =>{
    let list = document.querySelectorAll('.item');
    if(_direction) {
        document.querySelector('#slide').appendChild(list[0]);
    }else{
        document.querySelector('#slide').prepend(list[list.length - 1]);
    }
}

let timer = setInterval(_move, 3000);
document.querySelector('.banner').addEventListener('mouseover', () => {
    clearInterval(timer);
})
document.querySelector('.banner').addEventListener('mouseout', () => {
    timer = setInterval(_move, 3000);
})

document.querySelectorAll('.s_button')[1].onclick = () =>{
    _direction = true;
    _move();
}

document.querySelectorAll('.s_button')[0].onclick = () =>{
    _direction = false;
    _move();
}