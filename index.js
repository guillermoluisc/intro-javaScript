let nombre_ciudad=`Chacabuco`
console.log(`Antes del cambio el valor de la variable nombre_ciudad tiene el valor: `+nombre_ciudad)
let numero_random=Math.floor(Math.random()*10)
nombre_ciudad=numero_random
console.log(`Numero random generado aleatoriamente: `+numero_random)
console.log(`Después del cambio el valor de la variable nombre_ciudad tiene el valor: `+nombre_ciudad)
const nombre=`Guillermo Luis`
const apellido=`Casanova`
const nombre_completo=`${nombre} ${apellido}`
console.log(nombre_completo)
// Trabajo con Objetos----

// Definir un objeto a partir de las propiedades que se muestran en la siguiente tabla y almacenarlo en una variable llamada celular :

const celular = {
    marca: 'Samsung ',
    color: 'azul',
    precio:19000,
    anio_creacion:2020  
}

// Mostrar (en un console log) el valor de la key precio de dicho objeto.
console.log(celular.precio)
// Insertar la key stock con el valor true .
celular.stock=true
console.log(celular)
// Modificar el valor de la llave year anio_creacion 2017.
celular.anio_creacion=2017
console.log(celular)

// Eliminar la key marca.
delete celular.marca
console.log(celular)


// -Imprimir todas las llaves del hash almacenado en la variable celular con su respectivo valor. Ayuda : Una forma de recorrer las propiedades de un objeto es utilizando Object.keys:
//con Object.keys() imprimo solo los valores
console.log(Object.keys(celular))
for(x in c=Object.keys(celular) ){
    let value =celular
    console.log("la clave es ",c[x], " y el valor es: ", celular[c[x]])
}





//AREGLOS
const arrego=[1, 2, 3, 4]
let arreglo_dos=[...arrego, 5]
console.log(arreglo_dos)

const arreglo_tres=arreglo_dos.map(function(x){
   return x*5
})
console.log(arreglo_tres)


// destructuring 
const person = {
    name: 'Pepe',
    age: 26,
    hobbies: ['chess', 'running', 'basket']
}
//le cambie el nombre a nombrep ya que sino interfería con el nombre declarado mas arriba
const {name:nombrep}=person
const  {age:edad}=person
console.log(`${nombrep} ${edad} ${person.hobbies}`)