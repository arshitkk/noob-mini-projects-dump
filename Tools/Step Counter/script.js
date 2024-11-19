let cnt = 0;
let dec = document.querySelector('.dec');
let inc = document.querySelector('.inc');
let rst = document.querySelector('.reset');
let scrn = document.querySelector('input');


rst.addEventListener('click', ()=>{
    cnt = 0;
    scrn.value = '000000';
})
inc.addEventListener('click', ()=>{
    if (cnt <=100000){
        curr = ++cnt;
        scrn.value =  curr.toString().padStart(6,0);
    }
})
dec.addEventListener('click', ()=>{
    if (cnt >0){
    curr = --cnt;
    scrn.value =  curr.toString().padStart(6,0);
    }
})