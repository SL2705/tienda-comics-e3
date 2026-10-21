// =========================================================
// Arkham Cómics - Lógica general de la tienda
// =========================================================

// ---------------- Carrito ----------------
// Cuenta cuántos productos se han agregado al carrito.
const contadorCarrito = document.getElementById("contador-carrito");
const botonesAgregar = document.querySelectorAll(".btn-agregar");
let totalCarrito = 0;

botonesAgregar.forEach((boton) => {
  boton.addEventListener("click", () => {
    totalCarrito++;
    contadorCarrito.textContent = totalCarrito;
  });
});

// ---------------- Pie de página ----------------
document.getElementById("anio").textContent = new Date().getFullYear();

// ---------------- Filtro por categoría ----------------
// Aquí irá la lógica del filtro de productos.
