'use stritct'

const express= require('express');
var createError = require('http-errors');
const Anuncio = require('../../models/Anuncio');

const router = express.Router();


//------------OPERACIONES CRUD------------------


//GET/apiv1/anuncios
//devuelve una lista de los anuncios, en la que se puede:
//  filtrar por nombre, precio 
router.get('/', async(req,res,next)=>{
    try{
    //filtros
    const nombre=req.query.nombre;
    const precio = req.query.precio;
    const tags = req.query.tags;
    const venta = req.query.venta;
    //paginación
    const skip = req.query.skip;
    const limit = req.query.limit; ///apiv1/anuncios?skip=0&limit=2 (ejemplo para que te devuelva del anuncio 1 al 2)
    //selección de campos
    const fields = req.query.fields; //apiv1/anuncios?fields=nombre (ejemplo para filtrar por campos)
    //ordenación 
    const sort = req.query.sort;    //apiv1/anuncios?sort=precio  (ordena de menor a mayor)
                                    //apiv1/anuncios?sort=-precio (ordena de mayor a menor))

    const filtro = {};

    
    if (nombre){
        filtro.nombre = nombre; //apiv1/anuncios?nombre=Patines (ejemplo para filtrar por nombre)
    }
    if (precio){
        filtro.precio = precio; //apiv1/anuncios?precio=125 (ejemplo para filtrar por precio)
    }
    if (tags){
        filtro.tags = tags; // RUTA: /apiv1/anuncios?tags=motor
    }
    if (venta){
        filtro.venta = venta; // RUTA: /apiv1/anuncios?venta=true
    }
    
    const anuncios= await Anuncio.lista(filtro, skip, limit, fields, sort);

    res.json({results: anuncios});
    }catch(err){
    next(err);
    }
})

//GET/apiv1/tags 
//Devuelve los tags permitidos
router.get('/tags', function (req, res) {
    res.json({ ok: true, result: Anuncio.allowTags() });
  });

// GET/apiv1/anuncios/(id)
// Devuelve el anuncio del id marcado 

router.get('/:id',async (req,res,next)=>{
    try{
        const id = req.params.id;
        //buscar un anuncio en la Base de Datos
        const anuncio = await Anuncio.findById(id);
        res.json({result:anuncio});
    } catch(err){
        next(err);
    }

})

//Para actualizar el anuncio 
//PUT/apiv1/anuncios/(id) (body = anuncioData)
router.put('/:id', async(req, res,next)=>{
    try {

    const id = req.params.id;
    const anuncioData = req.body;

    const anuncioActualizado = await Anuncio.findOneAndUpdate({_id:id},anuncioData, {
        new: true // Para que devuelva el anuncio actualizado
    });

    res.json({result: anuncioActualizado});


}catch(err){
    next(err);
}})

//POST/apiv1/anuncios
//Crear un anuncio

router.post('/', async (req,res,next)=>{
     try{

        const anuncioData = req.body;
        
        //instanciar un nuevo anuncio en la memoria
        const anuncio = new Anuncio(anuncioData);


        //guardamos el anuncio en la base de datos
        const anuncioGuardado = await anuncio.save();

        res.json({result: anuncioGuardado})
     
   } catch (err) {
    next(err);
   }
   });




//DELETE/apiv1/anuncios/:id
//Eliminar el anuncio seleccionado por el id

router.delete('/:id', async(req,res,next)=>{
    try {

        const id = req.params.id;

        const anuncio = await Anuncio.findById(id);
        if (!anuncio){
            
            return next (createError(404));
        }

        await Anuncio.deleteOne({_id:id});

        res.json();

    } catch (err) {
        next(err);
    }
})

module.exports = router;
