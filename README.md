# Nodepop
Práctica WEB-API/Node.js/MongoDB - Bootcamp Glovo 2022

## Instalación
```sh
 git clone https://github.com/monicamoralesllamas/backendNodepop.git
 npm install
```


## Inicializar la base de datos :
`````sh
npm run init-db
``````


## Arrancar la la aplicación en producción:
```sh
npm start
````

Start the application in development with:
```sh
npm run dev
````

# API Documentation
Operaciones que realiza el API:

## Lista de anuncios con posibilidad de paginación:
```sh
RUTA:
http://localhost:3000/apiv1/anuncios

```
## Con filtros por tag:
```sh
RUTA:
http://localhost:3000/apiv1/anuncios?tags=motor
GET/apiv1/anuncios?tags=motor
```

## Con filtro por tipo de anuncio(venta o búsqueda):
```sh
RUTA:
http://localhost:3000/apiv1/anuncios?venta=false
GET/apiv1/anuncios?venta=false
```

## Por rango de precio exacto:
```sh
RUTA: http://localhost:3000/apiv1/anuncios?precio=50
GET/apiv1/anuncios?precio=50
```
## Por nombre de artículo:
```sh
RUTA:http://localhost:3000/apiv1/anuncios?nombre=Bicicleta
GET/apiv1/anuncios?nombre=Bicicleta
```

## Creación de anuncio:
```sh
RUTA:
POST/apiv1/anuncios
```



