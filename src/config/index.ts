import { PrismaClient } from "@prisma/client";
import multer from "multer";
import path from "path";
export const prisma = new PrismaClient();

// Multer config
const uploadDir = path.join(__dirname, "..", "../uploads");
export const storage = multer.diskStorage({
	destination: uploadDir,
	filename: (_req, file, cb) => {
		const timeStamp = Date.now();
		const fileName = `${timeStamp}-${file.originalname}`;
		cb(null, fileName);
	},
});

export const objFileFilter = (
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
