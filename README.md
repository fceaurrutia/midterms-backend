# base-backend-graphql
Apollo and GraphQL Backend Base using NodeJS

## Comandos

### Instalación
- Para instalar primero deben tener NodeJS v16, NPM y Docker en su computador.
- En la terminal correr el comando `npm install --global yarn`
- Luego ir a la carpeta base del backend y crear un archivo .env basado en el .env-example.
- Una vez se haya hecho eso, utilizar el comando `docker-compose up -d --build`

### Prisma
- npx prisma generate: Genera una conexión a BD.
- npx prisma db push: Replega los cambios que se hicieron en el archivo schema.prisma hacia la base de datos.
- npx prisma db pull: Recibe los cambios de la base de datos hacia el esquema.