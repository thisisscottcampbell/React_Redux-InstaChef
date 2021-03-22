import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import FavesList from './components/FavesList';
import App from './components/App';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';

const store = createStore(rootReducer);
store.subscribe(() => console.log('store:', store.getState()));

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<Switch>
				<Route path="/" exact component={App} />
				<Route path="/favorites" exact component={FavesList} />
			</Switch>
		</BrowserRouter>
	</Provider>,
	document.getElementById('root')
);
