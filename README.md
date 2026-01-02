# SEAMER Sublimaciones — Tienda Frontend

Repositorio frontend de la tienda "SEAMER Sublimaciones", construido con React y Vite.

## Descripción

Interfaz de e-commerce para mostrar productos, gestionar el carrito y completar el proceso de pedido. Está organizada por componentes reutilizables, páginas y un contexto para el carrito.

## Tecnologías

- React (JSX)
- Vite
- CSS por componente
- Context API (CartContext)

## Características

- Listado de productos con componentes reutilizables
- Gestión de carrito mediante `CartContext.jsx`
- Páginas: Home, Productos, Carrito, About, FAQs
- Componentes de layout: `Navbar`, `Footer`, y modales de autenticación

## Estructura principal

- `src/` — código fuente
	- `components/` — componentes UI (incluye `auth/` y `layout/`)
	- `context/CartContext.jsx` — estado del carrito
	- `pages/` — vistas (HomePage, ProductsPage, CartPage, AboutPage, FaqsPage)
	- `main.jsx`, `App.jsx` — entrada y montaje de la app

## Requisitos

- Node.js >= 14 (LTS recomendado)
- npm o yarn

## Instalación

1. Clonar el repositorio

```bash
git clone <repo-url>
cd seamersublimaciones-commerce
```

2. Instalar dependencias

Con npm:

```bash
npm install
```

Con yarn:

```bash
yarn install
```

## Comandos útiles

- Desarrollo (Vite):

```bash
npm run dev
# o
yarn dev
```

- Construir para producción:

```bash
npm run build
# o
yarn build
```

- Previsualizar build:

```bash
npm run preview
# o
yarn preview
```

Estos comandos asumen los scripts estándar de Vite en `package.json`.

## Notas para desarrolladores

- Los estilos están junto a los componentes (`*.css`).
- `CartContext.jsx` centraliza la lógica del carrito; puede extenderse con persistencia en `localStorage` o llamadas a un backend.
- Revisar `src/components/auth/` para la lógica de login/registro.


