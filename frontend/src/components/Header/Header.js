import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

export default class Header extends React.Component {
    render() {
        return (
            <div>
                <header>
                    <Link to='/' className='logo'>웹디파인더</Link>
                    <span className='block' />
                    <div className='buttons'>
                        <Link to='/works'>WORKS</Link>
                        <Link to='/jobs'>JOBS</Link>
                        <Link to='/faq'>FAQ</Link>
                    </div>
                </header>
                <footer>2017 webdefinder All rights reserved</footer>
            </div>
        )
    }
}