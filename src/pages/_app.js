import { Provider } from "react-redux";
import { wrapper, store } from '../redux/store';
import '@/styles/globals.css';

function App ({Component, pageProps}) {
	return (
		<>
			<Provider store={store}>
				<Component {...pageProps} />
			</Provider>
		</>
	)
}

export default wrapper.withRedux(App);