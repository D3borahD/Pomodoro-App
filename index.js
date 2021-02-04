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