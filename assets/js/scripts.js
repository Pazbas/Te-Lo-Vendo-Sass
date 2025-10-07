function mostrarAlerta() {
  alert("Tu carrito está vacio");
}



function enviarMensaje() {
  alert("Gracias por tus comentarios");
}


const diasSemana = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];

function obtenerDiaPorNumero(numero) {

  if (!Number.isInteger(numero) || numero < 1 || numero > 7) {
    throw new RangeError("El número debe estar entre 1 y 7.");
  }
  
  return diasSemana[numero - 1];
} 