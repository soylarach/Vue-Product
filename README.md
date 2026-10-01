# 🛒 Vue Product Showcase

> Aplicación SPA (Single Page Application) moderna, interactiva y robusta desarrollada como proyecto para el **Módulo #7: Desarrollo de Aplicaciones Front-End con Framework Vue** 

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


# Manual de Ejecución: Cómo Visualizar el Proyecto en Otro Computador

Este instructivo detalla el paso a paso para descargar, configurar y levantar la aplicación en cualquier computador (macOS, Windows o Linux) sin errores.

---

## 1. Requisitos Previos

Antes de comenzar, el computador donde se va a visualizar el proyecto debe tener instalados:

* **Node.js** (versión 18.0 o superior recomendada): incluye `npm` por defecto. Se descarga desde [nodejs.org](https://nodejs.org/).
* **Git**: para clonar el repositorio desde la consola. Se descarga desde [git-scm.com](https://git-scm.com/).
* **Un navegador web moderno** (Chrome, Firefox, Safari o Edge).
* *(Opcional)* **Visual Studio Code** para explorar los archivos del proyecto.

> Para verificar si las herramientas están instaladas correctamente, abre la terminal (o PowerShell en Windows) y escribe:
> ```bash
> node -v
> npm -v
> git -v
> 
> ```
> 
> 

---

## 2. Paso a Paso para Levantar el Proyecto

### Paso 1: Obtener el código

Elige **una** de las siguientes dos opciones:

* **Opción A (Recomendada con Git):** Abre la terminal y clona el repositorio:
```bash
git clone https://github.com/soylarach/Vue-Product.git
cd Vue-Product

```


* **Opción B (Descarga manual):**
Entra al enlace de GitHub, haz clic en el botón verde **`< > Code`**, selecciona **Download ZIP**, descomprime el archivo y abre esa carpeta en tu terminal o en VS Code.

---

### Paso 2: Instalar las dependencias

Dentro de la carpeta del proyecto, ejecuta el siguiente comando:

```bash
npm install --legacy-peer-deps

```

> **¿Por qué usar `--legacy-peer-deps`?**
> Este proyecto utiliza bibliotecas de componentes (como Vuetify y sus plugins de empaquetado) cuyas versiones cruzadas pueden generar alertas estrictas en versiones recientes de npm. El parámetro `--legacy-peer-deps` asegura una instalación limpia y directa en cualquier máquina.

---

### Paso 3: Iniciar el servidor local

Una vez concluida la instalación, inicia el entorno de desarrollo:

```bash
npm run serve

```

*(Si el proyecto utiliza Vite en lugar de Vue CLI, el comando equivalente será `npm run dev`).*

---

### Paso 4: Visualizar en el navegador

Cuando la terminal termine de compilar, mostrará un mensaje indicando la dirección local:

```text
  App running at:
  - Local:   http://localhost:8080/
  - Network: http://192.168.x.x:8080/

```

1. Haz clic sobre el enlace `http://localhost:8080/` (o copia y pega la dirección en tu navegador).
2. Ya podrás interactuar con la aplicación completa.

---

## 3. Solución de Problemas Frecuentes

* **Error de permisos en macOS (`EACCES`):**
Si al instalar paquetes npm bloquea la escritura en la caché, ejecuta en la terminal de Mac:
```bash
sudo chown -R $(id -u):$(id -g) "$HOME/.npm"

```


* **Puerto en uso (`port 8080 is already in use`):**
Si otro programa está usando el puerto `8080`, el sistema automáticamente asignará el siguiente disponible (por ejemplo, `http://localhost:8081/`). Revisa la dirección exacta que imprima la terminal.
* **Detener la aplicación:**
Para apagar el servidor local, presiona `Ctrl + C` en la terminal.
