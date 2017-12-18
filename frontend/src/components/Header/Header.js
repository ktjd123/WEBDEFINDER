import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

export default class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isDoor: true
        }
    }

    componentDidMount() {

        let doorMatch = /^(\/door|\/)$/

        console.log(this.props.location.pathname)

        if (doorMatch.test(this.props.location.pathname)) {
            this.setState({
                isDoor: true
            })
        } else {
            this.setState({
                isDoor: false
            })
        }
    }

    render() {

        let is = undefined
        if (this.state.isDoor) {
            is = "true"
        } else {
            is = ""
        }

        return (
            <div>
                <header className={`${is}`}>
                    <Link to='/home' className='logo'>웹디파인더</Link>
                    <span className='block' />
                    <div className='buttons'>
                        <Link to='/works'>DISCOVER</Link>
                        <Link to='/jobs'>JOBS</Link>
                        <Link to='/faq'>FAQ</Link>
                    </div>
                </header>
                <footer className={`${this.state.isDoor}`}>2017 webdefinder All rights reserved</footer>
            </div>
        )
    }
}