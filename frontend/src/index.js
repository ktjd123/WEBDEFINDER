import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

//Redux 관련 불러오기
import { createStore } from 'redux';
import reducers from 'reducers';

//React-redux Provider
import { Provider } from 'react-redux';

//React router v4
import { BrowserRouter, Route, Switch } from 'react-router-dom';
//<Route path="/" component={AppContainer} /> - 이걸 페이지의 헤더파일로 해놓으면 굉장히 편리하겠다.

//Example import
import AppContainer from 'containers/AppContainer';
import About from 'components/About';
//Example import end

const store = createStore(reducers);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <div>

                <Route exact path="/" component={AppContainer} />
                
                <Switch>
                    <Route path="/about/:name" component={About} />
                    <Route path="/about" component={About} />
                </Switch>
                
            </div>
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
