import { Footer } from 'flowbite-react';
import { SvgSprite } from '../SvgSprite/SvgSprite';

export default function DefaultFooter() {
	return (
		<Footer className="w-full p-4 box-border flex gap-4 items-center justify-center md:flex md:gap-4 md:items-center md:justify-center bg-stone-100">
			<Footer.Copyright by="" year={2023} className="block" />
			<Footer.LinkGroup>
				<Footer.Link
					target="_blank"
					href="https://github.com/DStukalo/"
					className="hover:text-teal-600"
				>
					<SvgSprite
						file="social"
						id="github_icon"
						classes="w-4 h-4 hover:fill-cyan-700"
					/>
				</Footer.Link>
			</Footer.LinkGroup>
		</Footer>
	);
}
