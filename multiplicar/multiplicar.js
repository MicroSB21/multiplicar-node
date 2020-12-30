const fs = require('fs')
const colors = require('colors')

const listarTabla = (base, limite = 10) => {
    console.log('====================='.green);
    console.log(`Tabla de ${base}` .green);
    console.log('====================='.green);

    for (let index = 0; index <= limite; index++) {
        console.log( `${base} * ${index} = ${ base * index} \n`);
    }
}

const crearArchivo = ( base, limite = 10 ) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${ base } no es un número`);
            return;
        }

        let dataRaw ='';

        for (let index = 1; index <= limite; index++) {
            dataRaw += `${base} * ${index} = ${ base * index} \n`;
        }

        const data = new Uint8Array(Buffer.from(dataRaw));
        fs.writeFile(`tablas/tabla-${ base }.txt`, data, (err) => {

        if (err) 
            reject(err);
        else
            resolve( colors.green( `tabla-${ base }.txt`) )
        });

    })
}

module.exports = {
    crearArchivo,
    listarTabla
}

