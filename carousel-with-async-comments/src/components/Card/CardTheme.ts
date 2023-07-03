import { FlowbiteBoolean } from 'flowbite-react';

interface FlowbiteCardTheme {
	root: FlowbiteCardRootTheme;
	img: FlowbiteCardImageTheme;
}

interface FlowbiteCardRootTheme {
	base: string;
	children: string;
	horizontal: FlowbiteBoolean;
	href: string;
}

interface FlowbiteCardImageTheme {
	base: string;
	horizontal: FlowbiteBoolean;
}

export const cardTheme: FlowbiteCardTheme = {
	root: {
		base: 'flex rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800',
		children: 'flex h-full flex-col gap-4 p-6',
		horizontal: {
			off: 'flex-col',
			on: 'flex-col md:max-w-xl md:flex-row',
		},
		href: 'hover:bg-gray-100 dark:hover:bg-gray-700',
	},
	img: {
		base: '',
		horizontal: {
			off: 'rounded-t-lg',
			on: 'h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg',
		},
	},
};
