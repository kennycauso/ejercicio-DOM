/***************************/
/* Ejercicios con el DOM: */
/**************************/
/*
- Crear tabla que contenga solo usuarios que tengan correo de Academlo (podemos usar método [endsWith](https://www.w3schools.com/jsref/jsref_endswith.asp))
- Crear una tabla que muestre a las personas en rango de 20 y 40 años
- Crear una tabla que contenga la información de todos los usuarios incluyendo sus redes sociales
*/

const usuarios = [
  {
    nombre: 'Erik',
    edad: 29,
    correo: 'erik@academlo.com',
    social: [
      { nombre: 'facebook', url: 'facebook/erik' },
      { nombre: 'twitter', url: 'twitter/erik' }
    ],
    genero: 'Male'
  },
  {
    nombre: 'Georg',
    edad: 33,
    correo: 'georg@academlo.com',
    social: [
      { nombre: 'facebook', url: 'facebook/georg' },
      { nombre: 'twitter', url: 'twitter/georg' }
    ],
    genero: 'Male'
  },
  {
    nombre: 'Andrea',
    edad: 42,
    correo: 'andrea@hotmail.com',
    social: [
      { nombre: 'facebook', url: 'facebook/andrea' },
      { nombre: 'twitter', url: 'twitter/andrea' }
    ],
    genero: 'Female'
  },
  {
    nombre: 'Oscar',
    edad: 31,
    correo: 'oscar@academlo.com',
    social: [
      { nombre: 'facebook', url: 'facebook/oscar' },
      { nombre: 'twitter', url: 'twiter/oscar' }
    ],
    genero: 'Male'
  },
  {
    nombre: 'Daniela',
    edad: 22,
    correo: 'daniela@uaq.mx',
    social: [
      { nombre: 'facebook', url: 'facebook/andrea' },
      { nombre: 'twitter', url: 'twitter/andrea' }
    ],
    genero: 'Female'
  }
]

// const frutas = [{nombre: 'fresa', color: 'rojo'}, {nombre: 'fresa', color: 'rojo'}]

// let html = ''

// for (let fruta of frutas) {
//   html += `<div>${fruta.nombre}</div>`
//   html += `<div>${fruta.color}</div>`
// }

// const userEmail = document.getElementById('user-table-email')
// userEmail.innerHTML = html


// PRIMER EJERCICIO:
let tagList = "";
for(let user of usuarios){
  if(user.correo.endsWith("academlo.com")){
    tagList += `<div>${user.nombre}</div><div>${user.correo}</div>`;
  }
}
const userEmail = document.getElementById("user-table-email");
userEmail.innerHTML = tagList;


// SEGUNDO EJERCICIO:
let tagList2 = "";
for(let user of usuarios){
  if(20 <= user.edad && user.edad <= 40){
    tagList2 += `<div>${user.nombre}</div><div>${user.edad}</div>`
  }
}
const userRange = document.getElementById("user-table-range");
userRange.innerHTML = tagList2;


// TERCER EJERCICIO:
let tagList3 = "";
let tagSocial = "";
for(let user of usuarios){
  tagList3 += `<div>${user.nombre}</div>
                <div>${user.edad}</div>
                <div>${user.correo}</div>`;
  for(let social of user.social){
    tagSocial += `<div>${social.nombre}</div><div>${social.url}</div>`;
  }

  tagList3 += `<div>${tagSocial}</div>
                <div>${user.genero}</div>`;
  
  tagSocial = "";
}
let userInfo = document.getElementById("user-table-info");
userInfo.innerHTML = tagList3;