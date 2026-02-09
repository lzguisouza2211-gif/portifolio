import Home from './pages/Home';
import PDV from './pages/PDV';
import __Layout from './Layout.jsx';

export const PAGES = {
	Home,
	'projetos/pdv': PDV,
};


export const pagesConfig = {
	mainPage: 'Home',
	Pages: PAGES,
	Layout: __Layout,
};
