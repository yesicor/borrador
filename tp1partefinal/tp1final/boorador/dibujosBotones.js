function dibujaBoton(x, y, mensaje, ancho, alto, colorCaja, colorTexto) {
  textSize(15);
  let w = textWidth(mensaje) + 20; // ancho del texto + margen
  let h = alto; // altura fija

  strokeWeight(2);
  stroke(0);
  fill(colorCaja); 
  rect(x, y, w, h, 5);
  fill(colorTexto); 
  textAlign(CENTER, CENTER);
  text(mensaje, x + w / 2, y + h / 2); 
}

function dibujaAtrás() {
  dibujaBoton(40, 40, "<---", 30, 30, 155, 0); 
}

function dibujaSiguiente() {
  dibujaBoton(550, 440, "--->", 30, 30, color(200, 0, 0), 255); 
}

function dibujaStart() {
  dibujaBoton(280, 373, "START", 85, 40, color(255, 215, 0), 0); 
}

function dibujaCreditos() {
  dibujaBoton(250, 440, "CRÉDITOS", 140, 40, color(0, 255, 255), 0); 
}

function dibujaRestart() {
  dibujaBoton(280, 400, "RESTART", 100, 40, color(0, 255, 0), 255); 
}

function dibujaDecision(coord, mensaje) {
  dibujaBoton(280 + coord, 390, mensaje, 85, 40, color(255, 165, 0), 0); 
}


function dibujaBotonExtra() {
  dibujaBoton(400, 400, "EXTRA", 100, 40, color(255, 0, 255), 255); 
}
