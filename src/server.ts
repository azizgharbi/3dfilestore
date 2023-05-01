import express, { json, urlencoded } from "express";
import swaggerUi from "swagger-ui-express";
import path from "path";
import multer from "multer";
import { objFileFilter, storage } from "./config";
import { RegisterRoutes } from "../build/routes";
import { errorHandler } from "./middlewares/errors";

const openApiDocumentation = require(path.join(
	__dirname,
	"../build/swagger.json",
));

const multerMiddleware = multer({ storage, fileFilter: objFileFilter }).single(
	"file",
);

const app = express();

// urlencoded
app.use(
	urlencoded({
		extended: true,
	}),
);
// Json
app.use(json());
// Multer middleware
app.use("/api/v1/files/upload", multerMiddleware);
// Register Routes for Tsoa
RegisterRoutes(app);

// Error middleware
app.use(errorHandler);
// swaggerUi middleware
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(openApiDocumentation));

// listen on 5000
app.listen(5000, () => {
	console.log("Server listening on port 5000");
});
