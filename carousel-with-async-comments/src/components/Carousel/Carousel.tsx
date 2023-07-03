import { Suspense, type ReactNode } from 'react';
import Carousel from 'nuka-carousel';
import { DefaultCard } from '../Card/Card';
import { Preloader } from '../Preloader/Preloader';
import { usePosts } from '../../hooks/usePosts';

type ControlProps = {
	currentSlide: number;
	slideCount: number;
};

export function DefaultCarousel() {
	const { posts, isLoading, isError } = usePosts();

	if (isLoading) {
		return (
			<>
				<Preloader spinnerSize="xl" />
			</>
		);
	}
	if (isError) return <div>Sorry some error</div>;
	if (!posts) return <div>Sorry don`t data</div>;

	const renderBottomCenterControls = ({
		currentSlide,
		slideCount,
	}: ControlProps) => (
		<div className=" w-10 mt-8">{`${currentSlide + 1} / ${slideCount}`}</div>
	);

	return (
		<Suspense>
			<Carousel
				className="sm:max-w-2xl max-w-xs"
				slidesToScroll={1}
				slidesToShow={1}
				cellSpacing={10}
				disableEdgeSwiping={false}
				dragging={false}
				wrapAround
				defaultControlsConfig={{
					containerClassName:
						'hidden md:w-8 md:h-8 md:rounded-full md:hover:bg-stone-500 md:bg-none md:block ',
					nextButtonClassName:
						'hidden md:w-8 md:h-8 md:rounded-full md:flex md:items-center md:justify-center md:bg-none md:block ',
					nextButtonText: '>',
					pagingDotsContainerClassName: 'w-8 my-4',
					prevButtonClassName:
						'hidden md:w-8 md:h-8 md:rounded-full md:flex md:items-center md:justify-center md:bg-none md:block ',
					prevButtonText: '<',
				}}
				renderBottomCenterControls={renderBottomCenterControls}
			>
				{posts.map(
					(slide): ReactNode => (
						<DefaultCard post={slide} key={`card-${slide.id}`} />
					)
				)}
			</Carousel>
		</Suspense>
	);
}
