# Digital Booking - Group 1 ✨

Hotel and inn rental application.

## Initial deployment (one time only)

~~~~ 
-npm start 
~~~~
* Edit *src/components/Helpers/Api.js* with the appropriate URL, depending on whether you will be working locally or with a database. online

## Step to production

1. Download and Install Terraform from the following link https://www.terraform.io/downloads
2. Verify the installation from the console with the command: terraform -v
3. Download the 'terraform-project' folder from https://drive.google.com/drive/folders/1dxFmwsC1cZEvM_E91Lk5SGFFiAUbStk1
4. Open the console in the above folder and place the following commands:
~~~~
-terraform init
-terraform apply 
-auto-approve
~~~~

* IMPORTANT:** You must place your key file with the name 'mykeyg1.pub' in the root of the project folder.
* Active Instances: EC2 WEBSERVER - EC2 API - RDS BD - S3 BUCKET

## Functionalities ⚙️

* Login and registration of common users and administrators through Spring Security and JWT.
* CRUD of products, categories, images, policies, scoring, users and roles.

# Versions 💻

## Version 4.0

* Login and registration for administrator users [ADD]
* Product creation for administrator role only [ADD]
* Product images stored in the bucket [ADD]
* Add products to favorites [ADD]
* My favorites" and "My reservations" section [ADD]

## Version 3.0

* Reservation calendar [ADD]
* Create reservations: available only for common users [ADD]
* Product sharing on social networks [ADD]
* Product rating [ADD]

## Version 2.0

* Filter by category and date range [ADD]
* Product details + Image gallery [ADD]
* Location by latitude and longitude + Map [ADD]

## Version 1.0

* Product home page with recommendations [ADD]
* Search filter by city [ADD]
* Login and registration for common users [ADD]

# Testing 👁️‍🗨️

* [General drive](https://drive.google.com/drive/folders/1RCvWxwTuaYh89l-6mFLFPYjrtGaroIHZ)
* [Test plan](https://docs.google.com/document/d/1LXx87xXa0CEM-3l0f3gOzDzwra_qM6bmQxYt6Tlak6Y/edit)
* [Test cases and executions](https://docs.google.com/spreadsheets/d/1elOkL5OL_g62tf1zrjW2OuvywI1XlrHn_TmLcIawMko/edit#gid=0)
* [Defects report](https://docs.google.com/spreadsheets/d/1elOkL5OL_g62tf1zrjW2OuvywI1XlrHn_TmLcIawMko/edit#gid=2083709232)
* [Postman execution](https://drive.google.com/drive/folders/1RCvWxwTuaYh89l-6mFLFPYjrtGaroIHZ)
* [Defect Evidence](https://drive.google.com/drive/folders/1MwB6agRXA4cfLmXDkZxffxHqwa9-NQXY)
* [Sprint 1 Status Report](https://docs.google.com/spreadsheets/d/1cwpdqubE7-irgPuoDFcbQr9Zh3N-HydpWBSwYqP4yu4/edit#gid=0)

# Authors 🖋️

* [Ana Olivares](https://github.com/anaolivares2712)
* [Bruno Sturniolo](https://github.com/SturnioloBruno)
* [Gianna Russo](https://github.com/gia-developer/)
* [Juan Manuel Lescano](https://github.com/juanmalescano)
* [Nicolás Gutierrez](https://github.com/nik0ss)
* [Sofia Vallo](https://github.com/svallo34)

#

# Digital Booking - Grupo 1 ✨

Aplicación de alquiler de hoteles y posadas.

## Despliegue inicial (sólo una vez)

~~~~ 
-npm start 
~~~~
* Editar *src/componentes/Helpers/Api.js* con la URL que corresponda, dependiendo si trabajarás localmente o con una base de datos. online

## Paso a producción

1. Descargar e Instalar Terraform desde el siguiente link https://www.terraform.io/downloads
2. Verificar la instalación desde la consola con el comando: terraform -v
3. Descargar la carpeta 'terraform-proyect' desde https://drive.google.com/drive/folders/1dxFmwsC1cZEvM_E91Lk5SGFFiAUbStk1
4. Abrir la consola en la carpeta anterior y colocar los siguientes comandos:
~~~~
-terraform init
-terraform apply 
-auto-approve
~~~~

* **IMPORTANTE:** Deberá colocar su archivo key con el nombre 'mykeyg1.pub' en la raiz de la carpeta del proyecto.
* Instancias activas: EC2 WEBSERVER - EC2 API - RDS BD - S3 BUCKET

# Funcionalidades ⚙️

* Login y registro de usuarios comunes y administradores a través de Spring Security y JWT.
* CRUD de productos, categorías, imágenes, políticas, puntuación, usuarios y roles.

# Versiones 💻

## Versión 4.0

* Login y registro para usuarios administradores [ADD]
* Creación de producto sólo para rol administrador [ADD]
* Imágenes de producto almacenadas en el bucket [ADD]
* Agregar productos a favoritos [ADD]
* Sección de "Mis favoritos" y "Mis reservas" [ADD]

## Versión 3.0

* Calendario de reservas [ADD]
* Crear reservas: disponible sólo para usuarios comunes [ADD]
* Compartir producto en redes sociales [ADD]
* Puntuación de productos [ADD]

## Versión 2.0

* Filtro por categoría y rango de fechas [ADD]
* Detalles del producto + Galería de imágenes [ADD]
* Ubicación por latitud y longitud + Mapa [ADD]

## Versión 1.0

* Home de productos con recomendaciones [ADD]
* Filtro de búsqueda por ciudad [ADD]
* Login y registro para usuarios comunes [ADD]

# Testing 👁️‍🗨️

* [Drive general](https://drive.google.com/drive/folders/1RCvWxwTuaYh89l-6mFLFPYjrtGaroIHZ)
* [Plan de pruebas](https://docs.google.com/document/d/1LXx87xXa0CEM-3l0f3gOzDzwra_qM6bmQxYt6Tlak6Y/edit)
* [Casos de prueba y ejecuciones](https://docs.google.com/spreadsheets/d/1elOkL5OL_g62tf1zrjW2OuvywI1XlrHn_TmLcIawMko/edit#gid=0)
* [Reporte de defectos](https://docs.google.com/spreadsheets/d/1elOkL5OL_g62tf1zrjW2OuvywI1XlrHn_TmLcIawMko/edit#gid=2083709232)
* [Ejecución postman](https://drive.google.com/drive/folders/1RCvWxwTuaYh89l-6mFLFPYjrtGaroIHZ)
* [Evidencia de defectos](https://drive.google.com/drive/folders/1MwB6agRXA4cfLmXDkZxffxHqwa9-NQXY)
* [Informe de estado Sprint 1](https://docs.google.com/spreadsheets/d/1cwpdqubE7-irgPuoDFcbQr9Zh3N-HydpWBSwYqP4yu4/edit#gid=0)

# Autores 🖋️

* [Ana Olivares](https://github.com/anaolivares2712)
* [Bruno Sturniolo](https://github.com/SturnioloBruno)
* [Gianna Russo](https://github.com/gia-developer/)
* [Juan Manuel Lescano](https://github.com/juanmalescano)
* [Nicolás Gutierrez](https://github.com/nik0ss)
* [Sofia Vallo](https://github.com/svallo34)
