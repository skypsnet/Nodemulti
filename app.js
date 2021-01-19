
const {argv} = require('./config/yargs');
const colors = require('colors');

const {crearArchivo, listarTabla} = require('./multiplicar/multiplicar');
// let base = '5';

// console.log(process.argv);
// let argv2 = process.argv;

let comando = argv._[0];

switch(comando){
   
    case 'listar':
        console.log('Listar');
        listarTabla(argv.base,argv.limite);
         
    break;

    case 'crear':
    
    crearArchivo(argv.base,argv.limite)
   .then(archivo => {
      console.log(`Archivo creado:`, colors.green(`${archivo}`))
   }).catch(e =>{
       console.log(e)
   });

    break;

    default:
        console.log('Comando no reconocido');
   

}

console.log(argv)
// let base = parametro.split('=')[1]

// console.log(argv);
// console.log(argv2);
// console.log('Limite', argv.limite);

