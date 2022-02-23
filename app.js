
//Se requiere o importa el Modulo fs - File System, para la gestión de archivos 
//y el modulo -moment- para gestion de fechas

let fs = require("fs");
let moment = require("moment");

//Requiriendo modulo creado - Propio
let myHeroes = require("./superheroes");


//console.log(fs);

//se utiliza la variable de tipo Modulo fs para leer el archivo
//.readFileSync: metodo que permite leer un archivo
// Primer Parámetro:  __dirname: constante para definir el directorio del archivo que queremos leer
// Sugundo parametro: utf-8 para respetar codificación dl archivo al ser leido. por elemplo tildes

let datos = fs.readFileSync(__dirname + "/prueba.txt", "utf-8");


//console.log(datos);
//console.log(moment().format('MMM Do YYYY'));
console.log(myHeroes[0].saludar());
console.log(myHeroes[1].saludar());
console.log(myHeroes[2].saludar());

