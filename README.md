# Midterms Backend

Apollo and GraphQL Backend Base using NodeJS

## Comandos

### Instalación

- Para instalar primero deben tener NodeJS v16, NPM y Docker en su computador.
- En la terminal correr el comando `npm install --global yarn`
- Luego ir a la carpeta base del backend y crear un archivo .env basado en el .env-example.
- Una vez se haya hecho eso, utilizar el comando `docker-compose up -d --build`
- Para terminar la instalación se debe usar `yarn install`
- Por último se inicia la base de datos con `npx prisma db push`

### Package Commands

- yarn dev: Inicia el entorno de desarrollo.
- yarn build: Compila el código y lo guarda en una carpeta.
- yarn start:

### Prisma

- npx prisma generate: Genera una conexión a BD.
- npx prisma db push: Replega los cambios que se hicieron en el archivo schema.prisma hacia la base de datos.
- npx prisma db pull: Recibe los cambios de la base de datos hacia el esquema.
