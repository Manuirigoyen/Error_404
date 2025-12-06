# Navegación (Navbar)

La aplicación cuenta con una barra de navegación, color azul, en la parte superior (header), que permite acceder rápidamente a las distintas secciones del sitio:

. Logo: ubicado a la izquierda, sirve como elemento de identidad visual y puede enlazar a la página principal (Home).

. Links de navegación: se muestran a la derecha, con opciones como Tienda, Billetera, Ruleta, Contacto, Perfil. Y si no se ha iniciado sesion: Tienda, Billetera, Ruleta, Contacto, Iniciar sesion/registrarse.

. Menú hamburguesa: en pantallas pequeñas (≤815px) los links se ocultan y se reemplazan por un botón hamburguesa. Al hacer clic, se despliega el menú en formato vertical ocupando todo el ancho.

-Diseño responsive: se adapta automáticamente a distintos tamaños de pantalla.
-Uso de Flexbox para alinear logo y links.
-Estilos con transiciones suaves en hover para mejorar la experiencia de usuario.
-El menú hamburguesa se controla con JavaScript, alternando la clase .show en .nav-links.

## Mejoras futuras:
Cuando el visitante no haya iniciado sesión, aparecerán dos botones: Iniciar sesión y Registrarse (abrirán modales con los formularios correspondientes).
Una vez que el usuario se haya autenticado, esos botones se ocultarán y se mostrará únicamente el botón de Perfil (con la opción de cerrar sesión y acceder a sus datos).

# Home 
El home es una página web estática, responsive, que funciona como vitrina del álbum virtual de figuritas de las selecciones de Argentina, Brasil y Francia. El usuario puede navegar por una barra de menú (Navbar), ver un carrusel de imágenes promocionales y acceder al (Footer) información de contacto, métodos de pago y redes sociales, etc. Todo el estilo está basado en Bootstrap y una tipografía personalizada Quicksand.

. El título que aparece en la página es el h1 con el texto “Bienvenidos a Figusapp, álbum oficial de las mejores selecciones del mundo!!”.
Propósito: es la primera frase que ve el usuario, resume la idea central del sitio (un álbum virtual de figuritas) y capta la atención con un tono entusiasta.
Estilo: en style.css se le asigna la tipografia "Quicksand", tamaño relativo (3vw), color amarillo y una sombra negra para que destaque, especialmente en fondos claros.
Responsividad: el tamaño se adapta al ancho de la pantalla; en móviles el texto se reduce para que siga siendo legible sin romper el diseño.

. El carrusel es la zona donde aparecen, una tras otra, cuatro imágenes que muestran el álbum y sus funciones. Funciona como un deslizador automático: al cargar la página la primera foto se ve, y cada pocos segundos cambia a la siguiente, y también puedes pasarlas manualmente con las flechas izquierda y derecha. Está centrado en la pantalla y se adapta a móviles, reduciendo su altura para que se vea bien en pantallas pequeñas. En resumen, es una forma visual y rápida de presentar los contenidos principales del sitio.

. Bloque de texto: es un párrafo que resume la propuesta de FigsuApp.
El objetivo es captar la atención del visitante en la página de inicio, explicando rápidamente qué puede hacer y qué premios hay.
Tiene una unidad de medida relativa que se adapta a todas las pantallas
Es motivador y directo, invita a “empezar ahora” y “llevar la pasión al siguiente nivel”.
En resumen, es el mensaje de bienvenida que, con estilo centrado, vende la idea central de la app en pocos renglones.

Desde el home tambien se puede acceder al footer desplazandose hacia abajo.

# Footer
El pie de página está dividido en cuatro bloques principales y está siempre visible al final de la página.
. "Colecciona la pasión": texto breve con el nombre del sitio y el año, seguido de enlaces a “Términos de Servicio”, “Política de Privacidad” y “Política de Cookies”.
. "Contacto": número de WhatsApp, dirección de correo y un pequeño encabezado que agrupa los íconos de redes sociales (WhatsApp, Instagram, Facebook, Email, LinkedIn).
. "Consultas": formulario centrado con un selector de motivo, campo de email y textarea para el mensaje; botón “Enviar” y logos de las tecnologías usadas (HTML5, CSS3, TypeScript y Bootstrap).
. "Métodos de Pago": cuadrícula de iconos de tarjetas y servicios de pago (Visa, Mastercard, Pago Fácil, Rapipago, Naranja, Diner, Cenco, América) que enlazan a sus respectivos sitios.
Todo el footer mantiene el fondo azul primario y el texto blanco, con diseño responsivo que se centra en dispositivos móviles.

# Album
La página está centrada en la pantalla y comienza con un título “Mis Álbumes” de color amarillo con una sombra negra, que indica que el usuario está viendo sus colecciones. A continuación aparecen tres bloques rectangulares de color blanco con opacidad para que se pueda seguir apareciando el fonodo que es la misma imagen que el logo, un bloque para cada selección (Argentina, Brasil y Francia). Cada bloque tiene:
. Encabezado: El nombre del país y una pequeña bandera al lado.
. Barra de progreso: Muestra cuántas figuritas se han completado ( inicia en 0 %).
. Grid de figuritas: 15 tarjetas por selección, la mayoría con la foto de una jugada y una “especial” con la imagen de un signo de pregunta y cuando se obtiene esa figurita se revela la leyenda (Maradona, Pelé o Zidane). Las tarjetas están en escala de grises y se colorean cuando se completan.
. Bandera y descripcion: a la derecha del grid, esta la bandera correspondiente de manera perpendicular con una breve reseña de la selección por encima. Al completar ese album la bandera recupera el color.
Al final de la página hay una zona promocional que invita a completar los albumes para ganar un viaje; si el usuario ya los completó, se muestra un mensaje de felicitación y un botón para reclamar el premio.
En cuanto a la responsividad, el diseño se adapta a distintas pantallas: en móviles las tarjetas se reducen, la descripción y bandera se giran 90° y se colocan por debajo de las figus, la barra de progreso ocupa todo el ancho disponible, manteniendo la legibilidad y la funcionalidad en cualquier dispositivo.
En esta seccion tambien se puede navegar por el nav y el footer.

## Mejoras futuras:
Que haya una tienda funcional relacionada a los albumes, las figus compradas se cargarian directamente en el lugar que van, y al ya tenerlas adquiridas irian a la seccion billetera (como figu repetida) para poder intercambiar o eliminar.

# Billetera
En billetera.html el usuario ve todas sus figuritas repetidas dentro de un recuadro blanco semitransparente, centrado y con sombra, que destaca sobre el fondo de la página.
.Título y subtítulo: “ACA SE GUARDAN TUS FIGURITAS REPETIDAS” y, debajo, “Intercámbialas con amigos!” marron.
.Contenedor de figuritas: las figus se insertan dinámicamente; cada una muestra la imagen de la figurita, un ícono de billetera abajo y, en la esquina superior derecha, un contador de cuántas repetidas hay. Al interactuar, aparecen dos botones: Eliminar (rojo) e Intercambiar (azul).
.Responsive: los títulos y el contenedos se reducen dependiendo la medida de la pantalla, adaptando la imagen para un mejor visualizacion.
En síntesis, la Billetera es un espacio visual y funcional donde el usuario gestiona sus figuritas duplicadas, pudiendo eliminarlas o iniciar intercambios de forma sencilla.

## Mejoras futuras:
Poder intercambiar las figus con demas personas.

# Ruleta Dinámica de Premios

> Ruleta de premios para obtener recompensas aleatorias.

## Descripción

La **Ruleta Dinámica de Premios** permite a los usuarios obtener recompensas aleatorias mediante distintas modalidades de giro: giros múltiples y giros automáticos.

La ruleta está compuesta por 8 secciones (una por cada premio) y dispone de controles para realizar paquetes de giros o giros consecutivos en modo automático.

---

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

## Mejoras futuras

- Historial de compras para el usuario.
- Seccion de ofertas para cambio de figuritas.

---
