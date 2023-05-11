const hora = document.getElementById('hora');
let count = 0;
//let botonUp = document.getElementById('botonUp')

function countUp(){
    count++;
}

function countDown(){
    count--;
}

function set(){
    let inputHoras = document.getElementById("inputHoras").value;
    let inputMinutos = document.getElementById("inputMinutos").value;

    let result = inputHoras + ":" + inputMinutos;
    console.log(result);
    console.log("set");

    selectorHora.innerHTML = result;
}

const interval = setInterval(() => {

    const local = new Date();

    hora.innerHTML = local.toLocaleTimeString();
    console.log(hora.innerHTML)

    let horaCurta = hora.innerHTML.slice(0, 5);
    
    if (horaCurta==selectorHora.innerHTML) {
        console.log("BEEP BEEP");
        let audio = document.getElementById("myAudio");
        audio.play();
    }

    /*
    selectorHora.innerHTML =
    */

    cuenta.innerHTML = count

}, 500);



