// let hour = document.querySelector('#hand');
// let minute = document.querySelector('#minute');
// let second = document.querySelector('#second');
setInterval(()=>{
     d = new Date();
     h = d.getHours();
     m = d.getMinutes();
     s = d.getSeconds();

    hRot = 30*h + m/2;
    mRot = 6*m;
    sRot = 6*s;
    hour.style.transform = `rotate(${hRot}deg)`;
    minute.style.transform = `rotate(${mRot}deg)`;
    second.style.transform = `rotate(${sRot}deg)`;
}, 1000);

