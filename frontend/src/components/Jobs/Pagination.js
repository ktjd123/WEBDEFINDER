import React from 'react'
import { Link } from 'react-router-dom';
import 'css/Pagination.css';

export default class Pagination extends React.Component{

    render(){
        let page = undefined;
        if(Number(this.props.id) === this.props.num){
            page = (<Link to={`/jobs/${this.props.num}`} className='PageIn'>[{this.props.num}]</Link>)
        }else{
            page = (<Link to={`/jobs/${this.props.num}`} className='PageOut'>[{this.props.num}]</Link>)
        }
        return(
            <div>
                {page}
            </div>
        )
    }
}