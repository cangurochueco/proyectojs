const carrito = json.parce(localStorage.getItem("carrito")) || [];

const productos = [
    {
        id: "abrigo-01",
        titulo:"abrigo 01",
        precio:54000,
        img:"./img"
    },
    {
        id: "abrigo-02",
        titulo:"abrigo 02",
        precio:54000,
        img:"./img"
    },
    {
        id: "abrigo-03",
        titulo:"abrigo 03",
        precio:54000,
        img:"./img"
    }
];

const contenedorproductos =document.querySelector("#prodctos");
const carritoVacio = document.querySelector("#carrito-vacio");
const carritoproductos = document.querySelector
("#carrito-productos");
const carritototal =document.querySelector("#carrito-total");

productos.forEach((producto) =>{
    let div = document.createElement("div");
    div.classList.add("producto");
    div.innerHTML = `
    <img class="producto-img src="$"{producto.img}" alt="">
    <h3>${producto.titulo}</h3>
    <p>$${producto.precio}}</p>
    `;

    let button = document.createElement("button");
    button.classList.add("producto-btn");
    button.innerText = "agregar al carrito";
    button.addEventListener("click" , () => {
        agregaralcarrito(producto);
    })

    div.append(botton);
    contenedorproductos.append(div);
});

const agregaralcarrito = (productos) => {
    let productoencarrito = carrito.find((item) => item.id === producto.id)
    carrito.push({...producto, cantidad: 1});
    actualizarcarrito();
}

function actualizarcarrito() {
    if (carrito.length ===0) {
        carritoVacio.classList.remove("d-none");
        carritoproductos.classList.add("d-none");
    } else{
        carritoVacio.classList.add("d-none");
        carritoproductos.classList.remove("d-none")

        carritoproductos.innerHTML = "";
        carrito.forEach((producto) =>{
            let div = document.createElement("div");
            div.classList.add("carrito-producto");
            div.innerHTML =`
            <h3>${producto.titulo}</h3>
            <p>$${producto.precio}</p>
            `;

            let button = document.createElement("button");
            button.classList.add("carrito-producto-btns");
            button.innerText ="✖"
            button.addEventListener("click" ,() => {
                borrardelcarrito(producto);
            } )

            div.append(button);
            carritoproductos.append(div);
        } )                 
    }
    actualizartotal();

    localStorage.setItem("carrito" ,json.stringify(carrito)); 
}

function borrrardelcarrito(producto) {
    const indice = carrito.findIndex((item) => item.id ===
producto.id)
}

function actualizartotal() {
    const total = carrito.reduce((acc, prod) => acc + prod.precio, 0);
    carritototal.innerText ="$" + total;
}