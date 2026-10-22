# Tienda de Cómics A3 - Módulo de Filtrado

### Acceso a la aplicación web del proyecto
https://sl2705.github.io/tienda-comics-e3/

Sistema de comercio electrónico enfocado en la gestión y visualización dinámica de un catálogo de cómics segmentado por categorías. Este proyecto implementa un flujo de trabajo colaborativo mediante control de versiones con Git y GitHub.

## Descripción de la Funcionalidad

La interfaz del catálogo permite explorar cómics mediante las siguientes capacidades de filtrado:
* **Filtro por Categoría:** Clasificación de productos en tres categorías principales (Superhéroes, Manga y Novelas Gráficas).
* **Restablecimiento de Catálogo:** Opción para mostrar nuevamente la totalidad de los productos disponibles.
* **Indicador Visual Activo:** Resaltado de la categoría seleccionada actualmente en la interfaz.
* **Persistencia de Diseño:** Integración modular que conserva la estructura estática y los estilos generales del sitio.

## Estructura del Proyecto

```text
tienda-comics-arkham/
├── index.html        # Estructura del catálogo y atributos de categoría
├── styles.css        # Estilos visuales y estados de categoría activa
├── app.js            # Lógica de filtrado en JavaScript y manejo del DOM
└── README.md         # Documentación general del repositorio
```

## Requisitos de Instalación y Ejecución

1. **Clonar el repositorio localmente:**
   ```bash
   git clone https://github.com/SL2705/tienda-comics-e3.git
   ```

2. **Navegar al directorio del proyecto:**
   ```bash
   cd tienda-comics-e3
   ```

3. **Ejecutar la aplicación:**
   Abrir el archivo `index.html` en un navegador web o ejecutar mediante un servidor local (por ejemplo, *Live Server* en VS Code).
