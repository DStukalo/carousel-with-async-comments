export type PostType = {
	body: string;
	id: number;
	title: string;
	userId: number;
};

export type CommentType = {
	body: string;
	email: string;
	id: number;
	name: string;
	postId: number;
};
