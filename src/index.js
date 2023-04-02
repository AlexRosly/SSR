import { StrictMode } from 'react';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from 'redux/store';
import { ProvideAuth } from 'navigation/Auth/ProvideAuth';
import { AuthCtxProvider } from 'context/AuthContext';
import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from 'routes';

hydrate(
	<StrictMode>
		<Provider store={store}>
			<PersistGate persistor={persistor}>
				<ProvideAuth>
					<AuthCtxProvider>
						<BrowserRouter>
							<AppRouter />
						</BrowserRouter>
					</AuthCtxProvider>
				</ProvideAuth>
			</PersistGate>
		</Provider>
	</StrictMode>,
	document.getElementById('root')
);
