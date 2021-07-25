const colors = require('colors');
const fs = require('fs');

const crearArchivo = async(base = 5, listar=false, hasta=10) => {

	try {	

		let salida = '';
		let consola = '';
		for (let i = 0; i <= hasta; i++) {
			salida += `${base} * ${i} = ${base * i}\n`;
			consola += `${base} ${'x'.green} ${i} ${'='.green} ${base * i}\n`;
		}

		if(listar)
		{
			console.log('================'.green);
			console.log(' Tabla del '.yellow,base);
			console.log('================'.green);

			console.log(consola);
		}

		//Metodo Async
		fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
		return `Tabla del ${base} creada`;
	} catch(err) {
		throw err;
	}
}

module.exports = {
	crearArchivo
}

// const crearArchivo = (base = 5) => {

// 	console.log('================');
// 	console.log(' Tabla del ',base);
// 	console.log('================');

// 	let salida = '';

// 	for (let i = 0; i <= 10; i++) {
// 		salida += `${base} * ${i} = ${base * i}\n`;
// 	}

// 	console.log(salida);

// 	//Metodo Async
// 	fs.writeFileSync(`tabla-${base}.txt`, salida);
// 	console.log(`Tabla del ${base} creada`);
// }



// module.exports = {
// 	crearArchivo
// }


//Metodo sin Async
// fs.writeFile(`tabla-${base}.txt`, salida, (err) => {
// 	if(err) throw err;
// 	console.log(`Tabla del ${base} creada`);
// });