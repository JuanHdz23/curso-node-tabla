const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');

console.clear();

// const [ , , arg3 = '--base=5' ] = process.argv;
// const [ , base = 5 ] = arg3.split('=');

// console.log(base);

// const base = 7;


// console.log(argv);

// console.log('base: yargs', argv.base);



crearArchivo( argv.b, argv.l, argv.h )
    .then(msg => console.log(msg) )
    .catch( err => console.log(err) );

// console.log(process.argv);


// Se realiza una impresión de lo siguiente:
// [
//     'C:\\Program Files\\nodejs\\node.exe',
//     'C:\\Users\\JuanHernandez\\Desktop\\Node\\03-bases-node\\app2'
//   ]
//   { _: [], '$0': 'app2' }