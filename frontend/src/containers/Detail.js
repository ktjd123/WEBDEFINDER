import React from 'react'
import 'css/Detail.css'
import {detailRequest} from 'actions/Detail'
import {connect} from 'react-redux';
import {toast} from 'react-toastify';

class Detail extends React.Component{

    constructor(props){
        super(props)

        this.state = {
            title: '',
            writer: '',
            type: '',
            date: '',
            content: ''
        }
    }

    componentDidMount(){
        this.props.detailRequest(this.props.match.params.id)
        .then(
            () => {
                if(this.props.status === "SUCCESS"){
                    console.log(this.props.post[0])
                    //TODO - 업데이트 하기 정보
                    console.log('commit test')
                }else{
                    toast.error('다시 시도해주세요')
                }
            }
        )
    }

    render(){
        return(
            <div className='wrapper detail'>
                <h1>Detail</h1>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return{
        status: state.Detail.detail.status,
        post: state.Detail.detail.data
    }
}

const mapDispatchToProps = dispatch => {
    return{
        detailRequest: (id) => {
            return dispatch(detailRequest(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Detail)