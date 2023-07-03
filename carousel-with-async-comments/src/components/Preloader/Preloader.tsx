import { Spinner } from 'flowbite-react';

type Preloader = {
	spinnerSize: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
};

export function Preloader({ spinnerSize }: Preloader) {
	return (
		<div className="flex justify-center items-center flex-col w-full 	">
			<Spinner aria-label="Extra large spinner example" size={spinnerSize} />
		</div>
	);
}
