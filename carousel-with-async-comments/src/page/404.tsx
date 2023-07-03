import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

export const NotFoundPage = () => {
	useEffect(() => {
		document.title = '404 || Not Found';
	}, []);

	return (
		<article className="min-h-screen m-auto w-4/6">
			<div className="flex flex-col items-center justify-center mt-10">
				<h2 className=" text-4xl text-yellow-400 font-bold text-center w-4/6 p-2 mb-10">
					This page Not Found.
				</h2>
				<p className=" text-lg font-semibold">
					You can go to the{' '}
					<span className=" italic text-neutral-900 hover:text-amber-400">
						<NavLink to={'/'}>main page</NavLink>
					</span>
				</p>
			</div>
		</article>
	);
};
