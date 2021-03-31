// Imprimir la tabla del 5
// const fs = require('fs');
const { crearArchivo } = require('./helpers/multiplicar');
console.clear();

const base = 7;

// console.log(
// `=========================
//     Tabla del: ${base}
// =========================`
// );

// let salida = '';

// for(let i = 1; i <= 10; i++) {
//     // console.log(`${base} x ${i} = ${ i*base }`);
//     salida += `${base} x ${i} = ${ i*base } \n`;
// }

// console.log(salida);

// fs.writeFile(`tabla-${base}.txt`, salida, (err) => {
//     if (err) throw err;
//     console.log(`Se guardo correctamente el archivo tabla-${base}.txt`);
// });

// fs.writeFileSync(`tabla-${base}.txt`, salida);

// console.log(`Se guardo correctamente el archivo tabla-${base}.txt`);

// const tablaCinco = () => {
//     for(let i = 1; i <= 10; i++) {
//         console.log(`5 x ${i} = ${ i*5 }`);
//     } 
// };

// tablaCinco();

crearArchivo( base )
    .then(msg => console.log(msg) )
    .catch( err => console.log(err) );