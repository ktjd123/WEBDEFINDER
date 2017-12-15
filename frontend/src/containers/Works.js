import React from 'react';
import Card from 'components/Works/Card'

import 'css/Works.css'

export default class Works extends React.Component {
    render() {
        return (
            <div className='wrapper works'>
                <h1>WORKS</h1>

                <div className='column-container'>
                    <div className='container'>
                        <Card title="프리랜서 초윤희" imgSrc='http://www.treashya.com/img/portfolio/03_shasha/02.jpg'/>
                        <Card/>
                        <Card/>
                    </div>
                    <div className='container'>
                        <Card/>
                        <Card/>
                        <Card/>
                    </div>
                    <div className='container'>
                        <Card/>
                        <Card/>
                        <Card/>
                    </div>
                </div>

            </div>
        )
    }
}