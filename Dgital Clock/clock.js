setInterval(()=>{
    d = new Date();
    htimes = d.getHours();
    mtimes = d.getMinutes();
    stimes = d.getSeconds();

    hrotation = 30 * htimes + mtimes/2;
    mrotation = 6 * mtimes;
    srotation = 6 * stimes;

    hour.style.transform = `rotate(${hrotation})deg`;
    minutes.style.transform = `rotate(${mrotation}deg)`;
    second.style.transform =  `rotate(${srotation}deg)`;
},1000);