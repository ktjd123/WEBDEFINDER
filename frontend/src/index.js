import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

//Redux 관련 불러오기
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import reducers from 'reducers';

//React-redux Provider
import { Provider } from 'react-redux';

//React router v4
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
//<Route path="/" component={AppContainer} /> - 이걸 페이지의 헤더파일로 해놓으면 굉장히 편리하겠다.

//HEADER import 
import Header from 'components/Header/Header'
//HEADER import

import { App, Faq, Jobs, Write, Detail, Error404} from 'containers'

//default css
import 'css/default.css';

//toast
import { ToastContainer } from 'react-toastify';

const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <Header />
                
                <ToastContainer
                    position="bottom-center"
                    autoClose={3000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    pauseOnHover />

                <Switch>
                    <Redirect exact from='/' to='home' />
                    <Route exact path='/home' component={App} />
                    <Route exact path='/faq' component={Faq} />
                    <Route exact path='/jobs/:id' component={Jobs}/>
                    <Redirect from ='/jobs' to='jobs/1'/>
                    <Route exact path='/write' component={Write} />
                    <Route exact path='/detail/:num/:id' component={Detail}/>
                    <Route component={Error404}/>
                </Switch>
            </div>
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
