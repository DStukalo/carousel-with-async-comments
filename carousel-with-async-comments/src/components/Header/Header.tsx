import { NavLink, useLocation } from 'react-router-dom';
import { AddPost } from '../AddPostComponent/AddPost';
import { SvgSprite } from '../SvgSprite/SvgSprite';

export function Header() {
	const { pathname } = useLocation();

	return (
		<header className="w-full h-14 p-2 mb-4 flex justify-between box-border bg-stone-100 hover:fill-amber-400 ">
			<NavLink to={'/'}>
				<SvgSprite
					file="social"
					id="logo_icon"
					classes={
						pathname === '/'
							? 'w-10 h-10 fill-cyan-700 cursor-default'
							: 'w-10 h-10 fill-cyan-700 hover:fill-amber-400'
					}
				/>
			</NavLink>
			{pathname === '/' ? (
				<AddPost />
			) : (
				<nav className="p-2 text-cyan-700 hover:text-amber-400">
					<NavLink to={'/'}>Home</NavLink>
				</nav>
			)}
		</header>
	);
}
