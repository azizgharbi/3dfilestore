/* tslint:disable */
/* eslint-disable */
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import {
	Controller,
	ValidationService,
	FieldErrors,
	ValidateError,
	TsoaRoute,
	HttpStatusCodeLiteral,
	TsoaResponse,
	fetchMiddlewares,
} from "@tsoa/runtime";
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { FilesController } from "./../src/app/files/controller";
import type { RequestHandler, Router } from "express";
const multer = require("multer");
const upload = multer();

// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

const models: TsoaRoute.Models = {
	File: {
		dataType: "refAlias",
		type: {
			dataType: "nestedObjectLiteral",
			nestedProperties: {
				size: { dataType: "double", required: true },
				path: { dataType: "string", required: true },
				creation_date: { dataType: "string", required: true },
				name: { dataType: "string", required: true },
				id: { dataType: "double", required: true },
			},
			validators: {},
		},
	},
	// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
	renameRequest: {
		dataType: "refAlias",
		type: {
			dataType: "nestedObjectLiteral",
			nestedProperties: {
				new_name: { dataType: "string" },
				id: { dataType: "double", required: true },
			},
			validators: {},
		},
	},
	// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
};
const validationService = new ValidationService(models);

// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

export function RegisterRoutes(app: Router) {
	// ###########################################################################################################
	//  NOTE: If you do not see routes for all of your controllers in this file, then you might not have informed tsoa of where to look
	//      Please look into the "controllerPathGlobs" config option described in the readme: https://github.com/lukeautry/tsoa
	// ###########################################################################################################
	app.get(
		"/api/v1/files",
		...fetchMiddlewares<RequestHandler>(FilesController),
		...fetchMiddlewares<RequestHandler>(FilesController.prototype.getFiles),

		function FilesController_getFiles(request: any, response: any, next: any) {
			const args = {};

			// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

			let validatedArgs: any[] = [];
			try {
				validatedArgs = getValidatedArgs(args, request, response);

				const controller = new FilesController();

				const promise = controller.getFiles.apply(
					controller,
					validatedArgs as any,
				);
				promiseHandler(controller, promise, response, undefined, next);
			} catch (err) {
				return next(err);
			}
		},
	);
	// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
	app.post(
		"/api/v1/files/upload",
		upload.single("file"),
		...fetchMiddlewares<RequestHandler>(FilesController),
		...fetchMiddlewares<RequestHandler>(FilesController.prototype.upload),

		function FilesController_upload(request: any, response: any, next: any) {
			const args = {
				file: {
					in: "formData",
					name: "file",
					required: true,
					dataType: "file",
				},
			};

			// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

			let validatedArgs: any[] = [];
			try {
				validatedArgs = getValidatedArgs(args, request, response);

				const controller = new FilesController();

				const promise = controller.upload.apply(
					controller,
					validatedArgs as any,
				);
				promiseHandler(controller, promise, response, undefined, next);
			} catch (err) {
				return next(err);
			}
		},
	);
	// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
	app.get(
		"/api/v1/files/download/:id",
		...fetchMiddlewares<RequestHandler>(FilesController),
		...fetchMiddlewares<RequestHandler>(FilesController.prototype.downloadFile),

		function FilesController_downloadFile(
			request: any,
			response: any,
			next: any,
		) {
			const args = {
				id: { in: "path", name: "id", required: true, dataType: "double" },
			};

			// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

			let validatedArgs: any[] = [];
			try {
				validatedArgs = getValidatedArgs(args, request, response);

				const controller = new FilesController();

				const promise = controller.downloadFile.apply(
					controller,
					validatedArgs as any,
				);
				promiseHandler(controller, promise, response, undefined, next);
			} catch (err) {
				return next(err);
			}
		},
	);
	// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
	app.put(
		"/api/v1/files/rename",
		...fetchMiddlewares<RequestHandler>(FilesController),
		...fetchMiddlewares<RequestHandler>(FilesController.prototype.renameFile),

		function FilesController_renameFile(
			request: any,
			response: any,
			next: any,
		) {
			const args = {
				req: { in: "body", name: "req", required: true, ref: "renameRequest" },
			};

			// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

			let validatedArgs: any[] = [];
			try {
				validatedArgs = getValidatedArgs(args, request, response);

				const controller = new FilesController();

				const promise = controller.renameFile.apply(
					controller,
					validatedArgs as any,
				);
				promiseHandler(controller, promise, response, undefined, next);
			} catch (err) {
				return next(err);
			}
		},
	);
	// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
	app.delete(
		"/api/v1/files/delete/:id",
		...fetchMiddlewares<RequestHandler>(FilesController),
		...fetchMiddlewares<RequestHandler>(FilesController.prototype.deleteFile),

		function FilesController_deleteFile(
			request: any,
			response: any,
			next: any,
		) {
			const args = {
				id: { in: "path", name: "id", required: true, dataType: "double" },
			};

			// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

			let validatedArgs: any[] = [];
			try {
				validatedArgs = getValidatedArgs(args, request, response);

				const controller = new FilesController();

				const promise = controller.deleteFile.apply(
					controller,
					validatedArgs as any,
				);
				promiseHandler(controller, promise, response, undefined, next);
			} catch (err) {
				return next(err);
			}
		},
	);
	// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

	// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

	// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

	function isController(object: any): object is Controller {
		return (
			"getHeaders" in object && "getStatus" in object && "setStatus" in object
		);
	}

	function promiseHandler(
		controllerObj: any,
		promise: any,
		response: any,
		successStatus: any,
		next: any,
	) {
		return Promise.resolve(promise)
			.then((data: any) => {
				let statusCode = successStatus;
				let headers;
				if (isController(controllerObj)) {
					headers = controllerObj.getHeaders();
					statusCode = controllerObj.getStatus() || statusCode;
				}

				// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

				returnHandler(response, statusCode, data, headers);
			})
			.catch((error: any) => next(error));
	}

	// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

	function returnHandler(
		response: any,
		statusCode?: number,
		data?: any,
		headers: any = {},
	) {
		if (response.headersSent) {
			return;
		}
		Object.keys(headers).forEach((name: string) => {
			response.set(name, headers[name]);
		});
		if (
			data &&
			typeof data.pipe === "function" &&
			data.readable &&
			typeof data._read === "function"
		) {
			response.status(statusCode || 200);
			data.pipe(response);
		} else if (data !== null && data !== undefined) {
			response.status(statusCode || 200).json(data);
		} else {
			response.status(statusCode || 204).end();
		}
	}

	// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

	function responder(
		response: any,
	): TsoaResponse<HttpStatusCodeLiteral, unknown> {
		return function (status, data, headers) {
			returnHandler(response, status, data, headers);
		};
	}

	// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

	function getValidatedArgs(args: any, request: any, response: any): any[] {
		const fieldErrors: FieldErrors = {};
		const values = Object.keys(args).map((key) => {
			const name = args[key].name;
			switch (args[key].in) {
				case "request":
					return request;
				case "query":
					return validationService.ValidateParam(
						args[key],
						request.query[name],
						name,
						fieldErrors,
						undefined,
						{ noImplicitAdditionalProperties: "throw-on-extras" },
					);
				case "queries":
					return validationService.ValidateParam(
						args[key],
						request.query,
						name,
						fieldErrors,
						undefined,
						{ noImplicitAdditionalProperties: "throw-on-extras" },
					);
				case "path":
					return validationService.ValidateParam(
						args[key],
						request.params[name],
						name,
						fieldErrors,
						undefined,
						{ noImplicitAdditionalProperties: "throw-on-extras" },
					);
				case "header":
					return validationService.ValidateParam(
						args[key],
						request.header(name),
						name,
						fieldErrors,
						undefined,
						{ noImplicitAdditionalProperties: "throw-on-extras" },
					);
				case "body":
					return validationService.ValidateParam(
						args[key],
						request.body,
						name,
						fieldErrors,
						undefined,
						{ noImplicitAdditionalProperties: "throw-on-extras" },
					);
				case "body-prop":
					return validationService.ValidateParam(
						args[key],
						request.body[name],
						name,
						fieldErrors,
						"body.",
						{ noImplicitAdditionalProperties: "throw-on-extras" },
					);
				case "formData":
					if (args[key].dataType === "file") {
						return validationService.ValidateParam(
							args[key],
							request.file,
							name,
							fieldErrors,
							undefined,
							{ noImplicitAdditionalProperties: "throw-on-extras" },
						);
					} else if (
						args[key].dataType === "array" &&
						args[key].array.dataType === "file"
					) {
						return validationService.ValidateParam(
							args[key],
							request.files,
							name,
							fieldErrors,
							undefined,
							{ noImplicitAdditionalProperties: "throw-on-extras" },
						);
					} else {
						return validationService.ValidateParam(
							args[key],
							request.body[name],
							name,
							fieldErrors,
							undefined,
							{ noImplicitAdditionalProperties: "throw-on-extras" },
						);
					}
				case "res":
					return responder(response);
			}
		});

		if (Object.keys(fieldErrors).length > 0) {
			throw new ValidateError(fieldErrors, "");
		}
		return values;
	}

	// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
}

// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
