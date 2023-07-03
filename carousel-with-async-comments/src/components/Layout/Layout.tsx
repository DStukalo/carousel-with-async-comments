import { Outlet } from 'react-router-dom';
import DefaultFooter from '../Footer/Footer';
import { Header } from '../Header/Header';

export function Layout() {
	return (
		<div className="flex flex-col min-h-screen">
			<Header />
			<main className="flex-grow overflow-x-hidden md:overflow-auto">
				<Outlet />
			</main>
			<DefaultFooter />
		</div>
	);
}
