import { useLocation } from 'react-router-dom';

import { Post } from '../components/Post/Post';
import { usePost } from '../hooks/usePost';
import { Preloader } from '../components/Preloader/Preloader';
import { PostType } from '../types/types';
import { useComments } from '../hooks/useComments';
import { useEffect } from 'react';

export const PostPage = () => {
	const { pathname } = useLocation();
	const id = pathname.split('/')[2];
	const { post, isLoading } = usePost(Number(id));
	const { comments } = useComments(Number(id), true);

	useEffect(() => {
		document.title = `Post № ${id} || Carousel posts`;
	}, []);

	if (isLoading)
		return (
			<>
				<Preloader spinnerSize="xl" />
			</>
		);

	return (
		<article className=" mx-auto max-w-7xl mb-8 flex justify-center items-center ">
			<div className="flex justify-center items-center flex-col p-2">
				{post ? (
					<Post
						body={(post as PostType).body}
						title={(post as PostType).title}
						comments={comments}
					/>
				) : null}
			</div>
		</article>
	);
};
