#### OBJ Wavefront files store:

- `Nodejs`
- `Express`
- `Typescript`
- `Tsoa`

#### Why `tsoa` and not `nestjs`  ?

- `I am using TSOA package for my side project because I need to implement a file management feature. This way, 
even if I don't pass the technical test, I can still make use of this functionality in my project.`

![bad_luck](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMmY3MzRhNDU5YzgyNTk1NTI2NTI1MTE3MzQ3MmUwNDUyZWRkZTk0OSZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/3o7aCZDlmQZLe4Q4V2/giphy.gif)

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
- `Download a transformed file` :I need more time.
- `Test with the frontend`: I need more time.

### Routes and validations docs is using `tsoa`

- Swagger : `http://localhost:5000/api-docs`
- `yarn tsoa spec-and-routes`

### Database:

Database client  `Postgres` with (https://www.prisma.io/)

Under folder `database`:

- `docker-compose up -d`

Project root: 

- `yarn prisma generate`.
- `yarn prisma migrate dev`.

Update migration schema:

- `prisma migrate dev --name add_description`.
- `prisma migrate reset`.
- `prisma generate`.


### Demo

![demo](demo/3dversetest.png)
