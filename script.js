//Logica para crear pedidos, ver pedidos y cobrar los pedidos del usuario

const usuario = {
  nombre: "Beto",
  edad: 30,
  deuda: 0,
};

let pedido = [];
let costoPedido = 0;
let montoTotalVentas = 0;

//lista todos los productos del menu en un formato amigable
const mostrarMenu = () => {
  console.log("CÓDIGO - NOMBRE PRODUCTO - COSTO");
  for (let producto of productos) {
    console.log(`${producto.codigo} - ${producto.nombre} - $${producto.costo}`);
  }
};

const pedirProducto = (cod) => {
  if (!cod) return "Ingrese un código válido";
  if (typeof cod !== "string") return "Ingrese un codigo tipo string";
  const productoEncontrado = productos.find(
    (producto) => producto.codigo == cod
  );
  if (!productoEncontrado) return "El producto no existe";
  pedido.push(productoEncontrado);
  console.log("El producto ha sido agregado a su pedido. Su pedido es: ");
  return verPedido();
};

const verPedido = () => pedido;

const calcularCosto = () => {
  let costo = 0;
  for (producto of pedido) {
    costo += producto.costo;
  }
  console.log(`El costo del pedido es de S/ ${costo}`);
  return costo;
};

// Funcion que permite finalizar el pedido del usuario
const finalizarPedido = () => {
  usuario.deuda = calcularCosto();
  pedido = [];

  return `${usuario.nombre}, debes pagar ${usuario.deuda} dólares.`;
};

// Funcion que permite pagar todo tu pedido y entrega cambio si fuese necesario
const pagarPedido = (montoEntregado) => {
  if (typeof montoEntregado !== "number")
    return "Ingrese un monto numerico, por favor";
  if (montoEntregado < 0 || !montoEntregado) return "Ingrese un monto valido";

  if (montoEntregado < usuario.deuda) {
    return "No te alcanza para pagar tu pedido";
  } else if (montoEntregado == usuario.deuda) {
    usuario.deuda = 0;
    return "Tu pedido ha sido pagado.";
  } else {
    let cambio = montoEntregado - usuario.deuda;
    montoTotalVentas += usuario.deuda;
    console.log(`Tu pedido ha sido pagado y tu cambio es de ${cambio}`);
    usuario.deuda = 0;
  }
};

const reportarVentasRealizadas = () => {
  console.log(`El monto de ventas realizadas es de S/${montoTotalVentas}`);
};
