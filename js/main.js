

let nombreProfe = prompt ("Hola Profesor, me permite su nombre? ");

soloLetra (nombreProfe);


let opcMateria=0;
parseInt (opcMateria);
opcMateria=prompt("Ingrese su materia: \n - 1: Matematica \n - 2: Lengua \n - 3: Cs. Sociales \n - 4: Cs. Naturales" );
while (opcMateria <=0  || opcMateria>=5 || isNaN (opcMateria)){
    opcMateria=prompt("ERROR!! Re ingrese su materia: \n - 1: Matematica \n - 2: Lengua \n - 3: Cs. Sociales \n - 4: Cs. Naturales");
    parseInt (opcMateria);
}
alert ("Para salir/ finalizar coloque 'ESC' en nombre del alumno");


let contadorAprobados=0;
let contadorDesaprobados=0;
let totalAlumnos=0;
let nombreAlumno= "";
let apellidoAlumno=""; 
let nota=0;
let promedio=0;



// ====================== FUNCIONES ==========================

//FUNCION notaValida para validar q una nota sea del 1 al 10
function notaValida(numero){
    numero = parseInt(numero);
    while (numero<=0 || numero>= 11 || isNaN (numero)){
        numero = prompt ("Ingrese una nota valida: ");
        numero = parseInt(numero);
    }
    
return numero;
}


// funcion SOLO LETRAS
function soloLetra(letra){
    letra=parseInt(letra);
    while (isNaN(letra)==false){
        letra = prompt ("Ingrese un nombre valido: ");
        letra=parseInt(letra);
        
    }

    
    return letra;
}

do {
    let acumulador=0;
    nombreAlumno= prompt ("Nombre del alumno: ");
    soloLetra(nombreAlumno);
    if (nombreAlumno=="ESC" || nombreAlumno=="Esc" || nombreAlumno =="esc"){
        break;        
    }
    apellidoAlumno= prompt("Apellido del alumno: ");
    soloLetra(apellidoAlumno);
    for (let i=0; i<3;i++) {  
        parseInt(acumulador)      
        parseInt(i);
        parseInt(nota);
        trimestre=i+1;
        nota= prompt ("Nota del "+trimestre+"° trimestre:");
        nota= parseInt (notaValida(nota));
        acumulador = acumulador + nota;
    }
    parseInt(promedio=acumulador/3);
    if(promedio>=7){
        alert("El alumno aprobo el año");
        contadorAprobados++;
    }else{
        alert("El alumno debe recuperar la materia");
        contadorDesaprobados++;
    }
    totalAlumnos++;

}while(nombreAlumno!="ESC");
alert ("- El informe se mostrara por consola -");
console.log("Nombre del profesor: "+nombreProfe);

// SALIDA DE DATOS

let mostrarMateria="";
switch (opcMateria){
    case "1":
        mostrarMateria = "Matematica"
    break;
    case "2":
        mostrarMateria ="Lengua";
    break;
    case "3":
        mostrarMateria ="Cs. Sociales";
    break;
    case "4":
        mostrarMateria ="Cs Naturales";
    break;
}

if (totalAlumnos<=0){
    console.log("No se ingresaron datos de alumnos en "+mostrarMateria);
}
else{
console.log ("Informe sobre el total de los ("+totalAlumnos+") alumnos de "+mostrarMateria+": ");
console.log("Total de alumnos Aprobados: "+contadorAprobados);
console.log("Total de alumnos Desaprobados: "+contadorDesaprobados);
}
