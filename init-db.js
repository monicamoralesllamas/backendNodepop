//--------------Inicializar la base de datos con los datos mínimos para funcionar---------
const readline = require('readline');

//Cargar los modelos que se van a usar
const Anuncio = require('./models/Anuncio');

async function main(){
    //preguntar al usuario si esta seguro de que quiere continuar
    const continuar= await preguntaSiNo('Vas a proceder a borrar la base de datos,¿Quieres seguir con el proceso?')
    if(!continuar){
        process.exit();
    }
    
    //Conectar a la base de datos 
    const connection = require('./lib/connectMongoose')

    //Inicializar la colección de anuncios
    await initAnuncios();

    //Desconectar de la base de datos
    connection.close();

}

main().catch(err=> console.log('Hubo un error',err));

async function initAnuncios(){
    //Borrar todos los anuncios de la colección de anuncios
    const result = await Anuncio.deleteMany();
    console.log(result);
    //Crear anuncios iniciales
    const inserted = await Anuncio.insertMany( [
            {
            "nombre": "Bicicleta",
            "venta": true,
            "precio": 230.15,
            "foto": "patines.jpg",
            "tags": [ "lifestyle", "motor"]
            },
            {
            "nombre": "iPhone 3GS",
            "venta": false,
            "precio": 50.00,
            "foto": "iphone.png",
            "tags": [ "lifestyle", "mobile"]},
            {
            "nombre": "Patines",
            "venta": false,
            "precio": 85.00,
            "foto": "patines.png",
            "tags": [ "lifestyle", "motor"]}
    ]);
    console.log(`Creados ${inserted.length} anuncios. `)
}

    function preguntaSiNo(texto){
        return new Promise((resolve,reject)=>{
            const interface = readline.createInterface({
                input: process.stdin,
                output: process.stdout
        });
        interface.question(texto,respuesta =>{
            interface.close();
            if (respuesta.toLowerCase()=== 'si'){
                resolve(true);
                return;
                }
                resolve(false);
            })   
        }) 
    }

