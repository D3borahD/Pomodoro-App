const pourcent = document.querySelector('.num');
let counter = 0;
const compteur = document.querySelector('input');

setInterval(()=> {
    if(counter == 100) {
        clearInterval
        pourcent.textContent = "Pause";
    } else {
        counter+=1;
        pourcent.textContent = counter + '%';
    }
}, 100)

// Timer //

function getInputValue() {
    let choice = document.getElementById('choice').value;
    let startingMinutes = choice ;
    this.choice.Value = ('');
    let time = startingMinutes * 60;
    const countDownE1 = document.getElementById('countdown');
    setInterval(updateCountDown, 1000);





    function updateCountDown() {
        const minutes = Math.floor(time/60);
        let seconds = time % 60;
        seconds = seconds < 10 ? '0' + seconds : seconds;
        countDownE1.innerHTML = `${minutes} : ${seconds}`;
        if (time > 0) {
            time--;
        }else {
            countDownE1.innerHTML = `Pause`
        };
    };

// action bouton start stop reset //

const start = document.querySelector('.start');
const stop = document.querySelector('.stop');
const reset = document.querySelector('.reset');

start.addEventListener('click', () => {
    if(start.value === "active"){
        start.value = "off";
        stop.disabled = true;
        reset.disabled = true;
        compteur.disabled = 'disabled';

    } else {
        start.value = "active";
        compteur.disabled = false ;
        stop.disabled = false;
        reset.disabled = false;
    }

})



}






 // Reset:
//  const reset = document.querySelector('.reset');

//  function reset() {
//      if (reset.value === 'reset') {
//  startingMinutes == 0;
//      }
//  }

// const reset = document.querySelector('.reset');

// reset.addEventListener('click', reset);

// function reset() {
//     if (btn.value === 'reset') {
// // clear set interval
//     }
    
// }



