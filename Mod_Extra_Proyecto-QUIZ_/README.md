#Ejercicio Tema 19: Añadir autologout
Añadir a la versión Quiz 19 “HTTPS” una funcionalidad de “autologout”. Esta nueva funcionalidad debe desconectar la sesión del usuario si este no realiza ninguna actividad durante un periodo de 2 minutos.
Se recomienda añadir los siguiente en en el máximo nivel de la aplicación (app.js)
- Un nuevo evento que ejecute periodicamente
- un middleware que cuente los hay que añadir un reloj que cuente el tiempo desde periódico que La página se enlazara desde la barra de navegación con un enlace adicional, de nombre autor.
La página incluirá el nombre de los 2 autores (miembros de la pareja), una foto y un pequeño video de presentación del portal.
Desplegar dicha versión en Heroku y entregar el enlace a dicha versión por Moodle.
Recomendación: Hacer una rama en un clon del proyecto Quiz desde Quiz 6, que añada dicha funcionalidad y desplegar dicha rama en Heroku.
Añadir Para esta entrega se debe añadir a la versión 7 de la aplicación Quiz la capacidad de borrar preguntas de la base de datos. La version 7 es la que permite responder a preguntas, crear nuevas preguntas y editarlas.
La funcionalidad hay que añadirla conectando al enlace "Borrar” ya incluido en la barra de navegación (delimitada con la marca “<nav>” en el marco o layout).
“Borrar” nos llevará a una primera pantalla que nos permite seleccionar la pregunta que queremos borrar, de forma que una vez seleccionada borre la pregunta de la base de datos cuando se pulse un botón de “Borrar” que debe existir en dicha vista.
La implementación deberá pedir confirmación antes de borrar con un pequeño desplegable. En caso de confirmar debe borrar la pregunta y volver a la vista “index”. En caso de no confirmar, deberá volver a index solamente.
Debe entregarse un fichero zip con todo el desarrollo realizado. Por supuesto deben borrarse los directorios y ficheros de instalaciones y datos como: node_modules, quiz.sqlite, ...