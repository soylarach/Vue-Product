# 🛒 Vue Product Showcase

> Aplicación SPA (Single Page Application) moderna, interactiva y robusta desarrollada como proyecto para el **Módulo #7: Desarrollo de Aplicaciones Front-End con Framework Vue** (Alkemy).

---

## 📋 Descripción del Proyecto

**Vue Product Showcase** es un catálogo interactivo de productos diseñado para el departamento de e-commerce de una empresa tecnológica. La aplicación consume datos dinámicos desde una API REST, gestiona el estado global de forma centralizada, implementa una interfaz moderna y atractiva utilizando **Vuetify (UI Framework)**, y cuenta con una cobertura de pruebas automatizadas tanto unitarias como end-to-end (E2E).

---

## 🎯 Objetivos y Requerimientos Cumplidos (Paso a Paso)

El desarrollo del proyecto se estructuró de manera progresiva a través de 5 etapas clave:

### 🧩 Lección 1: Componentes y Ciclo de Vida
- **Estructura Modular:** Organización limpia basada en componentes reutilizables (`App`, `Header`, `Footer`, `ProductList`, `ProductCard`).
- **Ciclo de Vida:** Implementación de hooks (`mounted()`, `created()`) para la inicialización de datos y configuración del componente.

### 🌐 Lección 2: Consumo de Datos desde una API
- **Integración con Axios:** Solicitudes HTTP configuradas para obtener productos dinámicamente.
- **Muestreo de Estados:** Manejo robusto de estados visuales (`loading`, `error`, `empty`) para garantizar una experiencia de usuario fluida.
- **Filtrado:** Funcionalidad inicial de filtrado de productos por categoría.

### 📦 Lección 3: Almacenamiento de Estado en Vuex
- **Arquitectura Centralizada:** Configuración de Vuex modularizado para separar las responsabilidades (`products`, `filters`, `favorites`).
- **Acciones y Getters:** Migración del consumo de API hacia acciones de Vuex y uso de getters para computar listas filtradas eficientemente.

### 🧪 Lección 4: Pruebas Automatizadas en Vue
- **Pruebas Unitarias:** Implementadas con **Vue Test Utils + Jest**, validando:
  1. El renderizado correcto de la información dentro de `<ProductCard>`.
  2. La respuesta visual adecuada de la interfaz ante errores de la API.
- **Prueba End-to-End (E2E):** Implementada con **Cypress**, simulando la interacción real del usuario al filtrar productos y visualizar resultados.

### 🎨 Lección 5: Librerías y Frameworks Complementarios (UI)
- **Vuetify 3:** Integración completa de Vuetify para un diseño visual profesional, responsivo y adaptado a catálogos de e-commerce modernos.
- **Diseño Responsive & Tema:** Estilos personalizados para botones, tarjetas e inputs, asegurando compatibilidad multidispositivo y soporte para modo claro/oscuro.

---

## 🛠️ Stack Tecnológico

- **Core:** [Vue 3](https://vuejs.org/) (Composition / Options API)
- **Gestión de Estado:** [Vuex 4](https://vuex.vuejs.org/)
- **Librería UI:** [Vuetify 3](https://vuetifyjs.com/)
- **Cliente HTTP:** [Axios](https://axios-http.com/)
- **Herramientas de Build:** [Vue CLI 5](https://cli.vuejs.org/)
- **Testing Unitario:** [Jest](https://jestjs.io/) + [Vue Test Utils](https://test-utils.vuejs.org/)
- **Testing E2E:** [Cypress](https://www.cypress.io/)
- **Linter / Formatter:** ESLint + Babel

---

## 📁 Estructura del Proyecto

```text
vue-product-showcase/
├── cypress/               # Pruebas End-to-End (Cypress)
├── src/
│   ├── assets/            # Recursos estáticos e imágenes
│   ├── components/        # Componentes reutilizables (ProductCard, Header, Footer)
│   ├── store/             # Estado centralizado de Vuex (módulos)
│   ├── views/             # Vistas principales de la aplicación
│   ├── App.vue            # Componente raíz
│   └── main.js            # Punto de entrada de la aplicación
├── tests/
│   └── unit/              # Pruebas unitarias (Jest)
├── package.json           # Dependencias y scripts de NPM
├── vue.config.js          # Configuración de Vue CLI y Vuetify
└── README.md              # Documentación técnica