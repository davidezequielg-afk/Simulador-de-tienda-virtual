let clientes = JSON.parse(localStorage.getItem("clientes")) || [
    {
        id: 0,
        usuario: "admin",
        email: "",
        contraseña: "",
    }
];
localStorage.setItem("clientes", JSON.stringify(clientes));

// Inicio de sesión
const iniciarSesion = () => {
    const usuario = document.getElementById("usuario").value.trim().toLowerCase();
    const contraseña = document.getElementById("contraseña").value.trim();
    const mensaje = document.getElementById("mensaje-iniciosesion");

    const clientesGuardados = JSON.parse(localStorage.getItem("clientes")) || [];

    const cliente = clientesGuardados.find(
        c => c.usuario.toLowerCase() === usuario && c.contraseña === contraseña
    );
    if (cliente) {
        mensaje.textContent = `Bienvenido ${cliente.usuario}!!`;
        mensaje.className = "mostrar";
        localStorage.setItem("usuarioActivo", JSON.stringify(cliente));
    } else {
        mensaje.textContent = "Usuario y/o contraseña incorrectos.";
        mensaje.className = "mostrar";
    }
};

// Registro de usuarios
const crearCuenta = (nuevoUsuario, nuevoEmail, nuevaContraseña) => {
    const clientesGuardados = JSON.parse(localStorage.getItem("clientes")) || [];
    let usuarioExistente = clientesGuardados.find(c => c.usuario === nuevoUsuario);
    let emailExistente = clientesGuardados.find(c => c.email === nuevoEmail);
    if (usuarioExistente) {
        mostrarMensaje("El nombre de usuario ya existe", "red");
        return;
    }
    if (emailExistente) {
        mostrarMensaje("El email ya está registrado", "red");
        return;
    }
    if (nuevaContraseña.length < 8) {
        mostrarMensaje("La contraseña debe tener al menos 8 caracteres", "red");
        return;
    }
    let nuevoId = clientesGuardados.length + 1;
    let nuevoCliente = {
        id: nuevoId,
        usuario: nuevoUsuario,
        email: nuevoEmail,
        contraseña: nuevaContraseña
    };
    clientesGuardados.push(nuevoCliente);
    localStorage.setItem("clientes", JSON.stringify(clientesGuardados));
    document.getElementById("formulario-registro").style.display = "none";
};

const mostrarformulario = () => {
    const formDiv = document.getElementById("formulario-registro");
    const carritoDiv = document.getElementById("carrito");
    if (formDiv.style.display === "none" || formDiv.style.display === "") {
        formDiv.style.display = "block";
        carritoDiv.style.display = "none";
    } else {
        formDiv.style.display = "none";
    }
};

const mostrarMensaje = (texto, color) => {
    const mensajeDiv = document.getElementById("mensaje");
    mensajeDiv.textContent = texto;
    mensajeDiv.style.color = color;
};

document.getElementById("FormRegistro").addEventListener("submit", (e) => {
    e.preventDefault();
    const usuario = document.getElementById("usuario1").value;
    const email = document.getElementById("correo").value;
    const contraseña = document.getElementById("contraseña1").value;
    const confirmar = document.getElementById("confircontra").value;

    if (contraseña !== confirmar) {
        mostrarMensaje("Las contraseñas no coinciden", "red");
        return;
    }
    crearCuenta(usuario, email, contraseña);
});

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

//Barra de busqueda de productos
const inputBuscar = document.getElementById("buscarProducto");
const buscarProductos = (prodEnco) => {
    const productosFiltrados = productos.filter(p => 
        p.nombre.toLowerCase().includes(prodEnco)
    );
    if (prodEnco === "") {
        document.getElementById("contenido").innerHTML = "";
        return;
    }
    if (productosFiltrados.length === 0) {
        CuadroProd("resultados-busqueda", `No se encontraron resultados para "${prodEnco}"`, productosFiltrados);
    } else {
        CuadroProd("resultados-busqueda", "", productosFiltrados);
    }
}
btnBuscar.addEventListener("click", () => { 
const termino = inputBuscar.value.toLowerCase(); 
buscarProductos(termino);
});
inputBuscar.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        e.preventDefault();
        const termino = e.target.value.toLowerCase();
        buscarProductos(termino);
    }});
inputBuscar.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
        e.preventDefault();
        const termino = e.target.value.toLowerCase();
        buscarProductos(termino);
    }
});

// carrito

const btnCarrito = () => {
  const carritoDiv = document.getElementById("carrito");
  const formDiv = document.getElementById("formulario-registro");
  if (carritoDiv.style.display === "none" || carritoDiv.style.display === "") {
    carritoDiv.style.display = "block";
    formDiv.style.display = "none";
  } else {
    carritoDiv.style.display = "none";
  }
};

document.getElementById("carrito").style.display = "none";
document.getElementById("btn-carrito").addEventListener("click", btnCarrito);

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
const guardarCarrito = () => {
  localStorage.setItem("carrito", JSON.stringify(carrito));
};

const mostrarCarrito = () => {
  const contenedorCarrito = document.getElementById("carrito-lista");
  contenedorCarrito.innerHTML = "";

  carrito.forEach(prod => {
    const itemDiv = document.createElement("div");
    itemDiv.className = "item-carrito";
    itemDiv.textContent = `${prod.nombre} x${prod.cantidad} - $${prod.precio * prod.cantidad}`;

    const btnEliminar = document.createElement("button");
    btnEliminar.textContent = "-";
    btnEliminar.style.marginLeft = "10px";
    btnEliminar.addEventListener("click", () => eliminarDelCarrito(prod.nombre));

    const btnSumar = document.createElement("button");
    btnSumar.textContent = "+";
    btnSumar.style.marginLeft = "5px";
    btnSumar.addEventListener("click", () => agregarAlCarrito(prod));
    itemDiv.appendChild(btnEliminar);
    itemDiv.appendChild(btnSumar);
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
  guardarCarrito();
  mostrarCarrito();
};
const eliminarDelCarrito = (nombreProducto) => {
  let item = carrito.find(p => p.nombre === nombreProducto);
  if (item) {
    item.cantidad -= 1;
    if (item.cantidad <= 0) {
      carrito = carrito.filter(p => p.nombre !== nombreProducto);
    }
  }
  guardarCarrito();
  mostrarCarrito();
};
const btnVaciarcarrito = document.getElementById("btn-vaciar");
btnVaciarcarrito.addEventListener("click", () => {
  if (carrito.length === 0) {
    Swal.fire({
  icon: "error",
  title: "Oops...",
  text: "El carrito ya está vacío",
  iconColor: "#ff0000ff",
  confirmButtonColor: "#00A339",
});
    return;
  }
  Swal.fire({
  title: "¿Estás seguro de vaciar el carrito?",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#30d646ff",
  cancelButtonColor: "#d33",
  confirmButtonText: "Sí, vaciar",
  cancelButtonText: "Cancelar"
}).then((result) => {
if (result.isConfirmed) {
  carrito = [];
  mostrarCarrito();
  guardarCarrito();
  Swal.fire({
    title: "Carrito vaciado",
    icon: "success",
    confirmButtonColor: "#00A339",
  }
);
return;
}else {
  Swal.fire({
    title: "Acción cancelada",
    icon: "info",
    confirmButtonColor: "#00A339",
  });
}
})});
const btnComprar = document.getElementById("btn-comprar");
btnComprar.addEventListener("click", () => {
  if (carrito.length === 0) {
    Swal.fire({
  icon: "error",
  title: "Oops...",
  text: "El carrito está vacío",
  iconColor: "#ff0000ff",
  confirmButtonColor: "#00A339",
});return;
  }
Swal.fire({
  title: "¿Estás seguro de comprar estos productos?",
  icon: "question",
  showCancelButton: true,
  confirmButtonColor: "#30d646ff",
  cancelButtonColor: "#d33",
  confirmButtonText: "Sí, comprar",
  cancelButtonText: "Cancelar"
}).then((result) => {
if (result.isConfirmed) {
  carrito = [];
  mostrarCarrito();
  guardarCarrito();
  Swal.fire({
    title: "Compra realizada con éxito",
    icon: "success",
    confirmButtonColor: "#00A339",
  });
} else {
  Swal.fire({
    title: "Compra cancelada",
    icon: "info",
    confirmButtonColor: "#00A339",
  });
  guardarCarrito();
  mostrarCarrito();
}
})});
document.addEventListener("DOMContentLoaded", () => { mostrarCarrito(); });
//Finalizacion de compra
