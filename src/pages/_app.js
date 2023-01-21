import { Provider } from "react-redux";
import { wrapper, store } from '../redux/store';
import Layout from '../components/templates';
import '@/styles/globals.css';

function App ({Component, pageProps}) {
	return (
		<>
			<Provider store={store}>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</Provider>
		</>
	)
}

export default wrapper.withRedux(App);