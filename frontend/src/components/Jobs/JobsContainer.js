import React from 'react';
import JobItem from './JobItem'
import PropTypes from 'prop-types';

export default class JobsConatainer extends React.Component{
    render(){

        const mapToComponent = data => {
            return data.map((post) => {
                return(
                    <JobItem
                        data={post}
                        key={post._id}
                        num={this.props.num}
                    />
                )
            })
        }

        return(
            <div>
                {mapToComponent(this.props.data)}
            </div>
        )
    }
}

JobsConatainer.propTypes = {
    data: PropTypes.array,
}

JobsConatainer.defaultProps = {
    data: []
}