alert ("Bienvenido/a a nuestra Farmacia en linea");

let clientes = [
    {
        id:1,
        numeroUsuario: 1,
        nombre: "",
        email: "",
    },
    {
        id: 2,
        numeroUsuario: 0,
        nombre: "invitado",
        email: undefined,
    }
];
let clientesCopia = [...clientes];
let inicioSesion = [];
let continuar = true;

do {
    let CreacionDeUsuario = prompt (`Desea crear un cliente?:
                                        1-Si deseo
                                        2-Ingreso como invitado`)

    switch (CreacionDeUsuario) {
        case "1":
            inicioSesion.push(clientesCopia[0])
            clientesCopia.nombre = prompt ("¿Cual es su nombre?:")
            clientesCopia.email = prompt ("Cual es su correo electronico")
            alert (`Hola ${clientesCopia.nombre}`);
            correo = prompt (`Este es tu correo: ${clientesCopia.email}
                                        1- Si, está correcto.
                                        2- No, deseo editarlo.`)
                      let continuar1 = true;
                          function cambioCorreo(){
                          do{
                            switch (correo) {
                            case "1":
                                alert ("Okey, sigamos.");
                                continuar1 = false;
                                break;
                            case "2":
                                function cambioCorreo () {clientesCopia.email = prompt ("Coloca tu correo de la manera adecuada:")
                                let correo = prompt (`Es correcto?: ${clientesCopia.email}
                                                  1- Si, está correcto.
                                                  2- No, deseo editarlo.`);
                                        switch (correo) {
                                            case "1":
                                                alert ("Okey, sigamos.");
                                                break;
                                            case "2":
                                                cambioCorreo ();
                                                break;
                                            default:
                                                alert (`Ingrese una opcion valida`)
                                                continuar1 = true;
                                                cambioCorreo ();
                                                break;
                                        }
                                };
                                cambioCorreo (continuar1);
                                continuar1 = false;
                                alert ("Su correo ha sido actualizado.");
                                break;
                            default:
                                alert (`Ingrese una opcion valida`)
                                break;
                        }}while (continuar1);
            continuar = false;
            }
            cambioCorreo();
            break;
        case "2":
            inicioSesion.push(clientes[1])
            alert ("A ingresado como INVITADO");
            continuar = false;
            break;                
        default:
            alert (`Ingrese una opcion valida`);
            break;
    }
} while (continuar);


let totalcarro = 0;

function precioFinal() {
do {
  let opcion = prompt(`A continuación elija una opción:
        1- Agregar un producto al carrito,
        2- Quitar un producto del carrito,
        3- Ver total,
        4- Salir`);

  switch (opcion) {
        case "1":
      let agregarProd = prompt(`Que desea agregar:
                1- Antiinflamatorios ($5000)
                2- Analgésicos ($3500)
                3- Antibióticos ($6300)
                4- Salir`);

      switch (agregarProd) {
        case "1":
            let Antiinflamatorios = prompt("Ingrese la cantidad de Antiinflamatorios que desea agregar:");
            for (let i = 0; i < Antiinflamatorios; i++) {
                totalcarro += 5000;
                confirm("Producto/s agregado/s al carrito");
            }
          precioFinal("agregar", agregarProd);
          break;
        case "2":
            let Analgésicos = prompt("Ingrese la cantidad de Analgésicos que desea agregar:");
            for (let i = 0; i < Analgésicos; i++) {
                totalcarro += 3500;
                confirm("Producto/s agregado/s al carrito");
            }
          precioFinal("agregar", agregarProd);
          break;
        case "3":
            let Antibióticos = prompt("Ingrese la cantidad de Antibiótico que desea agregar:");
            for (let i = 0; i < Antibióticos; i++) {
                totalcarro += 6300;
                confirm("Producto/s agregado/s al carrito");
            }
          precioFinal("agregar", agregarProd);
          break;
        case "4":
          break;
        default:
          alert("Ingrease una opción válida");
          break;
      }
      break;

    case "2":
      let quitarProd = prompt(`Que desea quitar:
                1- Antiinflamatorios ($5000)
                2- Analgésicos ($3500)
                3- Antibióticos ($6300)
                4- Salir`);
      switch (quitarProd) {
        case "1":
            let Antiinflamatorios = prompt("Ingrese la cantidad de Antiinflamatorios que desea quitar:");
            for (let i = 0; i < Antiinflamatorios; i++) {
                totalcarro -= 5000;
                confirm("Producto/s quitado/s del carrito");
            }
          precioFinal("agregar", quitarProd);
          break;
        case "2":
            let Analgésicos = prompt("Ingrese la cantidad de Analgésicos que desea quitar:");
            for (let i = 0; i < Analgésicos; i++) {
                totalcarro -= 3500;
                confirm("Producto/s quitado/s del carrito");
            }
          precioFinal("agregar", quitarProd);
          break;
        case "3":
            let Antibióticos = prompt("Ingrese la cantidad de Antibiótico que desea quitar:");
            for (let i = 0; i < Antibióticos; i++) {
                totalcarro -= 6300;
                confirm("Producto/s quitado/s del carrito");
            }
          precioFinal("agregar", agregarProd);
          break;
        case "4":
          break;
        default:
          alert("Ingrease una opción válida");
          break;
      }
      break;
    case "3":
      alert(`El total de su compra es de: $${totalcarro}`);
      continuar = true;
      break;
    case "4":
      continuar = false;
      break;

    default:
      alert("Ingrease una opción válida");
      break;
  }

} while (continuar)};
precioFinal();

alert ("Gracias por su visita, vuelva pronto!");