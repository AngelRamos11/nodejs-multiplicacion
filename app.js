const { crearArchivo, listarTabla } = require('./multiplicar/multiplicacion');
const argumentos = require('yargs')
    .command('listar','Imprime en consola la tabla de multiplicar', {
        base: {
            demand: true,
            alias: 'b'
        },
        limite: {
            alias: 'l',
            default: 10
        }
    })
    .command('crear','Imprime en consola la tabla de multiplicar', {
        base: {
            demand: true,
            alias: 'b'
        },
        // limite: {
        //     alias: 'l',
        //     default: 10
        // }
    })
    .help()
    .argv;

// let base = 7;
let comando = argumentos._[0];

switch (comando){
    case 'listar':
        listarTabla(argumentos.base, argumentos.limite);
        break;
    case 'crear':
        crearArchivo(argumentos.base);
    break;
    
    default:
        console.log('comando no reconocido');
    }

// crearArchivo (base)
// .then(respuesta => console.log(`Archivo Creado: ${respuesta}`))
// .catch(error => console.log(error));