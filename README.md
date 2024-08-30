Pasos para cargar el formulario:

Abrir el archivo HTML: Abre el archivo HTML que contiene el formulario en un navegador web compatible (como Chrome, Firefox, etc.).
Completar los campos requeridos:
Nombre: Ingresa tu nombre en el campo correspondiente.
Apellido: Ingresa tu apellido.
Email: Ingresa un correo electrónico válido.
Fecha de Nacimiento: Selecciona tu fecha de nacimiento utilizando el selector de fecha.
Nacionalidad: Selecciona tu nacionalidad de la lista desplegable.
Enviar el formulario: Haz clic en el botón "Enviar" para enviar el formulario.
Verificar: Si algún campo no cumple con las validaciones (como un email en formato incorrecto o una fecha de nacimiento futura), aparecerá un mensaje de alerta que te indicará el error. Corrige los errores y vuelve a intentar enviar el formulario.

2. Indicar para cada campo cuáles son los valores válidos e inválidos. ¿Se realiza esa validación de alguna forma?

Nombre:

Válido: Cualquier cadena de texto que no esté vacía.
Inválido: Un campo vacío.
Validación: Validación HTML con el atributo required.
Apellido:

Válido: Cualquier cadena de texto que no esté vacía.
Inválido: Un campo vacío.
Validación: Validación HTML con el atributo required.
Email:

Válido: Un email en formato correcto, por ejemplo, nombre@dominio.com.
Inválido: Cualquier cadena de texto que no siga el formato de un email, por ejemplo, nombre@dominio o nombre.com.
Validación: Validación HTML con el atributo required y validación adicional mediante JavaScript con una expresión regular para verificar el formato.
Fecha de Nacimiento:

Válido: Una fecha en formato YYYY-MM-DD que sea anterior a la fecha actual.
Inválido: Una fecha en formato incorrecto o una fecha futura.
Validación: Validación HTML con el atributo required y validación adicional mediante JavaScript que compara la fecha seleccionada con la fecha actual.
Nacionalidad:

Válido: Una selección de la lista desplegable.
Inválido: Si no se ha seleccionado ninguna opción (value="").
Validación: Validación HTML con el atributo required.

Exploración del formulario con NVDA y accesibilidad:

Navegación mediante TAB:
Acceso: Todos los campos del formulario, incluidos los botones, son accesibles mediante la tecla TAB. Esto se debe a que todos los elementos de entrada (input, select, button) están correctamente definidos en el DOM, y la navegación mediante TAB debería funcionar de forma estándar.

Compatibilidad con lector de pantalla NVDA:
Etiquetas: Cada campo del formulario está asociado con una etiqueta (label) usando el atributo for, lo que mejora la accesibilidad para los usuarios que utilizan lectores de pantalla como NVDA.
Feedback: Al navegar con TAB, NVDA debería anunciar correctamente cada etiqueta asociada al campo activo, permitiendo al usuario comprender el propósito de cada campo.

Accesibilidad general:
Accesible: El formulario debería ser completamente accesible para usuarios que dependen de NVDA, permitiéndoles completar todos los campos y activar los botones sin dificultades.
Consideraciones: Para mejorar aún más la accesibilidad, se podrían agregar atributos aria-* donde sea necesario, aunque el formulario básico ya cumple con las prácticas accesibles estándar.

Conclusión: No parece haber ningún campo o acción en este formulario que no sea accesible mediante NVDA, siempre que se utilice la tecla TAB para navegar y el formulario esté bien implementado en el HTML. Todos los campos son navegables y deberían anunciarse correctamente mediante el lector de pantalla.

Funcionamiento:
Cuando el usuario intenta enviar el formulario, las validaciones se ejecutan automáticamente.
Si el email no tiene un formato correcto o la fecha de nacimiento es incorrecta, se detiene el envío del formulario (event.preventDefault()), y se le notifica al usuario el error a través de una alerta.
