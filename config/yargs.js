const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
                .command('listar', 'Imprime en consola la tabla de multiplicar',opts)
                .command('crear', 'Genera una archivo con las multiplicaciones de la base',opts)
                .help()
                .argv;

module.exports = {
    argv
}