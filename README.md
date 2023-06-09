#### OBJ Wavefront files store:

- `Nodejs`
- `Express`
- `Typescript`
- `Tsoa`

![bad_luck](https://www.gifcen.com/wp-content/uploads/2021/06/meme-gif-4.gif)

#### Routes

- `GET: /api/v1/files`
- `POST: /api/v1/files/upload` Only `.obj` files
- `GET: /api/v1/files/download/{id}`
- `PUT: /api/v1/files/rename`
- `Delete: /api/v1/files/delete/{id}`


#### Development:

- `yarn run dev`.
- `chmod -R 755 uploads` and `mkdir uploads` folder if not exists.

### Routes and validations docs is using `tsoa`

- Swagger : `http://localhost:5000/api-docs`
- `yarn tsoa spec-and-routes`

### Database:

Database client  `Postgres` with (https://www.prisma.io/)

Under folder `database`:

- `docker-compose up -d`.

- `Database client url: http://localhost:8080/`.
- `System: Postgres` , `Username: test`, `Password: test`, `Database: db_test`

Project root: 

- `yarn prisma generate`.
- `yarn prisma migrate dev`.

Update migration schema:


- Rest database in case: `yarn prisma migrate reset`.

- Migrate: `yarn prisma migrate dev --name [description]`.

- Generate `prisma client`: `yarn prisma generate`.


### Demo

![demo](demo/3dversetest.png)
