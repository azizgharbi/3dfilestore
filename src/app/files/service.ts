import { prisma } from "../../config";
import { fileRequest } from "./types";
import { File } from "@prisma/client";
import { ValidateError } from "tsoa";

class FileService {
	/*
	 * Private can be defined here
	 */
	constructor() {
		/*
		 * Any initialization can be defined here
		 */
	}

	async getAllFiles(): Promise<File | any> {
		try {
			const files = await prisma.file.findMany();
			console.log(files);
			return files;
		} catch (error: any) {
			throw new ValidateError(error, "Upload method");
		}
	}

	async save(body: fileRequest): Promise<File | any> {
		try {
			const { name, creation_date, size, path } = body;
			const new_file = await prisma.file.create({
				data: {
					name,
					path,
					size,
					creation_date,
				},
			});
			return new_file;
		} catch (error: any) {
			throw new ValidateError(error, "Upload method");
		}
	}

	async get(id: number): Promise<File | any> {
		try {
			const file = await prisma.file.findUnique({
				where: { id },
			});
			return file;
		} catch (error: any) {
			throw new ValidateError(error, "Download file method");
		}
	}

	async update(id: number, data: any): Promise<File | any> {
		try {
			const file = await prisma.file.update({
				where: { id },
				data,
			});
			return file;
		} catch (error: any) {
			throw new ValidateError(error, "Rename file method");
		}
	}

	async delete(id: number): Promise<File | any> {
		try {
			const file = await prisma.file.delete({
				where: { id },
			});

			return file;
		} catch (error: any) {
			throw new ValidateError(error, "Delete file method");
		}
	}
}

export default new FileService();
