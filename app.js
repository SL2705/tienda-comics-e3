// =========================================================
// E3 Cómics - Lógica general de la tienda
// =========================================================

const IVA = 0.16;

const productos = [
  // ---------- Superhéroes ----------
  { titulo: "Batman: Año Uno", autor: "Frank Miller", precio: 349, categoria: "superheroes", etiqueta: "Superhéroes", portada: "BATMAN", imagen: "https://covers.openlibrary.org/b/id/6462744-L.jpg", color: "azul", descripcion: "El origen de Batman y su primer enfrentamiento con la corrupción de Gotham." },
  { titulo: "Spider-Man: Azul", autor: "Jeph Loeb", precio: 299, categoria: "superheroes", etiqueta: "Superhéroes", portada: "SPIDER-MAN", imagen: "https://covers.openlibrary.org/b/id/535727-L.jpg", color: "rojo", descripcion: "Una mirada romántica a los primeros años de Peter Parker y Gwen Stacy." },
  { titulo: "Superman: Hijo Rojo", autor: "Mark Millar", precio: 389, categoria: "superheroes", etiqueta: "Superhéroes", portada: "SUPERMAN", imagen: "https://covers.openlibrary.org/b/id/4796862-L.jpg", color: "rojo", descripcion: "¿Qué pasaría si Superman hubiera aterrizado en la Unión Soviética?" },
  { titulo: "X-Men: Días del Futuro Pasado", autor: "Chris Claremont", precio: 329, categoria: "superheroes", etiqueta: "Superhéroes", portada: "X-MEN", imagen: "https://covers.openlibrary.org/b/id/535973-L.jpg", color: "azul", descripcion: "Los mutantes viajan al pasado para evitar un futuro de cazadores." },
  { titulo: "Wonder Woman: Hiketeia", autor: "Greg Rucka", precio: 359, categoria: "superheroes", etiqueta: "Superhéroes", portada: "WONDER WOMAN", imagen: "https://covers.openlibrary.org/b/id/798765-L.jpg", color: "amarillo", descripcion: "Diana protege a una fugitiva y se enfrenta a Batman." },
  { titulo: "Daredevil: Born Again", autor: "Frank Miller", precio: 379, categoria: "superheroes", etiqueta: "Superhéroes", portada: "DAREDEVIL", imagen: "https://covers.openlibrary.org/b/id/7591097-L.jpg", color: "rojo", descripcion: "Kingpin destruye la vida de Matt Murdock pieza por pieza." },

  // ---------- Cómics ----------
  { titulo: "Saga Vol. 1", autor: "Brian K. Vaughan", precio: 279, categoria: "comics", etiqueta: "Cómics", portada: "SAGA", imagen: "https://covers.openlibrary.org/b/id/12679639-L.jpg", color: "azul", descripcion: "Dos soldados de bandos enemigos huyen con su hija recién nacida." },
  { titulo: "The Walking Dead Vol. 1", autor: "Robert Kirkman", precio: 259, categoria: "comics", etiqueta: "Cómics", portada: "THE WALKING DEAD", imagen: "https://covers.openlibrary.org/b/id/844763-L.jpg", color: "negro", descripcion: "Rick Grimes despierta en un mundo dominado por los muertos vivientes." },
  { titulo: "Sandman Vol. 1", autor: "Neil Gaiman", precio: 449, categoria: "comics", etiqueta: "Cómics", portada: "SANDMAN", imagen: "https://covers.openlibrary.org/b/id/7508162-L.jpg", color: "negro", descripcion: "El Señor de los Sueños escapa tras décadas de cautiverio." },
  { titulo: "Bone", autor: "Jeff Smith", precio: 319, categoria: "comics", etiqueta: "Cómics", portada: "BONE", imagen: "https://covers.openlibrary.org/b/id/12648893-L.jpg", color: "amarillo", descripcion: "Tres primos perdidos llegan a un valle lleno de misterios." },
  { titulo: "Locke & Key Vol. 1", autor: "Joe Hill", precio: 329, categoria: "comics", etiqueta: "Cómics", portada: "LOCKE & KEY", imagen: "https://covers.openlibrary.org/b/id/6671226-L.jpg", color: "azul", descripcion: "Una familia descubre llaves mágicas en una mansión siniestra." },
  { titulo: "Invincible Vol. 1", autor: "Robert Kirkman", precio: 289, categoria: "comics", etiqueta: "Cómics", portada: "INVINCIBLE", imagen: "https://covers.openlibrary.org/b/id/844977-L.jpg", color: "amarillo", descripcion: "Mark Grayson descubre que ser un héroe es más duro de lo que parece." },

  // ---------- Manga ----------
  { titulo: "One Piece Vol. 1", autor: "Eiichiro Oda", precio: 159, categoria: "manga", etiqueta: "Manga", portada: "ONE PIECE", imagen: "https://covers.openlibrary.org/b/id/1020563-L.jpg", color: "naranja", descripcion: "Luffy inicia su viaje para encontrar el tesoro más grande del mar." },
  { titulo: "Akira Vol. 1", autor: "Katsuhiro Otomo", precio: 459, categoria: "manga", etiqueta: "Manga", portada: "AKIRA", imagen: "https://covers.openlibrary.org/b/id/814967-L.jpg", color: "naranja", descripcion: "Neo-Tokio y un poder psíquico que amenaza con destruirlo todo." },
  { titulo: "Berserk Vol. 1", autor: "Kentaro Miura", precio: 229, categoria: "manga", etiqueta: "Manga", portada: "BERSERK", imagen: "https://covers.openlibrary.org/b/id/869205-L.jpg", color: "negro", descripcion: "Guts, el espadachín negro, busca venganza en un mundo brutal." },
  { titulo: "Naruto Vol. 1", autor: "Masashi Kishimoto", precio: 149, categoria: "manga", etiqueta: "Manga", portada: "NARUTO", imagen: "https://covers.openlibrary.org/b/id/1020779-L.jpg", color: "naranja", descripcion: "Un ninja hiperactivo sueña con convertirse en Hokage." },
  { titulo: "Death Note Vol. 1", autor: "Tsugumi Ohba", precio: 179, categoria: "manga", etiqueta: "Manga", portada: "DEATH NOTE", imagen: "https://covers.openlibrary.org/b/id/1041608-L.jpg", color: "negro", descripcion: "Un cuaderno capaz de matar a quien se escriba en él." },
  { titulo: "Fullmetal Alchemist Vol. 1", autor: "Hiromu Arakawa", precio: 189, categoria: "manga", etiqueta: "Manga", portada: "FULLMETAL", imagen: "https://covers.openlibrary.org/b/id/863658-L.jpg", color: "azul", descripcion: "Dos hermanos buscan la Piedra Filosofal para recuperar sus cuerpos." },

  // ---------- Novelas gráficas ----------
  { titulo: "Maus", autor: "Art Spiegelman", precio: 499, categoria: "novelas-graficas", etiqueta: "Novelas gráficas", portada: "MAUS", imagen: "https://covers.openlibrary.org/b/id/10210168-L.jpg", color: "gris", descripcion: "El Holocausto narrado a través de ratones y gatos." },
  { titulo: "Persépolis", autor: "Marjane Satrapi", precio: 429, categoria: "novelas-graficas", etiqueta: "Novelas gráficas", portada: "PERSÉPOLIS", imagen: "https://covers.openlibrary.org/b/id/12648921-L.jpg", color: "negro", descripcion: "La infancia de una niña iraní durante la Revolución Islámica." },
  { titulo: "Watchmen", autor: "Alan Moore", precio: 649, categoria: "novelas-graficas", etiqueta: "Novelas gráficas", portada: "WATCHMEN", imagen: "https://covers.openlibrary.org/b/id/7774899-L.jpg", color: "amarillo", descripcion: "Un asesinato destapa la conspiración detrás de los superhéroes retirados." },
  { titulo: "V de Vendetta", autor: "Alan Moore", precio: 559, categoria: "novelas-graficas", etiqueta: "Novelas gráficas", portada: "V DE VENDETTA", imagen: "https://covers.openlibrary.org/b/id/12293384-L.jpg", color: "rojo", descripcion: "Un enmascarado lidera una rebelión contra un régimen totalitario." },
  { titulo: "Habibi", autor: "Craig Thompson", precio: 589, categoria: "novelas-graficas", etiqueta: "Novelas gráficas", portada: "HABIBI", imagen: "https://covers.openlibrary.org/b/id/15167481-L.jpg", color: "amarillo", descripcion: "Dos esclavos se reencuentran en un desierto lleno de mitos." },
  { titulo: "Arrugas", autor: "Paco Roca", precio: 389, categoria: "novelas-graficas", etiqueta: "Novelas gráficas", portada: "ARRUGAS", imagen: "https://covers.openlibrary.org/b/id/6258190-L.jpg", color: "gris", descripcion: "La amistad y el Alzheimer en la vida de un centro de mayores." },
];

// ---------------- Catálogo ----------------
const catalogo = document.querySelector(".catalogo");

catalogo.innerHTML = productos
  .map(
    (p, i) => `
      <article class="producto" data-categoria="${p.categoria}">
        <div class="producto__portada portada--${p.color}">
          <img class="producto__imagen" src="${p.imagen}" alt="Carátula de ${p.titulo}" loading="lazy">
          <span class="portada__nombre">${p.portada}</span>
        </div>
        <div class="producto__info">
          <span class="producto__categoria">${p.etiqueta}</span>
          <h3 class="producto__titulo">${p.titulo}</h3>
          <p class="producto__autor">${p.autor}</p>
          <p class="producto__descripcion">${p.descripcion}</p>
          <p class="producto__precio">$${p.precio.toFixed(2)}</p>
          <button class="btn-agregar" type="button" data-indice="${i}">Agregar al carrito</button>
        </div>
      </article>`
  )
  .join("");

// ---------------- Carrito ----------------
const contadorCarrito = document.getElementById("contador-carrito");
const botonesAgregar = document.querySelectorAll(".btn-agregar");
const panelCarrito = document.getElementById("panel-carrito");
const btnCarrito = document.getElementById("btn-carrito");
const btnCerrarCarrito = document.getElementById("cerrar-carrito");
const listaCarrito = document.getElementById("lista-carrito");
const carritoVacio = document.getElementById("carrito-vacio");
const resumenCarrito = document.getElementById("resumen-carrito");
const subtotalEl = document.getElementById("subtotal");
const ivaEl = document.getElementById("iva");
const totalEl = document.getElementById("total");

let carrito = [];

const formato = (valor) => `$${valor.toFixed(2)}`;

const renderCarrito = () => {
  const totalArticulos = carrito.reduce((suma, item) => suma + item.cantidad, 0);
  contadorCarrito.textContent = totalArticulos;

  carritoVacio.hidden = carrito.length > 0;
  resumenCarrito.hidden = carrito.length === 0;

  listaCarrito.innerHTML = carrito
    .map(
      (item, i) => `
        <li class="item-carrito">
          <div class="item-carrito__datos">
            <span class="item-carrito__titulo">${item.titulo}</span>
            <span class="item-carrito__detalle">${item.cantidad} × ${formato(item.precio)}</span>
          </div>
          <span class="item-carrito__subtotal">${formato(item.precio * item.cantidad)}</span>
          <button class="item-carrito__quitar" type="button" data-indice="${i}"
                  aria-label="Quitar ${item.titulo}">✕</button>
        </li>`
    )
    .join("");

  const subtotal = carrito.reduce((suma, item) => suma + item.precio * item.cantidad, 0);
  const iva = subtotal * IVA;
  subtotalEl.textContent = formato(subtotal);
  ivaEl.textContent = formato(iva);
  totalEl.textContent = formato(subtotal + iva);
};

const abrirCarrito = (abrir) => {
  panelCarrito.hidden = !abrir;
  btnCarrito.setAttribute("aria-expanded", String(abrir));
};

botonesAgregar.forEach((boton) => {
  boton.addEventListener("click", () => {
    const producto = productos[Number(boton.dataset.indice)];
    const existente = carrito.find((item) => item.titulo === producto.titulo);

    if (existente) {
      existente.cantidad++;
    } else {
      carrito.push({ titulo: producto.titulo, precio: producto.precio, cantidad: 1 });
    }

    renderCarrito();
  });
});

listaCarrito.addEventListener("click", (evento) => {
  const boton = evento.target.closest(".item-carrito__quitar");
  if (!boton) return;

  const indice = Number(boton.dataset.indice);
  if (--carrito[indice].cantidad <= 0) carrito.splice(indice, 1);
  renderCarrito();
});

btnCarrito.addEventListener("click", () => abrirCarrito(panelCarrito.hidden));
btnCerrarCarrito.addEventListener("click", () => abrirCarrito(false));

document.getElementById("btn-pagar").addEventListener("click", () => {
  alert("Pago simulado. Esta sección es una demostración.");
});

// ---------------- Pie de página ----------------
document.getElementById("anio").textContent = new Date().getFullYear();

// ---------------- Filtro por categoría ----------------
const filtros = document.querySelectorAll(".filtro");
const tarjetas = document.querySelectorAll("[data-categoria][data-filtro]");
const mensajeCategoria = "Categoría activa seleccionada";

const filtrar = (categoria, filtroActivo) => {
  tarjetas.forEach((producto) => {
    producto.hidden =
      categoria !== "todos" && producto.dataset.categoria !== categoria;
  });

  filtros.forEach((filtro) => {
    const activo = filtro === filtroActivo;
    filtro.classList.toggle("categoria-activa", activo);
    filtro.setAttribute("aria-pressed", activo);
  });
};

filtros.forEach((filtro) => {
  filtro.addEventListener("click", () =>
    filtrar(filtro.dataset.filtro, filtro)
  );
});
