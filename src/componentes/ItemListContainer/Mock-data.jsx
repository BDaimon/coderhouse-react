
import masterCarne from '../../imagenesProducto/latacat.jpeg'
import balanceCachorro from '../../imagenesProducto/balance cachorro.jpeg'
import masterSnack from '../../imagenesProducto/mastersnack.jpeg'
import masterPollo from '../../imagenesProducto/trocitospollo.jpeg'
import masterSalmon from '../../imagenesProducto/trocitossab.jpeg'
import atunRojo from '../../imagenesProducto/latacat.jpeg'
import proplanKitten from '../../imagenesProducto/4.jpeg'
import masterCatAdulto from '../../imagenesProducto/mcat.jpeg'
import masterDogAdult from '../../imagenesProducto/masterdog.jpeg'
import orijenAdult from '../../imagenesProducto/11.jpeg'

 const productos = [
  {
    id: 1,
    nombre: "Master Cat",
    descripcion: "Alimento para gatos sabor carne.",
    precio: 10000,
    imagen: masterCarne,
    categoria: "gato",
    cantidad: 1,
  },

  {
    id: 2,
    nombre: "Balance",
    descripcion: "Alimento para perros cachorro, sabor carne.",
    precio: 20000,
    imagen:balanceCachorro,
    categoria: "perro",
    cantidad: 1,
  },

  {
    id: 3,
    nombre: "Master Dog",
    descripcion: "Snack para perros tipo huesitos.",
    precio: 2500,
    imagen: masterSnack,
    categoria: "perro",
    cantidad: 1,
  },

  {
    id: 4,
    nombre: "Master Dog",
    descripcion: "Alimento para perros sabor pollo.",
    precio: 1150,
    imagen: masterPollo,
    categoria: "perro",
    cantidad: 1,
  },

  {
    id: 5,
    nombre: "Master Cat",
    descripcion: "Alimento para gato sabor salmon y atún",
    precio: 10000,
    imagen: masterSalmon,
    categoria: "gato",
    cantidad: 1,
  },

  {
    id: 6,
    nombre: "Master Cat",
    descripcion: "Alimento para gato, Atun rojo.",
    precio: 2100,
    imagen: atunRojo,
    categoria: "gato",
    cantidad: 1,
  },
  {
    id: 7,
    nombre: "Pro Plan",
    descripcion: "Alimento para gatitos, sabor carne y pavo.",
    precio: 10000,
    imagen:proplanKitten,
    categoria: "gato",
    cantidad: 1,
  },
  {
    id: 8,
    nombre: "Master Cat",
    descripcion: "Alimento para gatos adultos, sabor carne.",
    precio: 2500,
    imagen: masterCatAdulto,
    categoria: "gato",
    cantidad: 1,
  },
  {
    id: 9,
    nombre: "Master Dog",
    descripcion: "Alimento para perro, sabor carne",
    precio: 10000,
    imagen: masterDogAdult,
    categoria: "perro",
    cantidad: 1,
  },
  {
    id: 10,
    nombre: "Orijen",
    descripcion: "Alimento para perros adultos, cinco sabores.",
    precio: 10000,
    imagen: orijenAdult,
    categoria: "perro",
    cantidad: 1,
  },
];

export default productos;
