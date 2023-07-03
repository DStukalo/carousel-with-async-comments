import { useEffect } from 'react';
import { DefaultCarousel } from '../components/Carousel/Carousel';

export function MainPage() {
	useEffect(() => {
		document.title = 'Main || Carousel posts';
	}, []);
	return (
		<article className=" mx-auto max-w-7xl mb-8 flex justify-center items-center ">
			<div className="flex justify-center items-center flex-col p-2">
				<DefaultCarousel />
			</div>
		</article>
	);
}
