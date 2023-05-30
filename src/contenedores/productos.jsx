import React from "react";

const productos=[
    {
        "id": 1,
        "nombre": "Juancito",
        "precio": 15000,
        "descripcion": "lorem dsfkjsd sdlgdslsg",
        "imagen": "/assets/images/picada_clasica.jpg",
        "stock": 20,
        "categoria": "tablas"
    }, {
        "id": 2,
        "nombre": "Kiri",
        "precio": 866224,
        "descripcion": "lorem dsfkjsd sdlgdslsg",
        "imagen": "/assets/images/picada_gourmet.jpg",
        "stock": 37,
        "categoria": "tablas"
  }, {
        "id": 3,
        "nombre": "Charity",
        "precio": 954746,
        "descripcion": "lorem dsfkjsd sdlgdslsg",
        "imagen": "/assets/images/picada_quesos.jpg",
        "stock": 78,
        "categoria": "tablas"
    }, {
        "id": 4,
        "nombre": "Nikolos",
        "precio": 394644,
        "descripcion": "lorem dsfkjsd sdlgdslsg",
        "imagen": "/assets/images/box1.jpg",
        "stock": 67,
        "categoria": "tablas"
    }, {
        "id": 5,
        "nombre": "Cynthia",
        "precio": 986836,
        "descripcion": "lorem dsfkjsd sdlgdslsg",
        "imagen": "/assets/images/vinoInicio.jpg",
        "stock": 50,
        "categoria": "bebidas"
  }, {
        "id": 6,
        "nombre": "Rolland",
        "precio": 186592,
        "descripcion": "lorem dsfkjsd sdlgdslsg",
        "imagen": "/assets/images/box3.jpg",
        "stock": 39,
        "categoria": "bebidas"
  }, {
        "id": 7,
        "nombre": "Norton",
        "precio": 968513,
        "descripcion": "lorem dsfkjsd sdlgdslsg",
        "imagen": "/assets/images/fermentum.jpg",
        "stock": 82,
        "categoria": "bebidas"
  }, {
        "id": 8,
        "nombre": "Dillie",
        "precio": 735817,
        "descripcion": "lorem dsfkjsd sdlgdslsg",
        "imagen": "/assets/images/escabeche.jpg",
        "stock": 4,
        "categoria": "bebidas"
  }, {
        "id": 9,
        "nombre": "Hasty",
        "precio": 625514,
        "descripcion": "lorem dsfkjsd sdlgdslsg",
        "imagen": "/assets/images/comboAceites.jpg",
        "stock": 98,
        "categoria": "combos"
  }, {
        "id": 10,
        "nombre": "Paddie",
        "precio": 988935,
        "descripcion": "lorem dsfkjsd sdlgdslsg",
        "imagen": "/assets/images/comboSalsasx3.jpg",
        "stock": 11,
        "categoria": "combos"
  }, {
        "id": 11,
        "nombre": "Frasco",
        "precio": 942230,
        "descripcion": "lorem dsfkjsd sdlgdslsg",
        "imagen": "/assets/images/vinoFurlan.jpg",
        "stock": 42,
        "categoria": "combos"
  }, {
        "id": 12,
        "nombre": "Asia",
        "precio": 819,
        "descripcion": "lorem dsfkjsd sdlgdslsg",
        "imagen": "/assets/images/vinoInicio.jpg",
        "stock": 99,
        "categoria": "combos"
  }];
    
export function getItems(){
      return new Promise((resolve,reject) => {
            setTimeout( () => {
                  resolve(productos);
            }, 1500)
      })
}

export function getSingleItem(id){
      return new Promise( (resolve, reject) =>{

            let itemFind = productos.find((item) =>{
                 
                       return item.id === Number(id);
            })

            setTimeout( () => {
                  if(itemFind) resolve(itemFind);
                  else reject(new Error("no se encontro el producto")); 

            },1500)
      })
}

export function getItemsByCategory(cat){

      return new Promise( (resolve, reject) =>{

            let itemFind = productos.filter((item) =>{
                 
                       return item.categoria === cat;
            })

            setTimeout( () => {
                  if(itemFind) resolve(itemFind);
                  else reject(new Error("no existe esta categoría")); 

            },1500)
      })
}