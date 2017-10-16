import React from 'react';
import PropTypes from 'prop-types';
import './App.css';

const App = ({ testString, reducerTest }) => {
    return (
        <div>
            <div className="App">
                <h1 className="App-title">PBoilerPlate에 어서오세요</h1>
                <p className="App-intro">
                    모든 것을 이곳에서부터 시작하세요!
                </p>
                {testString}
                <div>
                    <button
                        className="btn"
                        onClick={reducerTest}>
                        REDUCER TEST
                </button>
                </div>
                <h1>사용된 기술들</h1>
                <ul className="introduce">
                    <li>---BACKEND---</li>
                    <li>express</li>
                    <li>예정: express session</li>
                    <li>예정: mongoose</li>
                    <li>예정: bcrypt</li>
                    <li>예정: multer</li>
                    <li>---FRONTEND---</li>
                    <li>React</li>
                    <li>Redux</li>
                    <li>Create-react-app</li>
                    <li>예정: react-router</li>
                    <li>예정: redux-thunk</li>
                </ul>
            </div>
        </div>
    )
}

App.propTypes = {
    testString: PropTypes.string,
    reducerTest: PropTypes.func
}

App.defaultProps = {
    testString: 'Not modified yet',
    reducerTest: () => console.warn('reducer test not defined')
}

export default App;