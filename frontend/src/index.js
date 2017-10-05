import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from 'containers/AppContainer';
import registerServiceWorker from './registerServiceWorker';

//Redux 관련 불러오기
import {createStore} from 'redux';
import reducers from 'reducers';

//React-redux Provider
import {Provider} from 'react-redux';

const store = createStore(reducers);

ReactDOM.render(
    <Provider store={store}>
        <AppContainer/>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
