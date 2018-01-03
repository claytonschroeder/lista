import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Fabric } from 'office-ui-fabric-react/lib/Fabric';
import thunk from 'redux-thunk';

import projectReducer from './store/reducers/project';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { initializeIcons } from '@uifabric/icons';

// Register icons and pull the fonts from the default SharePoint cdn:
initializeIcons();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(projectReducer, composeEnhancers(applyMiddleware(thunk)));

const app = (
    <Fabric>
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    </Fabric>
);

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
