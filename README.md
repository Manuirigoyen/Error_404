<h1 align="center">📘 FigusApp – Aplicación de Figuritas</h1>
<p align="center">Una aplicación web para organizar, visualizar y gestionar figuritas.</p>

<p align="center">
  <img src="https://img.shields.io/badge/versión-1.1-blue.svg" />
  <img src="https://img.shields.io/badge/dependencias-Bootstrap%20%7C%20TypeScript%20%7C%20npm-yellow.svg" />
  <img src="https://img.shields.io/badge/actualización-2025--12--08-brightgreen" />
</p>

---

## 📚 Índice

1. [Descripción del proyecto](#1-descripción-del-proyecto)
2. [Características principales](#2-características-principales)
   - [2.1 Álbum de figuritas](#21-álbum-de-figuritas)
   - [2.2 Billetera del usuario](#22-billetera-del-usuario)
   - [3.1 Ruleta de premios](#31-ruleta-de-premios)
   - [4.1 Página del usuario](#41-página-del-usuario)
3. [Mejoras futuras](#3-mejoras-futuras)
4. [Tutorial de instalación](#4-tutorial-de-instalación)
5. [Documentación adicional](#5-documentación-adicional)
6. [Autores](#6-autores)

---

## 1. Descripción del proyecto

<p align="justify">
  FigusApp es una plataforma digital diseñada para revolucionar la forma en que coleccionás figuritas de fútbol.  
  A diferencia del álbum físico tradicional, esta aplicación ofrece una experiencia más económica, accesible y completa para cualquier aficionado.
  <br><br>
  Con FigusApp, los usuarios pueden armar su álbum de figuritas sin depender de los sobres físicos, reduciendo significativamente el gasto asociado a su compra. Al estar digitalizadas, las figuritas y sobres están siempre disponibles, brindando una mayor variedad y eliminando las limitaciones de distribución que suelen existir en tiendas locales.
  <br><br>
  La aplicación también expande las posibilidades de colección al permitir el intercambio de figuritas con usuarios de diferentes regiones, aumentando el alcance y las oportunidades para completar el álbum. Además, los coleccionistas pueden recibir recompensas especiales al completar álbumes específicos, así como obtener premios diarios a través de una ruleta de premios integrada, lo que añade un componente adicional de diversión y motivación.
  <br><br>
  En resumen, FigusApp transforma la colección de figuritas en una experiencia más moderna, económica, social y llena de beneficios.
</p>


---

## 2. Características principales

### 2.1 Álbum de figuritas

La página está centrada en la pantalla y comienza con un título **“Mis Álbumes”** de color amarillo con una sombra negra, que indica que el usuario está viendo sus colecciones.

A continuación aparecen tres bloques rectangulares de color blanco con opacidad para que se pueda seguir apreciando el fondo, que es la misma imagen que el logo. Cada bloque corresponde a una selección (Argentina, Brasil y Francia) y contiene:

### 🗂️ Elementos de cada bloque
- **Encabezado:** El nombre del país y una pequeña bandera al lado.  
- **Barra de progreso:** Muestra cuántas figuritas se han completado (inicia en **0%**).  
- **Grid de figuritas:**  
  - 15 tarjetas por selección.  
  - La mayoría muestran la foto de una jugada.  
  - Una tarjeta “especial” tiene un signo de pregunta y, al obtener esa figurita, se revela la leyenda correspondiente (**Maradona, Pelé o Zidane**).  
  - Las tarjetas están en escala de grises y se colorean cuando se completan.  
- **Bandera y descripción:**  
  - A la derecha del grid se ubica la bandera correspondiente en forma perpendicular.  
  - Encima de la bandera hay una breve reseña de la selección.  
  - Al completar ese álbum, la bandera recupera el color.

### 🎁 Zona promocional
Al final de la página hay una sección que invita a completar los álbumes para ganar un viaje.  
Si el usuario ya completó todos, se muestra un **mensaje de felicitación** y un **botón para reclamar el premio**.

### 📱 Responsividad
El diseño se adapta a distintas pantallas:
- En móviles, las tarjetas se reducen.  
- La descripción y la bandera se giran **90°** y se colocan por debajo de las figuritas.  
- La barra de progreso ocupa todo el ancho disponible.  
- Se mantiene la legibilidad y funcionalidad en cualquier dispositivo.

### 🧭 Navegación
En esta sección también se puede navegar mediante el **nav** y el **footer** del sitio.

### 2.2 Billetera del usuario

En **billetera.html**, el usuario ve todas sus figuritas repetidas dentro de un recuadro blanco semitransparente, centrado y con sombra, que destaca sobre el fondo de la página.

#### 🏷️ Título y subtítulo
- **“ACA SE GUARDAN TUS FIGURITAS REPETIDAS”**  
- Debajo, el subtítulo **“Intercámbialas con amigos!”** en color marrón.

#### 🖼️ Contenedor de figuritas
- Las figus se insertan dinámicamente.  
- Cada una muestra:  
  - La imagen de la figurita.  
  - Un ícono de billetera en la parte inferior.  
  - Un contador en la esquina superior derecha indicando cuántas repetidas hay.  
- Al interactuar con una figurita, aparecen dos botones:  
  - **Eliminar** (rojo)  
  - **Intercambiar** (azul)

#### 📱 Responsive
- Los títulos y el contenedor se reducen según el tamaño de pantalla.  
- La imagen se adapta para ofrecer una mejor visualización en dispositivos pequeños.

#### 🧾 Síntesis
La **Billetera** es un espacio visual y funcional donde el usuario gestiona sus figuritas duplicadas, pudiendo eliminarlas o iniciar intercambios de forma sencilla.

---

### 3.1 Ruleta de premios 

La **Ruleta Dinámica de Premios** permite a los usuarios obtener recompensas aleatorias mediante distintas modalidades de giro: giros múltiples y giros automáticos.
La ruleta está compuesta por 8 secciones (una por cada premio) y dispone de controles para realizar paquetes de giros o giros consecutivos en modo automático.

## Controles de giro

### Botones laterales (giros múltiples)

- **5 giros**
- **10 giros**
- **15 giros**

Estos botones permiten ejecutar el número de giros seleccionado de forma consecutiva.

### Botón “Automático”

- Activa giros consecutivos automáticos hasta agotar los giros disponibles del usuario.
- El modo automático se detiene si el usuario se queda sin giros o si el usuario cancela la acción.

---

## Composición de la ruleta y premios

La ruleta contiene 8 secciones. Cada sección corresponde a un premio o resultado:

1. **Sobre Dorado**
   - Otorga un sobre dorado que contiene figuritas con altas probabilidades de ser **especiales** o **legendarias**.

2. **Sobre Gris**
   - Otorga un sobre gris que contiene figuritas **comunes**.

3. **Figurita Aleatoria**
   - Entrega una figurita aleatoria que puede ser **común**, **especial** o **legendaria**.

4. **Giro Gratis**
   - Añade un giro gratuito al total disponible del usuario.

5. **Nada**
   - Casilla intercalada entre premios para asegurar baja probabilidad y aleatoriedad de los premios especiales.

> **Nota:** Las 8 secciones incluyen casillas "Nada" intercaladas para balancear las probabilidades.

---

## Gestión de giros y recompensas

- Si un usuario se queda sin giros, puede adquirir más en la **Tienda** de la aplicación.
- Los usuarios también pueden recibir giros gratis como **recompensa diaria** por iniciar sesión con frecuencia.

--- 

### 4.1 Página del usuario

# Panel de Usuario y Panel de Administración

## Visión general

FigusApp distingue a los usuarios por su **rol** en el sistema:

- **Usuarios comunes**: Acceden a una página de configuración donde pueden ver y actualizar sus datos de perfil.
- **Administradores**: Acceden a un panel ABM (Alta, Baja, Modificación) para gestionar las entidades del sistema en la base de datos: **figuritas**, **sobres**, **álbumes** y **usuarios**.

Ambas interfaces cuentan con un **menú lateral** que facilita la navegación entre secciones.

---

## Menú lateral — Usuario común

El menú lateral para usuarios comunes incluye:

- Foto de perfil
- Correo electrónico
- Botón **Cerrar sesión**
- Sección **Mi cuenta**
  - Botón **Mis álbumes**
  - _(Próximamente)_ Botón **Historial de compras**

---

## Menú lateral — Administrador

El menú lateral para administradores incluye:

- Foto de perfil
- Correo electrónico
- Botón **Cerrar sesión**
- Sección **Administración** con las siguientes secciones y submenus asociados:

### Listar

- Listar figuritas
- Listar sobres
- Listar álbumes
- Listar usuarios

### Agregar

- Agregar figuritas
- Agregar sobres
- Agregar álbumes
- Agregar usuarios

### Modificar

- Modificar figuritas
- Modificar sobres
- Modificar álbumes
- Modificar usuarios

### Eliminar

- Eliminar figuritas
- Eliminar sobres
- Eliminar álbumes
- Eliminar usuarios

Cada botón despliega submenús con accesos a formularios específicos para cada entidad, permitiendo realizar operaciones de forma fluida.

---

## Formularios y operaciones

Los formularios del sistema trabajan con los **ID** de las entidades a tratar y aceptan parámetros adicionales (por ejemplo, límites numéricos para paginado y control de cantidad en los métodos de listado). Las operaciones soportadas por los formularios son:

- Crear (Alta) — agregar registros nuevos.
- Consultar (Listar) — obtener información disponible.
- Actualizar (Modificar) — cambiar datos existentes.
- Eliminar (Baja) — eliminar registros.

Los resultados de las operaciones se presentan como **tablas generadas dinámicamente** que muestran los datos asociados a las entidades tratadas.

---

## 3. Mejoras futuras

- Historial de compras para el usuario.
- Seccion de ofertas para cambio de figuritas.
- Implementación de react y sistema de enrutamiento.

---
## 4. Tutorial de instalación

### Pasos de instalación

### 1. Descargar o clonar el repositorio  
git clone https://github.com/Manuirigoyen/Error_404

### 2. Abrir el proyecto en un IDE  
Por ejemplo, Visual Studio Code.

### 3. Acceder a la terminal (desde el IDE o desde la PC) e instalar lo necesario:

Instalar dependencias del proyecto  
npm install

Instalar TypeScript de manera global  
npm install -g typescript

Compilar el proyecto  
tsc

### 4. Abrir el proyecto en el navegador

Desde Visual Studio Code:  
1. Abrir el archivo index.html  
2. Hacer clic en “Go Live” (extensión Live Server)

---

## 5. Documentación adicional

📄 **Documentación general del proyecto**  
https://drive.google.com/drive/folders/1-e5JJGMmQp8lzj8U599qJqKR_weE0CGc?usp=drive_link

💻 **Descargar Visual Studio Code**  
https://code.visualstudio.com/

🖼️ **Canvas del proyecto**  
https://www.canva.com/design/DAG1V4d1z4s/rXExsORoZpl0FNAAC3b2dg/edit

---

## 6. Autores

### Martín Lorenzi  
📧 alexmartin9c@gmail.com

**Tareas realizadas:**  
- Diseño de la página de administración  
- Diseño de la página de configuración del usuario  
- Diseño de la ruleta de premios  
- Diseño de los archivos .json  
- Diseño del home  
- Implementación de Bootstrap

---

### Manuel Irigoyen  
📧 irigoyenmanuel006@gmail.com

**Tareas realizadas:**  
- Diseño del header  
- Diseño del footer  
- Diseño del home  
- Diseño del álbum de figuritas  
- Diseño de la billetera del usuario  
- Diseño de los archivos .json  
- Diseño de canvas

---

### Lautaro Arce  
📧 lautaroarce26@gmail.com

**Tareas realizadas:**  
- Diseño de inicio de sesión y de registro  
- Diseño de la tienda


