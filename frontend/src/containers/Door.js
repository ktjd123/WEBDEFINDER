import React from 'react';
import 'css/Door.css'

export default class Door extends React.Component{
    render(){

        let or = undefined;

        if(window.innerWidth > window.innerHeight){
            or = "width"
        }else{
            or = "height"
        }

        

        return(
            <div className='door'>
                <video src='/main_video.mp4' className={`${or}`} autoPlay loop></video>
                <h1>WEB DEFINDER</h1>
                <h3>Discover awesome designer's works and get inspired by them</h3>
                <h3>Find a great Web desginer and develope your projects</h3>
                <a href='/home'>GET STARTED</a>
            </div>
        )
    }
}