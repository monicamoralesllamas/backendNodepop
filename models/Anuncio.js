'use strict';

//definir el esquema del anuncio
const mongoose = require('mongoose');

const anuncioSchema = mongoose.Schema({
    nombre: {type: String, index: true},
    venta: {type:Boolean, index: true},
    precio: {type: Number, index: true},
    foto: {type: String},
    tags:{type: [String], index: true}
    });



  //creamos lista de tags existentes
  anuncioSchema.statics.allowTags = function(){
    return ['work','lifestyle','motor','mobile','fashion']
  };
  
  //creamos un modelo estatico
  
  anuncioSchema.statics.lista = function(filtro, skip, limit, fields, sort){
    const query = Anuncio.find(filtro); //esto devuelve la query sin ejecutar
    query.skip(skip);
    query.limit(limit);
    query.select(fields); //seleccionar campos unicos 
    query.sort(sort); //ordenar
    return query.exec() // se ejecuta la consulta y se devuelve la promesa
  }

//crear modelo
const Anuncio = mongoose.model('Anuncio', anuncioSchema);


//exportar modelo
module.exports = Anuncio;


