let hr = document.querySelector('.hr');
let sec = document.querySelector('.sec');
let min = document.querySelector('.min');
let AmPm = document.querySelector('.am-pm');

setInterval(() => {
    let newdate = new Date;
    let s = newdate.getSeconds().toString().padStart(2,"0");
    let m = newdate.getMinutes().toString().padStart(2,"0");
    let h = newdate.getHours().toString().padStart(2,"0");
    let AmOrPm = h>=12 ? 'PM' : 'AM';
    if (h>12){
        h=h-12;
    }
    AmPm.innerHTML = AmOrPm;
    sec.innerHTML = s;
    hr.innerHTML = h;
    min.innerHTML = m;
}, 1000);