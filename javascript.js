var v_Nombre 
var v_Nota1
var v_Nota2
var v_Nota3
var v_Promedio

v_Nombre = prompt('Nombre del alumno: ');
v_Nota1 = Number(prompt('Primer nota: '));
v_Nota2 = Number(prompt('Segunda nota:'));
v_Nota3 = Number(prompt('Tercer nota: '));

v_Promedio = (v_Nota1 + v_Nota2 + v_Nota3 ) / 3;

alert ('El alumno '+ v_Nombre + ' tiene un promedio de ' + v_Promedio);