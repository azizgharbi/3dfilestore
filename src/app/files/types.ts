export type fileRequest = {
	name: string;
	size: number;
	path: string;
	creation_date: string;
};

export type renameRequest = {
	id: number;
	new_name?: string;
};
