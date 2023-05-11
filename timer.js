const hora = document.getElementById('hora');
let audio = document.getElementById("beep");
let cuentaRunning = false;
let cuentaMin = 0;
let cuentaSeg = 0;
let beepCount = 0;

function beepON(){
    console.log("BEEP BEEP");
    audio.play();
}

function set(){

    let inputHoras = document.getElementById("inputHoras").value;
    let inputMinutos = document.getElementById("inputMinutos").value;

    if (inputHoras>=0&&inputHoras<24){
        if(inputMinutos>0&&inputMinutos<60){
            let result = inputHoras + ":" + inputMinutos;
            console.log(result);
            console.log("set");

            selectorHora.innerHTML = result;
        }

        else{
            alert("CASELLA MINUTS: Introdueix un valor vàlid");
        }
    }
    else{
        alert("CASELLA HORES: Introdueix un valor vàlid");
    }


}

function setCuenta(){
    let inputMinutosCuenta = document.getElementById("inputMinutosCuenta").value;
    let inputSegundosCuenta = document.getElementById("inputSegundosCuenta").value;

    if (inputSegundosCuenta>0&&inputSegundosCuenta<60){
        if(inputMinutosCuenta>=0&&inputMinutosCuenta<60){
            console.log(inputMinutosCuenta);

            let result = inputMinutosCuenta + ":" + inputSegundosCuenta;

            cuentaMin = inputMinutosCuenta;
            cuentaSeg = inputSegundosCuenta;
            cuentaRunning = true;

            selectorCuenta.innerHTML = result
        }

        else{
            alert("CASELLA MINUTS: Introdueix un valor vàlid");
        }
    }
    else{
        alert("CASELLA SEGONS: Introdueix un valor vàlid");
    }


}

const interval2 = setInterval(() => {

    /*
    const local = new Date();

    hora.innerHTML = local.toLocaleTimeString();
    console.log(hora.innerHTML)
    */
    console.log(cuentaRunning)

    if (cuentaRunning) {
        if(cuentaSeg>0){
            cuentaSeg--;
            result = cuentaMin + ":" + cuentaSeg;
            selectorCuenta.innerHTML = result;
            console.log(cuentaSeg);
        }


        else if(cuentaSeg==0){
            if(cuentaMin>0){
                cuentaSeg=59
                cuentaMin--;
                result = cuentaMin + ":" + cuentaSeg;
                selectorCuenta.innerHTML = result;
                console.log(cuentaMin);
                console.log(cuentaSeg);
            }

            else if(cuentaMin==0&&cuentaSeg==0){
                beepCount=10;
                cuentaRunning=false;


            }

            else{
                cuentaRunning=false;
            }
        }


        else{
            cuentaRunning=false;
        }

    }




}, 1000);

const intervalBeep = setInterval(() => {

    if (beepCount>0) {
        beepON();
        beepCount--;
    }

}, 250);

const interval = setInterval(() => {

    const local = new Date();

    hora.innerHTML = local.toLocaleTimeString();
    console.log(hora.innerHTML)

    let horaCurta = hora.innerHTML.slice(0, 5);
    if (horaCurta==selectorHora.innerHTML) {
        beepON();
    }
}, 250);



