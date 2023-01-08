# **NODEPOP**
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
Se lanza pregunta de seguridad para confirmar se desea borar la base de datos e incializarla de nuevo. 

## Arrancar la aplicación:
```sh
npm run dev
````



# DOCUMENTACIÓN API :
El API se puede usar con
Operaciones que realiza el API:

## **GET**

* **Lista de anuncios :**

    GET/apiv1/anuncios
    ```sh
    RUTA:
    http://localhost:3000/apiv1/anuncios
    ```

* **Lista de anuncios con posibilidad de paginación con skip o limit:**

    GET/apiv1/anuncios?skip=0&limit=2
    ```sh
    RUTA:
    http://localhost:3000/apiv1/anuncios?skip=0&limit=2
    ```

* **Obtener filtros por tag:**

    GET/apiv1/anuncios?tags=motor
    ```sh
    RUTA:
    http://localhost:3000/apiv1/anuncios?tags=motor
    ```

* **Con filtro por tipo de anuncio(venta o búsqueda):**

    GET/apiv1/anuncios?venta=false
    ```sh
    RUTA:
    http://localhost:3000/apiv1/anuncios?venta=false
    ```

* **Por rango de precio exacto:**

    GET/apiv1/anuncios?precio=50
    ```sh
    RUTA: http://localhost:3000/apiv1/anuncios?precio=50
    ```

* **Por nombre de artículo:**

    GET/apiv1/anuncios?nombre=Bicicleta
    ```sh
    RUTA:http://localhost:3000/apiv1/anuncios?nombre=Bicicleta
    ```
* **Lista de tags existentes:**

    GET /apiv1/anuncios/tags
    ```sh
    RUTA:
    http://localhost:3000/apiv1/anuncios/tags
    ```

## **POST**
* **Creación de anuncio:**

    POST/apiv1/anuncios

## **PUT**
* **Actualizar el anuncio:**

    PUT/apiv1/anuncios/(id) (body = anuncioData)

## **DELETE**
* **Eliminar anuncio seleccionado por id:**

    DELETE/apiv1/anuncios/:id


## **IMAGÉNES**
* **Visualizar las imágenes de los anuncios:**

    ```sh
    RUTA:
    http://localhost:3000/images/anuncios/iphone.jpg
    ```



