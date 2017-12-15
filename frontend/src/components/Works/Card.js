import React from 'react';
import PropTypes from 'prop-types'

export default class Card extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            shouldDim: false
        }
        this.onMouse = this.onMouse.bind(this)
        this.mouseOut = this.mouseOut.bind(this)
    }

    componentDidMount(){
        let rows = []
    }

    onMouse(){
        this.setState({
            shouldDim: true
        })
    }

    mouseOut(){
        this.setState({
            shouldDim: false
        })
    }

    render(){
        return(
            <div className='card'>
                <img alt='' src={this.props.imgSrc} className={`${this.state.shouldDim}`}/>
                <div className={`infoContainer ${this.state.shouldDim}`} onMouseOver={this.onMouse} onMouseOut={this.mouseOut}>
                    <h2>{this.props.title}</h2>
                    <h3>EMAIL</h3>
                    <h5>{this.props.email}</h5>
                    <h3>PHONE</h3>
                    <h5>{this.props.phone}</h5>
                    <h3>CAREER</h3>
                    <h5>{this.props.career}</h5>
                </div>
            </div>
        )
    }
}

this.propTypes = {
    imgSrc: PropTypes.string,
    title: PropTypes.string,
    phone: PropTypes.string,
    career: PropTypes.array
}

this.defaultProps = {
    imgSrc: '',
    title: '',
    phone: '',
    career: []
}