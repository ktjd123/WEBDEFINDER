import React from 'react';

import 'css/App.css';

export default class App extends React.Component{
    render(){
        return(
            <div className='wrapper'>
                <video src='/mainvideo.mp4' autoPlay></video>
            </div>
        )
    }
}