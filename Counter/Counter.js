let numberCount = document.querySelector('.number-count');
let addBtn = document.getElementById('add');
let subtractBtn = document.getElementById('subtract');
let integer = 0;

addBtn.addEventListener('click', function(){
    integer += 1;
    numberCount.innerHTML = integer;
})

subtractBtn.addEventListener('click', function(){
    integer -= 1;
    numberCount.innerHTML = integer;
})