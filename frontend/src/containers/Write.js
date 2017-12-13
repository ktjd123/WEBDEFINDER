import React from 'react';

import 'css/Write.css'
import {Link} from 'react-router-dom';

import {connect} from 'react-redux';
import {writeRequest} from 'actions/Write';

import {toast} from 'react-toastify'

class Write extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            title: '',
            writer: '',
            type: '구인',
            content: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleWrite = this.handleWrite.bind(this)
    }

    handleChange(e){
        let nextState = {};
        nextState[e.target.className] = e.target.value;
        this.setState(nextState)
    }

    handleWrite(){
        let title = this.state.title
        let writer = this.state.writer
        let type = this.state.type
        let content = this.state.content

        this.props.writeRequest(title,writer,type,content)
        .then(
            () => {
                if(this.props.status === 'SUCCESS'){
                    toast.success('글을 올렸습니다!')
                    this.props.history.push('/jobs')
                }else{
                    toast.error('다시 시도해주세요!')
                }
            }
        )
    }

    render() {
        return (
            <div className='wrapper write'>
                <h1>JOBS</h1>
                <input type='text' placeholder='제목' className='title' onChange={this.handleChange} value={this.state.title} />
                <div className='info'>
                    <input type='text' placeholder='작성자' className='writer' onChange={this.handleChange} value={this.state.writer}/>
                    <select className='type' onChange={this.handleChange}>
                        <option value='구인'>구인</option>
                        <option value='구직'>구직</option>
                    </select>
                </div>
                <textarea placeholder='내용을 입력해주세요' className='content' onChange={this.handleChange} value={this.state.content}>

                </textarea>

                <div className='buttons'>
                    <a onClick={this.handleWrite}>등록</a>
                    <Link to='jobs'>취소</Link>
                    <Link to='/jobs'>목록</Link>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return{
        status: state.Write.write.status
    }
}

const mapDispatchToProps = dispatch => {
    return{
        writeRequest: (title, writer, type, content) => {
            return dispatch(writeRequest(title,writer,type,content))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Write)