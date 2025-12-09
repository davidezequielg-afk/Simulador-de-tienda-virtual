let clientes = [
    {
        id: 1, 
        usuario: "David", 
        email: "12@gmail", 
        contraseña: "David",
    }
];

let clientesCopia = [...clientes];
let continuar = true;
console.log(clientesCopia);

// Inicio de sesión

const iniciarSesion = () => {
    const email = document.getElementById("email");
    const contraseña = document.getElementById("contraseña")
    const mensaje = document.getElementById("mensaje-iniciosesion");
    const clienteencontrado = clientes.findIndex (clientesCopia => clientesCopia.correo === email.value && clientesCopia.password === contraseña.value)
    if (clienteencontrado !== -1) {
        mensaje.textContent = `Bienvenido nuevamente ${clientesCopia[clienteencontrado].usuario}`;        
        mensaje.className = "mostrar";  
    } else {
        mensaje.textContent = "Usuario y/o contraseña incorrectos.";
        mensaje.className = "mostrar";
    }}    
//

// Registro de usuarios
const mostrarformulario = () =>  {
  const formDiv = document.getElementById("formulario-registro");
  if (formDiv.style.display === "none") {
    formDiv.style.display = "block";
  } else {
    formDiv.style.display = "none";
  }
}
const mostrarMensaje = (texto, color) => {
  const mensajeDiv = document.getElementById("mensaje");
  mensajeDiv.textContent = texto;
  mensajeDiv.style.color = color;
}
const crearCuenta = (nuevoUsuario, nuevoEmail, nuevaContraseña) => {
  let usuarioExistente = clientes.find(cliente => cliente.usuario === nuevoUsuario);
  let emailExistente = clientes.find(cliente => cliente.email === nuevoEmail);
  if (usuarioExistente) {
    mostrarMensaje("El nombre de usuario ya existe");
    return;
  }
  if (emailExistente) {
    mostrarMensaje("El email ya está registrado");
    return;
  }
  if (nuevaContraseña.length < 8) {
    mostrarMensaje("La contraseña debe tener al menos 8 caracteres");
    return;
  }
  let nuevoId = clientes.length + 1;
  let nuevoCliente = {
    id: nuevoId,
    usuario: nuevoUsuario,
    email: nuevoEmail,
    contraseña: nuevaContraseña
  };
  clientes.push(nuevoCliente);
  mostrarMensaje(`Cuenta creada. Bienvenido, ${nuevoUsuario}`);
  document.getElementById("formulario-registro").style.display = "none";
};
document.getElementById("FormRegistro").addEventListener("submit", (e) => {
  e.preventDefault();
  const usuario = document.getElementById("usuario1").value;
  const email = document.getElementById("correo").value;
  const contraseña = document.getElementById("contraseña1").value;
  const confirmar = document.getElementById("confircontra").value;

  if (contraseña !== confirmar) {
    mostrarMensaje("Las contraseñas no coinciden");
    return;
  }
  crearCuenta(usuario, email, contraseña);
});
// 
// Productos

const productosOfertas = [
    {nombre: "Ofertas", precio: 0, img: ""},
];
const productosHigiene = [
    {nombre: "Shampoo Herbal", precio: 5400, img: "https://assets.unileversolutions.com/v1/111345151.png" },
    {nombre: "Jabón Líquido Espadol", precio: 2800, img: "https://www.farmax.com.ar/images/4901852.jpg"},
    {nombre: "Pasta Dental", precio: 3850, img: "https://i5.walmartimages.com.mx/gr/images/product-images/img_large/00750954668735L.jpg?odnHeight=612&odnWidth=612&odnBg=FFFFFF"},
    {nombre: "Enjuague Bucal", precio: 4500, img: "https://detqhtv6m6lzl.cloudfront.net/wp-content/uploads/2020/07/7891024027028-1.jpg"},
    {nombre: "Desodorante", precio: 1900, img: "https://tse4.mm.bing.net/th/id/OIP.66hHAHEpCa_Rcp1vPr0ZCwHaHa?rs=1&pid=ImgDetMain&o=7&rm=3"},
 ];

 const productosMedicamentos = [
    {nombre: "Paracetamol Bayer 500mg", precio: 1300, img: "https://farmalife.vteximg.com.br/arquivos/ids/179820-1200-1200/7793640992455.jpg?v=638151680579430000"},
    {nombre: "Ibuprofeno Actron 600", precio: 1900, img: "https://images.rappi.com.ar/products/601287518518_elwnxzbdqayb_904158285146_egfdtrlfbcgb_85159_1.png" },
    {nombre: "Alernix 20cps", precio: 7000, img: "https://elea.com/wp-content/uploads/Alernix-rapida-accion-x-20_105x52x25.png"} 
 ];
    const productosVitaminas = [
    {nombre: "Vitamina C VitaminWay comprimidos", precio: 25000, img: "https://tse1.mm.bing.net/th/id/OIP.ec-YRPRjfijpJ7YJaA3VWAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3"},
 ];
 productos = [...productosOfertas, ...productosHigiene, ...productosMedicamentos, ...productosVitaminas];
 
// Menú de productos
const CuadroProd = (id, titulo, productos = []) => {
  const ProductosCont = document.getElementById("contenido");
  const cuadroCprod = document.getElementById(id);

  if (cuadroCprod) {
    ProductosCont.removeChild(cuadroCprod);
  } else {
    ProductosCont.innerHTML = "";
    const cuadro = document.createElement("div");
    cuadro.className = "cuadro";
    cuadro.id = id;

    // Título del cuadro
    const tituloElem = document.createElement("h3");
    tituloElem.textContent = titulo;
    cuadro.appendChild(tituloElem);

    // Productos
    productos.forEach(p => {
      const prodDiv = document.createElement("div");
      prodDiv.className = "producto";

      const img = document.createElement("img");
      img.src = p.img;
      img.alt = p.nombre;

      const info = document.createElement("div");
      const nombre = document.createElement("h4");
      nombre.textContent = p.nombre;

      const precio = document.createElement("span");
      precio.textContent = "$" + p.precio;

      const boton = document.createElement("button");
      boton.className = "btn-agregar";
      boton.textContent = "Agregar al carrito";
      boton.addEventListener("click", () => agregarAlCarrito(p));

      info.appendChild(nombre);
      info.appendChild(precio);
      info.appendChild(boton);

      prodDiv.appendChild(img);
      prodDiv.appendChild(info);
      cuadro.appendChild(prodDiv);
    });

    ProductosCont.appendChild(cuadro);
  }
};

    document.getElementById("menuOfertas").addEventListener("click", () => { CuadroProd("ofertas", "Ofertas disponibles", productosOfertas); }); 
    document.getElementById("menuMedicamentos").addEventListener("click", () => { CuadroProd("medicamentos", "Lista de medicamentos", productosMedicamentos); }); 
    document.getElementById("menuHigiene").addEventListener("click", () => { CuadroProd("higiene", "Productos de higiene", productosHigiene); }); 
    document.getElementById("menuVitaminas").addEventListener("click", () => { CuadroProd("vitaminas", "Vitaminas y suplementos", productosVitaminas); }); 
    document.getElementById("menuContacto").addEventListener("click", () => { CuadroProd("contacto", "Formulario de contacto"); });

//  


// carrito
let carrito = [];

const mostrarCarrito = () =>  {
  const contenedorCarrito = document.getElementById("carrito-lista");
  contenedorCarrito.innerHTML = "";
  
  carrito.forEach(prod => {
    const itemDiv = document.createElement("div");
    itemDiv.className = "item-carrito";
    itemDiv.textContent = `${prod.nombre} x${prod.cantidad} - $${prod.precio * prod.cantidad}`;

    const btnEliminar = document.createElement("button");
    btnEliminar.textContent = "-1";
    btnEliminar.style.marginLeft = "5px";
    btnEliminar.addEventListener("click", () => eliminarDelCarrito(prod.nombre));

    itemDiv.appendChild(btnEliminar);
    contenedorCarrito.appendChild(itemDiv);
  });
  
  const total = carrito.reduce((acc, prod) => acc + prod.precio * prod.cantidad, 0);
  const totalDiv = document.createElement("div");
  totalDiv.className = "total-carrito";
  totalDiv.textContent = `Total: $${total}`;
  contenedorCarrito.appendChild(totalDiv);
};

const agregarAlCarrito = (producto) => {
  let item = carrito.find(p => p.nombre === producto.nombre);
  if (item) {
    item.cantidad += 1;
  } else {
    carrito.push({ ...producto, cantidad: 1 });
  }
  mostrarCarrito();
};

const eliminarDelCarrito = (nombreProducto) => {
  let item = carrito.find(p => p.nombre === nombreProducto);
  if (item) {
    item.cantidad -= 1;
    if (item.cantidad <= 0) {
      carrito = carrito.filter(p => p.nombre !== nombreProducto);
    }
    mostrarCarrito();
  }
};


