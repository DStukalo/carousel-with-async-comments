import { useEffect, useState, RefObject } from 'react';

export const useIntersectionObserver = (
	options: IntersectionObserverInit,
	ref: RefObject<HTMLElement>
): boolean => {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				setIsVisible(entry.isIntersecting);
			});
		}, options);

		const target = ref.current;

		if (target) {
			observer.observe(target);
		}

		return () => {
			if (target) {
				observer.unobserve(target);
			}
		};
	}, [options, ref]);

	return isVisible;
};
