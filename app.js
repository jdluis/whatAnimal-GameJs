/*
¿Que animal el cual contiene 5 letras estamos escondiendo? */


const animal = ["tigre","leon", "camello", "ballena", "loro", "vaca", "caballo", "leopardo", "elefante", "lagarto"];
let intentos = 4; 
let propuesta;
let pista1;
let palabraAleatoria = numeroAleatorioEntero(0,10);
let pistaAleatoria = numeroAleatorioEntero(0,4);
console.log(animal[palabraAleatoria])


function numeroAleatorioEntero(min, max) { //Devuelve un numero entero
    let num;
    num = Math.random() * (max - min);
    num + min;
    return parseInt(num);
}


function ayudas (opcionAyuda){  //Solicita una letra a ver si esta en la palabra escondida.
     pista = animal[palabraAleatoria].indexOf(opcionAyuda);

     if (pista != -1) {
         alert("Contiene la letra " + opcionAyuda);
     } else {
         alert("No contiene la "+ opcionAyuda + " ,lo siento")
     }
}




    do {
         propuesta = prompt("¿Que animal contiene " + animal[palabraAleatoria].length +" letras, tienes " + intentos + " intentos.")
         if(propuesta != animal && intentos > 2) {
            alert ("Intentalo de nuevo");
        } else if (intentos == 1) {
            ayudas(prompt("Elige otra letra mas"));
        } else if (intentos == 2) {
            ayudas(prompt("Elige una letra para saber si esta"));
        } else if (propuesta == animal) {
            alert ("Enhorabuena el animal era " + animal);
            break
        }
        intentos = intentos - 1;
    } while (intentos >= 0) {

    }
   
    if (propuesta != animal[palabraAleatoria]) {
        alert("Que pena, no lo has conseguido")
    }
