import React from 'react';
import 'css/JobsItem.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'

export default class JobItem extends React.Component {
    render() {
        const {data} = this.props;
        const time = String(data.createdTime).substring(0, 10)
        return (
            <div className='jobs jobsItem'>
                <div className='container'>
                    <Link to={`/detail/${this.props.num}/${this.props.data._id}`} className='show'>
                        <div className='left'>
                            <div className='type'>{data.type}</div>
                        </div>
                        <div className='title'>{data.title}</div>
                        <div className='right'>
                            <div className='writer'>{data.writer}</div>
                            <div className='date'>{time}</div>
                            <div className='view'>{data.views}</div>
                        </div>
                    </Link>
                </div>
            </div>
        )
    }
}

JobItem.propTypes = {
    data: PropTypes.object
}
JobItem.defaultProps = {
    data: {
        _id: 'id92309320023',
        num: 1,
        writer: '작성자',
        type: '구인',
        title: '제목',
        date: '12/12/2017',
        views: 23
    }
}