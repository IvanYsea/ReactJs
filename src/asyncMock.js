const products = [
  {
    id: 1,
    title: "placa de video RTX 3060",
    price: "$500",
    description:
      "Nueva placa de video que te permitira jugar al maximo de fps a todos tus juegos",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_905241-MLA48655068857_122021-O.webp",
  },
  {
    id: 2,
    title: "procesador intel core I7",
    price: "$200",
    description:
      "Nueva placa de video que te permitira jugar al maximo de fps a todos tus juegos y a mayor velocidad",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_615798-MLA28229872967_092018-O.webp",
  },
  {
    id: 3,
    title: "Monitor 144Hz",
    price: "$150",
    description:
      "Monitor con taza de refresco a 144hz, disfruta de una jugabilidad mas fluida",
    image:
      "https://mexx-img-2019.s3.amazonaws.com/Monitor-Gamer-24-LG-Full-Hd-144Hz-1Ms-Freesync-24GN60R-B_44686_1.jpeg",
  },
  {
    id: 4,
    title: "Mouse Logitech",
    price: "$60",
    description:
      "Con este nuevo mouse podras tener una mayor facilidad para utilizar tu equipo",
    image:
      "https://wallnet.com.ar/wp-content/uploads/2022/05/219_23-11-2021-04-11-55-2-g203-blanco.jpg",
  },
  {
    id: 5,
    title: "Mouse Logitech",
    price: "$50",
    description:
      "Nuevos Auriculares Hyperex, para disfrutar de un sonido en buena calidad ya sea mirando pelis o disfrutando de tu game",
    image:
      "https://www.hp.com/es-es/shop/Html/Merch/Images/c07794364_500x367.jpg",
  },
];

export const getProducts = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve(products)
    },2000)
})