#### OBJ Wavefront files store:

- `Nodejs`
- `Express`
- `Typescript`
- `Tsoa`

#### Why `tsoa` and not a shiny framework like `Nestjs`, Why using `postgres` ?

- `I am using TSOA package and PostgreSQL for my side project, where I need to add file management feature. 
  Thus, even if I don't succeed in the technical assessment, 
  I can still benefit from this functionality in my project. 
  I have invested some time in this and there are undoubtedly areas for improvement.`

![bad_luck](https://www.gifcen.com/wp-content/uploads/2021/06/meme-gif-4.gif)

#### Routes

- `GET: /api/v1/files`
- `POST: /api/v1/files/upload`
- `GET: /api/v1/files/download/{id}`
- `PUT: /api/v1/files/rename`
- `Delete: /api/v1/files/delete/{id}`


#### Development:

- `yarn run dev`

### Nice to have:

- `Unit test` : I need more time.
- `Download a transformed file` : I need more time.
- `Test with the frontend`: I need more time.

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

- `prisma migrate dev --name add_description`.
- `prisma migrate reset`.
- `prisma generate`.


### Demo

![demo](demo/3dversetest.png)
