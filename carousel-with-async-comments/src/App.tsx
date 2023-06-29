import { Card } from 'flowbite-react';

function App() {
	return (
		<article className="max-w-7xl h-screen flex justify-center items-center">
			<div className="flex justify-center items-center flex-col">
				<h1 className="text-2xl font-bold text-blue-600 mb-8 border-b-4 border-purple-600">
					Test Vite + React + Flowbite
				</h1>
				<div className="max-w-sm">
					<Card imgSrc="https://flowbite.com/docs/images/blog/image-1.jpg">
						<h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
							Install & setup flowbite in react js
						</h5>
						<p className="font-normal text-gray-700 dark:text-gray-400">
							Here are the biggest enterprise technology acquisitions of 2021 so
							far, in reverse chronological order.
						</p>
					</Card>
				</div>
			</div>
		</article>
	);
}

export default App;
