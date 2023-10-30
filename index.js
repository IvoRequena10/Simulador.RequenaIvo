let form = document.querySelector("#prestamo-form");
let prestamoExistente = localStorage.getItem('prestamo');

if (prestamoExistente) {
  form.style.display = 'none'

  let prestamoExistenteParseado = JSON.parse(prestamoExistente)

  let h3 = document.createElement("h3")
  let h4 = document.createElement("h4")

  h3.innerHTML = "Ya solicitaste un prestamo!"
  h4.innerHTML = prestamoExistenteParseado.nombre + ", ya pediste $" + prestamoExistenteParseado.montoElegido + " en " + prestamoExistenteParseado.cantidadDeCuotas + " cuotas"

  document.body.append(h3)
  document.body.append(h4)
}

form.addEventListener('submit', function (e) {
  e.preventDefault();

  let valores = e.target;

  let nombre = valores[0].value
  if (nombre == '') {
    return;
  }

  let cantidadDeCuotas = valores[1].value
  if (cantidadDeCuotas == '') {
    return;
  }

  let montoElegido = valores[2].value
  if (montoElegido == '') {
    return;
  }

  let prestamo = {
    nombre,
    cantidadDeCuotas,
    montoElegido
  }

  let prestamoJson = JSON.stringify(prestamo)

  localStorage.setItem('prestamo', prestamoJson)
})