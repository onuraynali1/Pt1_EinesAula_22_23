const hora = document.getElementById('hora');
let count = 0;




const interval = setInterval(() => {

    const local = new Date();

    hora.innerHTML = local.toLocaleTimeString();
    console.log(hora.innerHTML)


    /*
    selectorHora.innerHTML =
    */

    prueba.innerHTML = count

}, 250);



