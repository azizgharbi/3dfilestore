import { Response, Request, NextFunction } from "express";
import { ValidateError } from "tsoa";

export function errorHandler(
	error: unknown,
	_req: Request,
	res: Response,
	next: NextFunction,
): Response | void {
	if (error instanceof ValidateError) {
		return res.status(422).json({
			message: "Validation Failed",
			details: error?.fields,
		});
	}

	if (error instanceof Error) {
		return res.status(500).json({
			message: error.message,
		});
	}

	next();
}
