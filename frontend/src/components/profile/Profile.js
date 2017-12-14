import React from 'react'
import PropTypes from 'prop-types'

class Profile extends React.Component {
    render() {
        let props = this.props
        return (
            <div className='profile'>
                <img src={props.imgLink} alt='' />
                <h3>{props.title}</h3>
                <p>{props.car}</p>
                <div className='contact'>
                    <a href={props.fbLink}><img src='/fb.png' alt='' /></a>
                    <a href={props.isLink}><img src='/is.png' alt='' /></a>
                </div>
            </div>
        )
    }
}

Profile.propTypes = {
    title: PropTypes.string,
    car: PropTypes.string,
    fbLink: PropTypes.string,
    isLink: PropTypes.string,
    imgLink: PropTypes.string
}

Profile.defaultProps = {
    title: '',
    car: '',
    fbLink: '',
    isLink: ''
}

export default Profile;