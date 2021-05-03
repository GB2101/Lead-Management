import React, { FC } from 'react';
import { Provider } from 'react-redux';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import Router from './View/Router';
import store from './Application/store';
import './style.css';

const App: FC = () => (
	<Provider store={store}>
		<DndProvider backend={HTML5Backend}>
			<Router />
		</DndProvider>
	</Provider>
);
export default App;
