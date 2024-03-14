let numeroSecreto = 0;
let intentos = 0;
let listaNumeroSorteado = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;

}
function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    console.log(intentos);
    if (numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${intentos === 1 ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
    else{
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p','El número es menor');
        }
        else{
            asignarTextoElemento('p','El número es mayor');
            
        }
        intentos++;
        limpiarCaja();
    }
    return;


}
function limpiarCaja(){

    document.querySelector('#valorUsuario').value = '';
    

}
function generaNumeroSecreto(){
     let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1;

     console.log(numeroGenerado);
     console.log(listaNumeroSorteado);

     if(listaNumeroSorteado.length == numeroMaximo){

        asignarTextoElemento('p','Ya se sortearon todos los números posibles');

     } else{

     if(listaNumeroSorteado.includes(numeroGenerado)){
        return generaNumeroSecreto();


     }else{
        listaNumeroSorteado.push(numeroGenerado);
        return numeroGenerado;
     }
  }
}

function condicionesIniciales(){

    asignarTextoElemento('h1','Juego del número secreto');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generaNumeroSecreto();
    intentos = 1;

}

function reiniciarJuego(){
    limpiarCaja();
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled','true');

}
condicionesIniciales();