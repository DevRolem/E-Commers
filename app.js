const productos = [
    {
        id: "abrigo-01",
        titulo: "abrigo-01",
        imagen: "./img/Abrigos/01.jpg",
        categoria: {
            nombre: "Abrigos",
            id: "abrigo"
        },
        precio: 1000
    },
    {
        id: "abrigo-02",
        titulo: "abrigo-02",
        imagen: "./img/Abrigos/02.jpg",
        categoria: {
            nombre: "Abrigos",
            id: "abrigo"
        },
        precio: 1000
    },
    {
        id: "abrigo-03",
        titulo: "abrigo-03",
        imagen: "./img/Abrigos/03.jpg",
        categoria: {
            nombre: "Abrigos",
            id: "abrigo"
        },
        precio: 1000
    },
    {
        id: "abrigo-04",
        titulo: "abrigo-04",
        imagen: "./img/Abrigos/04.jpg",
        categoria: {
            nombre: "Abrigos",
            id: "abrigo"
        },
        precio: 1000
    },

    //CAMISETAS
    {
        id: "camiseta-01",
        titulo: "camiseta-01",
        imagen: "./img/Camisetas/01.jpg",
        categoria: {
            nombre: "Camisetas",
            id: "camisetas"
        },
        precio: 1000
    },
    {
        id: "camiseta-02",
        titulo: "camiseta-02",
        imagen: "./img/Camisetas/02.jpg",
        categoria: {
            nombre: "Camisetas",
            id: "camisetas"
        },
        precio: 1000
    },
    {
        id: "camiseta-03",
        titulo: "camiseta-03",
        imagen: "./img/Camisetas/03.jpg",
        categoria: {
            nombre: "Camisetas",
            id: "camisetas"
        },
        precio: 1000
    },
    {
        id: "camiseta-04",
        titulo: "camiseta-04",
        imagen: "./img/Camisetas/04.jpg",
        categoria: {
            nombre: "Camisetas",
            id: "camisetas"
        },
        precio: 1000
    },
    {
        id: "camiseta-05",
        titulo: "camiseta-05",
        imagen: "./img/Camisetas/05.jpg",
        categoria: {
            nombre: "Camisetas",
            id: "camisetas"
        },
        precio: 1000
    },
    {
        id: "camiseta-06",
        titulo: "camiseta-06",
        imagen: "./img/Camisetas/06.jpg",
        categoria: {
            nombre: "Camisetas",
            id: "camisetas"
        },
        precio: 1000
    },
    {
        id: "camiseta-07",
        titulo: "camiseta-07",
        imagen: "./img/Camisetas/07.jpg",
        categoria: {
            nombre: "Camisetas",
            id: "camisetas"
        },
        precio: 1000
    },
    {
        id: "camiseta-08",
        titulo: "camiseta-08",
        imagen: "./img/Camisetas/08.jpg",
        categoria: {
            nombre: "Camisetas",
            id: "camisetas"
        },
        precio: 1000
    },

    //PANTALONES
    {
        id: "pantalon-01",
        titulo: "pantalon-01",
        imagen: "./img/Pantalones/01.jpg",
        categoria: {
            nombre: "Pantalones",
            id: "Pantalones"
        },
        precio: 1000
    },
    {
        id: "pantalon-02",
        titulo: "pantalon-02",
        imagen: "./img/Pantalones/02.jpg",
        categoria: {
            nombre: "Pantalones",
            id: "Pantalones"
        },
        precio: 1000
    },
    {
        id: "pantalon-03",
        titulo: "pantalon-03",
        imagen: "./img/Pantalones/03.jpg",
        categoria: {
            nombre: "Pantalones",
            id: "Pantalones"
        },
        precio: 1000
    },
    {
        id: "pantalon-04",
        titulo: "pantalon-04",
        imagen: "./img/Pantalones/04.jpg",
        categoria: {
            nombre: "Pantalones",
            id: "Pantalones"
        },
        precio: 1000
    },
    {
        id: "pantalon-05",
        titulo: "pantalon-05",
        imagen: "./img/Pantalones/05.jpg",
        categoria: {
            nombre: "Pantalones",
            id: "Pantalones"
        },
        precio: 1000
    }
]

const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");
const numerito = document.querySelector(".numerito")



function cargarProductos(productosElegidos) {

    contenedorProductos.innerHTML = "";

    productosElegidos.forEach(producto => {

        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
            <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
                <div class="producto-detalles">
                <h3 class="producto-titulo">${producto.titulo}</h3>
                <p class="producto-precio">${producto.precio}</p>
                <button class="producto-agregar" id="${producto.id}">Agregar</button>
            </div>
        `;

        contenedorProductos.append(div);
    })

    actualizarBotonesAgregar();

}

cargarProductos(productos);


botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {

        botonesCategorias.forEach(boton => boton.classList.remove("active"))
        e.currentTarget.classList.add("active");

        if(e.currentTarget.id != "todos") {
            const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id);
            tituloPrincipal.innerText = productoCategoria.categoria.nombre;

            const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id)
            cargarProductos(productosBoton)
        } else{
            tituloPrincipal.innerText = "Todos los productos";
            cargarProductos(productos)
        }

    })
})

function actualizarBotonesAgregar (){
    botonesAgregar = document.querySelectorAll(".producto-agregar");

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito)
    })
}


let productosEnCarrito = []

let productosEnCarritoLS = localStorage.getItem("productos-en-carrito")

if (productosEnCarritoLS){
    productosEnCarrito = JSON.parse(productosEnCarritoLS);
    actualizarNumerito();
}else {
    productosEnCarrito = []
}

function agregarAlCarrito(e) {

    const idboton = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idboton)

    if(productosEnCarrito.some(producto => producto.id === idboton)){
        const index = productosEnCarrito.findIndex(producto => producto.id === idboton);
        productosEnCarrito.cantidad++;

    } else{
        productoAgregado.cantidad = 1
        productosEnCarrito.push(productoAgregado)

    }

    actualizarNumerito();

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito))
}

function actualizarNumerito () {
    let nuevoNumerito = productosEnCarrito.reduce((acc, producto)=> acc + producto.cantidad, 0)
    numerito.innerText = nuevoNumerito;
}

