TaskMERN es una aplicación web completa desarrollada con el stack MERN (MongoDB, Express, React, Node.js) que permite a los usuarios administrar y organizar sus tareas de manera eficiente. Ofrece funcionalidades clave como autenticación de usuarios, creación de proyectos, asignación de tareas a proyectos específicos, seguimiento del estado de las tareas y eliminación de tareas.
Características principales

Autenticación de usuarios: Los usuarios pueden registrarse y autenticarse utilizando JSON Web Tokens (JWT) para acceder a la aplicación de forma segura.
Gestión de proyectos: Los usuarios pueden crear nuevos proyectos y organizarlos según sus necesidades.
Administración de tareas: Dentro de cada proyecto, los usuarios pueden agregar, actualizar y eliminar tareas asociadas. Cada tarea tiene un estado (pendiente, en progreso, completada) que se puede modificar fácilmente.
Interfaz intuitiva: La aplicación cuenta con una interfaz de usuario moderna y responsive, construida con React, que facilita la interacción y la navegación.

Tecnologías utilizadas

MongoDB: Base de datos NoSQL utilizada para almacenar la información de usuarios, proyectos y tareas.
Express.js: Framework de Node.js utilizado para construir el servidor y la API RESTful.
React.js: Biblioteca de JavaScript para construir la interfaz de usuario interactiva del lado del cliente.
Node.js: Entorno de ejecución de JavaScript utilizado para el backend de la aplicación.

Instalación y ejecución

Clona este repositorio: git clone https://github.com/marioisl/mern-stack-tasks.git
Instala las dependencias tanto para el cliente como para el servidor: npm install
Configura las variables de entorno necesarias (por ejemplo, la cadena de conexión a MongoDB)
Inicia el servidor: npm run dev
Accede a la aplicación en http://localhost:4000
