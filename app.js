
var estudiantes = [];
function obtenerListaEstudiantes() {
    // TO DO: Retornar la lista de estudiantes
return estudiantes;


}

function agregarEstudiante() {
    // TO DO: Preguntar al usuario por el nombre, puntos técnicos y puntos de HSE de un estudiante
    // Hint: El estudiante debe ser agregado a la lista de estudiantes
    // TO DO: Retornar el estudiante recientemente creado
    //this.nombre = prompt("Ingrese su Nombre: ");
    //this.tecnico = prompt("Ingrese el Porcentaje Tecnico de Alumna: ");
    //this.habilidades = prompt("Ingrese el Porcentaje de las habilidades Socioemocionales: ");

    var nombreAlum = prompt("Ingrese su Nombre: ", "Escriba Aqui el nombre ");
    var puntosTecnicos = prompt("Ingrese el Porcentaje Tecnico de Alumna: ", "Escriba Aqui el puntaje tecnico");
    var puntosHabilidades = prompt("Ingrese el Porcentaje de las habilidades Socioemocionales: ", "Escriba Aqui puntaje habilidades");
    var estudiante= {
           nombre:nombreAlum,
           // parseInt para que solo me reconosca numeros XD!
           Tecnicos:parseInt(puntosTecnicos),
           HSE:parseInt(puntosHabilidades),
       };
       estudiantes.push(estudiante);
       return estudiante;

}

function mostrar(estudiante) {
    // TO DO: Completar el template para que muestre las propiedades correctas del estudiante
    var resultado = "";
    resultado += "<div class='row'>";
    resultado += "<div class='col m12'>";
    resultado += "<div class='card blue-grey darken-1'>";
    resultado += "<div class='card-content white-text'>";
    resultado += "<p><strong>Nombre:</strong> " + estudiante.nombre+ "</p>";
    resultado += "<p><strong>Puntos Técnicos:</strong> " + estudiante.Tecnicos + "</p>";
    resultado += "<p><strong>Puntos HSE:</strong> " + estudiante.HSE + "</p>";
    resultado += "</div>";
    resultado += "</div>";
    resultado += "</div>";
    resultado += "</div>";
    return resultado;
}

function mostrarLista(estudiantes) {
    // TO DO: Iterar la lista del estudiantes para devolverlos en el formato que usa la función mostrar(estudiante)
    // Retornar el template de todos los estudiantes
    // Usando MAP

var mostrarAlumna ="";
  for(var i in estudiantes){
    mostrarAlumna = mostrarAlumna + mostrar(estudiantes[i]);
  }
  
          return mostrarAlumna;
}


function buscar(nombre, estudiantes) {
    // TO DO: Buscar el nombre en la lista de estudiantes que se recibe por parámetros
    // Retornar el objeto del estudiante buscado
    // Nota: NO IMPORTA SI EL USUARIO ESCRIBE EL NOMBRE EN MAYÚSCULAS O MINÚSCULAS
    // FILTER para ver si el nombre existe y mostar
    

    return estudiantes.filter(nom => nom.nombre.toLowerCase() == nombre.toLowerCase());

}

function topTecnico(estudiantes) {
    // TO DO: Retornar el arreglo de estudiantes ordenado por puntaje técnico de mayor a menor
//for (var i in estudiantes){

//USAMOS SORT() PARA ORDENAR ELEMENTOS DEL ARREGLO
return estudiantes.sort(function(prim,fin){
        return fin.Tecnicos-prim.Tecnicos;});

}

function topHSE(estudiantes) {
    // TO DO: Retornar el arreglo de estudiantes ordenado por puntaje de HSE de mayor a menor
    //USAMOS SORT() PARA ORDENAR ELEMENTOS DEL ARREGLO
      //var top =
    return estudiantes.sort(function(prim,fin){
            return fin.HSE-prim.HSE;});
      //  return top;
}
