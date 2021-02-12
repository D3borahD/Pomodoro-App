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

// Timer // ==> /!\ entraine un problème avec les boutons (double click nécessaire pour modifier le statut toggle)

// function getInputValue() {
//     let choice = document.getElementById('choice').value;
//     let startingMinutes = choice ;
//     this.choice.Value = ('');
//     let time = startingMinutes * 60;
//     const countDownE1 = document.getElementById('countdown');
//     setInterval(updateCountDown, 1000);


//     function updateCountDown() {
//         const minutes = Math.floor(time/60);
//         let seconds = time % 60;
//         seconds = seconds < 10 ? '0' + seconds : seconds;
//         countDownE1.innerHTML = `${minutes} : ${seconds}`;
//         if (time > 0) {
//             time--;
//         }else {
//             countDownE1.innerHTML = `Pause`
//         };
//     };

// ***** Action boutons start/stop/reset  ==> OK *****//

const start = document.querySelector('.start');
const stop = document.querySelector('.stop');
const reset = document.querySelector('.reset');

start.addEventListener('click', () => {
  start.classList.toggle('stop');
  start.disabled = true;
  stop.disabled = false;
  reset.disabled = false;
});
stop.addEventListener('click',() => {
    stop.classList.toggle('stop');
    stop.disabled = true;
    start.disabled = false;
});
reset.addEventListener('click', () => {
    reset.classList.toggle('stop');
    start.disabled = false;
})

// *****//



// }






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



