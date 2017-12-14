import React from 'react';
import 'css/Error404.css';
import {Link} from 'react-router-dom';

export default class Error404 extends React.Component {
    render() {
        return (
            <div className="Error404">
                <div className="logo">
                    <Link to="/home">웹디파인더</Link>
                </div>
                <div className="bowl">
                    <div className="spdline"></div>
                    <div className="spider">
                        <div className="leg left-1"></div>
                        <div className="leg left-2"></div>
                        <div className="leg left-3"></div>
                        <div className="leg right-1"></div>
                        <div className="leg right-2"></div>
                        <div className="leg right-3"></div>
                    </div>
                </div>
                <div className="ghost">
                    <div className="eye eye-left"></div>
                    <div className="eye eye-right"></div>
                    <div className="chocolate"></div>
                    <div className="mouth"></div>
                </div>

                <div className="signwood"></div>
                <div className="signtext">
                    <p>404<br />없는 페이지입니다</p>
                </div>
                <div className="pin"></div>

                <div className="line"></div>
            </div>
        )
    }
}