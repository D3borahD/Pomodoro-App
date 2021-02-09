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
}

// toggler Start Stop

const btn = document.querySelector('.btn');
const txt = document.querySelector('p');

btn.addEventListener('click', updateBtn);

function updateBtn() {
  if (btn.value === 'stop') {
    btn.value = 'start';
    btn.textContent = 'start';
  } else {
    btn.value = 'stop';
    btn.textContent = 'stop';
  
  };
}

// Reset:

// const reset = document.querySelector('.reset');

// reset.addEventListener('click', reset);

// function reset() {
//     if (btn.value === 'reset') {
// // clear set interval
//     }
    
// }



