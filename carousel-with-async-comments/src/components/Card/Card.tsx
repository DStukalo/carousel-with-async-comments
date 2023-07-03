import { useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { Card } from 'flowbite-react';
import { DefaultComments } from '../Comments/Comments';
import { Preloader } from '../Preloader/Preloader';
import { cardTheme } from './CardTheme';
import { PostType } from '../../types/types';
import { useComments } from '../../hooks/useComments';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

type DefaultCardProps = {
	post: PostType;
};

export function DefaultCard({ post }: DefaultCardProps) {
	const cardRef = useRef<HTMLDivElement>(null);
	const isVisible = useIntersectionObserver({ threshold: 0.5 }, cardRef);
	const { comments } = useComments(post.id, isVisible);

	return (
		<div
			className="sm:max-w-2xl flex items-center justify-center max-w-xs"
			ref={cardRef}
		>
			<div className=" w-80 sm:w-[512px]">
				<Card
					title={post.title}
					className="h-128 flex flex-col justify-start gap-2 overflow-auto"
					theme={cardTheme}
				>
					<NavLink to={`/post/${post.id}`}>
						<h5 className=" text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white first-letter:uppercase text-ellipsis overflow-hidden whitespace-nowrap">
							{post.title}
						</h5>
						<div className="p-2">
							<p className="font-normal text-gray-700 dark:text-gray-400 first-letter:uppercase break-all">
								{post.body}
							</p>
						</div>
					</NavLink>
					<div className="mt-2">
						{comments ? (
							<DefaultComments data={comments} />
						) : (
							<Preloader spinnerSize="xl" />
						)}
					</div>
				</Card>
			</div>
		</div>
	);
}
