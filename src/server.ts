import express, { json, urlencoded } from "express";
import swaggerUi from "swagger-ui-express";
import path from "path";
import multer from "multer";

import { RegisterRoutes } from "../build/routes";
import { errorHandler } from "./middlewares/errors";

const openApiDocumentation = require(path.join(
	__dirname,
	"../build/swagger.json",
));

const uploadDir = path.join(__dirname, "..", "uploads");
const storage = multer.diskStorage({
	destination: uploadDir,
	filename: (_req, file, cb) => {
		const timeStamp = Date.now();
		const fileName = `${timeStamp}-${file.originalname}`;
		cb(null, fileName);
	},
});

const objFileFilter = (
	_req: Express.Request,
	file: Express.Multer.File,
	cb: multer.FileFilterCallback,
) => {
	const ext = path.extname(file.originalname).toLowerCase();
	if (ext === ".obj") {
		cb(null, true);
	} else {
		cb(new Error("Only .obj files are allowed."));
	}
};

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
