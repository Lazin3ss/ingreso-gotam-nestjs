# Proyecto de ingreso: Sistema de gestión de empleados

Este es un proyecto de desarrollo web full-stack que forma parte de un challenge de ingreso, el cual busca determinar mis habilidades como desarrollador web. Está actualmente desarrollado en TypeScript, haciendo uso de las siguientes tecnologías:
- Backend: **NestJS** (Obligatorio)
- Database: **SQLite** (Elegido debido la escala pequeña de la aplicación)
- Frontend: **Angular**, **UIKit**

Este proyecto sirvió tanto como demostración de mi trabajo, como práctica para estar al día con mis habilidades. Se realizó en 5 días, con un tiempo por día de 8 horas aproximadamente.

## Instalación

### Usando Docker

Para instalar este proyecto usando Docker, puede clonar este repositorio usando `git clone`, y a continuación, en la carpeta raíz, levantar un contenedor usando `docker-compose up`.

```console
git clone https://github.com/Lazin3ss/ingreso-gotam-nestjs
cd ingreso-gotam-nestjs
docker-compose up
```

Podrá acceder a la página web entrando a http://localhost/.

### Manual

Requisitos:
- Node JS

Clone el repositorio, y luego ejecute el comando `npm install` tanto dentro de la carpeta `backend` como `frontend` para instalar todas las dependencias. Luego, empleando dos terminales, ejecute `npm start` en cada una de las carpetas. El backend correrá en http://localhost:3000/ mientras que el frontend correrá en http://localhost:4200/

## Documentación

Puede leer la documentación accediendo a la [wiki](https://github.com/Lazin3ss/ingreso-gotam-nestjs/wiki) del repositorio.
