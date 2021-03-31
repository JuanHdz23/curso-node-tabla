const argv = require('yargs')
                .options('b', {
                    alias: 'base',
                    type: 'number',
                    demandOption: true,
                    describe: 'Es la base de la tabla de multiplicar'
                })
                .options('l', {
                    alias: 'listar',
                    type: 'boolean',
                    default: false,
                    describe: 'Muestra la tabla en consola'
                })
                .options('h', {
                    alias: 'hasta',
                    type: 'number',
                    default: 10,
                    describe: 'Hasta que número se requiere la tabla'
                })
                .check((argv, options) => {
                    if ( isNaN( argv.b ) ){
                        throw 'La base debe de ser un numero'
                    }
                    return true;
                    // console.log('yargs', argv);
                })
                .argv;

module.exports = argv;