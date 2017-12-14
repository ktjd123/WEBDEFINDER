import React from 'react'
import 'css/Pagination.css';

export default class Pagination extends React.Component{

    render(){
        let page = undefined;
        if(Number(this.props.id) === this.props.num){
            page = (<a href={`/jobs/${this.props.num}`} className='PageIn'>[{this.props.num}]</a>)
        }else{
            page = (<a href={`/jobs/${this.props.num}`} className='PageOut'>[{this.props.num}]</a>)
        }
        return(
            <div>
                {page}
            </div>
        )
    }
}