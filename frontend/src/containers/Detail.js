import React from 'react'
import 'css/Detail.css'
import { detailRequest,viewsRequest } from 'actions/Detail'
import {postRemoveRequest} from 'actions/Post'
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

class Detail extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            _id: '',
            title: '',
            writer: '',
            type: '',
            date: '',
            content: '',
            views: 0
        }

        this.OnRemove = this.OnRemove.bind(this)
    }

    OnRemove(){
        toast.success('글을 삭제했습니다')
        this.props.history.push(`/jobs/${this.props.match.params.num}`)
        this.props.postRemoveRequest(this.state._id)
        .then(() => {
        })
    }

    componentDidMount() {
        this.props.detailRequest(this.props.match.params.id)
            .then(
            () => {
                if (this.props.status === "SUCCESS") {
                    let post = this.props.post[0]
                    let time = String(post.createdTime).substring(0, 10)
                    this.setState({
                        _id: post._id,
                        title: post.title,
                        writer: post.writer,
                        type: post.type,
                        date: time,
                        views: post.views,
                        content: post.content
                    })
                } else {
                    toast.error('다시 시도해주세요')
                }
            }
            )
            viewsRequest(this.props.match.params.id)
    }

    render() {

        let jobsUrl = `/jobs/${this.props.match.params.num}`

        return (
            <div className='wrapper detail'>
                <h1>{this.state.title}</h1>
                <div className='container'>
                    <div className='info'>
                        {this.state.type}
                        <div className='Sinfo'>
                            <div>{this.state.date}</div>
                            <div>{this.state.writer}</div>
                        </div>
                    </div>
                    <div className='content'>{this.state.content}</div>
                    <div className='buttonsC'>
                        <a className='button' onClick={this.OnRemove}>삭제</a>
                        <Link to={jobsUrl} className='button'>목록</Link>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        status: state.Detail.detail.status,
        post: state.Detail.detail.data,
        removeStatus: state.Post.remove.status
    }
}

const mapDispatchToProps = dispatch => {
    return {
        detailRequest: (id) => {
            return dispatch(detailRequest(id))
        },
        postRemoveRequest: (id) => {
            return dispatch(postRemoveRequest(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Detail)