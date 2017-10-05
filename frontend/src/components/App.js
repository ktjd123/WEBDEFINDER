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
                    onClick={reducerTest}>
                    REDUCER TEST
                </button>
            </div>
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