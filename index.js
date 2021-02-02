const pourcent = document.querySelector('.num');

let counter = 0;

setInterval(()=> {
    if(counter == 100) {
        clearInterval
        pourcent.textContent = "Pause";
    } else {
        counter+=1;
        pourcent.textContent = counter + '%';
    }
}, 100)