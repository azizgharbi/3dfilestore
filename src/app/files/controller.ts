import {
	Controller,
	Body,
	Get,
	Post,
	Delete,
	Put,
	UploadedFile,
	Route,
	Tags,
} from "tsoa";
import FileService from "./service";
import { File } from "@prisma/client";
import { renameRequest } from "./types";
import fs from "fs";

@Tags("Files")
@Route("/api/v1/files")
export class FilesController extends Controller {
	/*
	 * File Controller
	 */
	@Get()
	public async getFiles(): Promise<File[]> {
		const files = FileService.getAllFiles();
		return files;
	}

	@Post('/upload')
	public async upload(
		@UploadedFile('file') file: Express.Multer.File,
	): Promise<File> {
		const savedFile = FileService.save({
			name: file.filename,
			size: file.size,
			path: file.destination,
			creation_date: new Date().toString(),
		});
		return savedFile;
	}

	@Get('/download/:id')
	public async downloadFile(id: number) {
		const file = await FileService.get(id);

		if (!file || !fs.existsSync(file.path)) {
			throw new Error("Error file Not found");
		}

		const dist = `${file.path}/${file.name}`;
		this.setHeader("Content-Disposition", `attachment; filename=${file.name}`);
		this.setHeader("Content-Type", "text/plain");
		return fs.createReadStream(dist);
	}

	@Put('/rename')
	public async renameFile(@Body() req: renameRequest) {
		try {
			const file = await FileService.get(req.id);

			const newFileName = `${Date.now()}-${req.new_name}.obj`;
			const renamedFile = await FileService.update(req.id, {
				name: newFileName,
			});

			fs.rename(
				`${file.path}/${file.name}`,
				`${file.path}/${newFileName}`,
				function (err) {
					throw new Error(`Error: ${err?.message}`);
				},
			);

			return renamedFile;
		} catch (err) {
			throw new Error("Error renaming the file from db");
		}
	}

	@Delete('/delete/:id')
	public async deleteFile(id: number) {
		try {
			const file = await FileService.delete(id);
			const filePath = `${file.path}/${file.name}`;
			fs.unlink(filePath, function (err) {
				throw new Error(`Error: ${err?.message}`);
			});
			return file;
		} catch (err) {
			throw new Error("Error deleting the file from db");
		}
	}
}
