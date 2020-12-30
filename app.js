const {argv} = require('./config/yargs')

const { crearArchivo,listarTabla }  = require('./multiplicar/multiplicar')

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${ archivo }`))
            .catch(e => console.log(e));
        console.log('crear');
        break;
    default:
        console.log('Comando no reconocido');
        break;
}


//let base = 'abc';

//let argv2 = process.argv;

//console.log(argv.limite);

// let parametro = argv[2];

// let base = parametro.split('=')[1]

//console.log(parametro)
// crearArchivo(base)
//     .then(archivo => console.log(`Archivo creado: ${ archivo }`))
//     .catch(e => console.log(e));