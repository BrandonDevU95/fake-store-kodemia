# Fake Store Kodemia

Este proyecto es una simulación de una tienda en línea desarrollada como parte del curso de React en Kodemia. La aplicación permite a los usuarios iniciar sesión, ver una lista de productos y ver los detalles de cada producto.

## Características

1. **Autenticación de Usuarios**: Los usuarios pueden iniciar sesión para acceder a la tienda.
2. **Lista de Productos**: Muestra una lista de productos disponibles en la tienda.
3. **Detalle del Producto**: Permite a los usuarios ver información detallada sobre un producto específico.

## Repositorio

El código fuente del proyecto se encuentra en el siguiente repositorio: [Fake Store Kodemia](https://github.com/BrandonDevU95/fake-store-kodemia.git)

## Instalación y Configuración

Sigue estos pasos para instalar y ejecutar el proyecto en tu máquina local:

1. **Clona el repositorio**:

    ```bash
    git clone https://github.com/BrandonDevU95/fake-store-kodemia.git
    cd fake-store-kodemia
    ```

2. **Instala las dependencias**:

    Asegúrate de tener [Node.js](https://nodejs.org/) instalado. Luego, ejecuta el siguiente comando:

    ```bash
    npm install
    ```

## Scripts Disponibles

En el archivo `package.json`, se han definido varios scripts para facilitar el desarrollo y despliegue de la aplicación:

-   **`npm run dev`**: Inicia el servidor de desarrollo utilizando Vite.
-   **`npm run build`**: Compila la aplicación para producción.
-   **`npm run lint`**: Ejecuta ESLint para analizar el código y asegurarse de que cumple con las normas de estilo definidas.
-   **`npm run preview`**: Previsualiza la aplicación compilada en un servidor local.

## Tecnologías Utilizadas

-   **React**: Biblioteca principal para construir la interfaz de usuario.
-   **React Router DOM**: Para el manejo de rutas en la aplicación.
-   **React Hook Form**: Para la gestión de formularios.
-   **Tailwind CSS**: Para estilos y diseño responsivo.
-   **Vite**: Herramienta de desarrollo y construcción.
-   **ESLint**: Para análisis estático de código y garantizar buenas prácticas.

## Estructura del Proyecto

La estructura básica del proyecto es la siguiente:

```
fake-store-kodemia/
├── node_modules/
├── public/
├── src/
│   ├── assets/
│   ├── hooks/
│   ├── layouts/
│   ├── pages/
│   ├── api.js
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
│   └── ...
├── .eslintrc.cjs
├── gitignore
├── index.html
├── package.json
├── postcss.config.js
├── README.md
├── tailwind.config.js
├── vite.config.js
└── ...
```

-   **`src/components/`**: Contiene los componentes reutilizables de la aplicación.
-   **`src/pages/`**: Contiene los componentes de las páginas principales de la aplicación.
-   **`src/App.jsx`**: Componente principal de la aplicación.
-   **`src/main.jsx`**: Punto de entrada de la aplicación.

## Contribución

¡Siéntete libre de contribuir al proyecto! Puedes abrir un problema para informar sobre errores o sugerir nuevas características. También puedes enviar solicitudes de extracción con mejoras o correcciones de código.

## Licencia

Este proyecto está bajo la licencia [MIT](https://opensource.org/licenses/MIT), lo que significa que puedes utilizarlo, modificarlo y distribuirlo libremente, siempre y cuando se mantenga el aviso de licencia original.

---

¡Espero que disfrutes trabajando con esta simulación de tienda en línea! Si tienes alguna pregunta o sugerencia, no dudes en ponerte en contacto conmigo. ¡Gracias por tu interés en mi proyecto!
