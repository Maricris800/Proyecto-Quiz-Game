let correctas = [3,1,3,2,3];

//arreglo donde se guardan las respuestas del usuario//
let opcion_elegida = [];

//funcion que toma el numero de la pregunta y el input elegido

function respuesta(num_pregunta, seleccionada){

  //guardo la respuesta elegida
  opcion_elegida[num_pregunta] = parseInt(seleccionada.value);

  
  //para poner fondo blanco a los inputs cuando se elige otra opcion
  //armo el id para seleccionar el seccion correspondiente

  id= "pregunta" + num_pregunta;

  labels = document.getElementById(id).childNodes;
  labels[3].style.backgroundColor = "white";
  labels[5].style.backgroundColor = "white";
  labels[7].style.backgroundColor = "white";

  //doy el color al label seleccionado
  seleccionada.parentNode.style.backgroundColor = "#cec0fc";

}
//funcion que compara los arreglos para saber cuantas respuestas son correctas
function corregir(){
  cantidad_correctas = 0;
  
  for (i=0; i<correctas.length; i++){
    if (correctas[i]==opcion_elegida[i]){
      cantidad_correctas++;
    }
  }
  document.getElementById("resultado").innerHTML = cantidad_correctas;
}
