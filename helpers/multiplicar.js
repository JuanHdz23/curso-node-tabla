const fs = require('fs');
const { resolve } = require('path');
const { rejects } = require('assert');
const colors = require('colors');

// const crearArchivo = ( base = 5 ) => {
//     return new Promise((resolve, rejects) => {
//         // console.log(`=========================`);
//         // console.log(`   Tabla del: ${base}    `);
//         // console.log(`=========================`);
//         let salida = '';
//         for(let i = 1; i <= 10; i++) {
//             salida += `${base} x ${i} = ${ i*base } \n`;
//         }
//         // console.log(salida);

//         try {
//             fs.writeFileSync(`tabla-${base}.txt`, salida);
//             // console.log(`Se guardo correctamente el archivo tabla-${base}.txt`);
//             resolve(`Se guardo correctamente el archivo tabla-${base}.txt`);
//         } catch (error) {
//             rejects(error);
//         }
        
//     });
// };

const crearArchivo = async( base = 5, listar = false, hasta = 10 ) => {
    
    let salida, consola = '';

    for(let i = 1; i <= hasta; i++) {
        salida += `${base} x ${i} = ${ i*base } \n`;
        consola += `${ base } ${ 'x'.green } ${i} ${ '='.green } ${ i*base } \n`;
    }

    if ( listar  ) {
        console.log('========================='.green);
        console.log(`   Tabla del: ${base}    `.rainbow);
        console.log('========================='.green);
        console.log(consola); 
    }

    try {
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        return `Se guardo correctamente el archivo tabla-${base}.txt`.cyan;
    } catch (error) {
        throw error.red;
    }
};

module.exports = {
    crearArchivo
};