import { ReactNode } from 'react';
import { CommentType } from '../../types/types';

type PostProps = {
	body: string;
	title: string;
	comments: CommentType[] | null;
};
export const Post = ({ body, title, comments }: PostProps) => {
	return (
		<div className="flex flex-col p-2">
			<h2 className=" text-center text-3xl first-letter:uppercase mb-6">
				{title}
			</h2>
			<p className=" text-lg first-letter:uppercase mb-6 p-2">{body}</p>
			<h3 className="text-left p-2">Comments:</h3>
			{comments ? (
				comments.map((el): ReactNode => {
					return (
						<div className=" text-sm p-2 mb-2">
							<h4 className=" italic text-base first-letter:uppercase">
								{el.name}
							</h4>
							<p className=" first-letter:uppercase">{el.body}</p>
						</div>
					);
				})
			) : (
				<div className=" text-sm">
					Unfortunately, no one has written any comments yet
				</div>
			)}
		</div>
	);
};
