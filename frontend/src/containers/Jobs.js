import React from 'react';
import { Link } from 'react-router-dom';
import JobsContainer from 'components/Jobs/JobsContainer';
import { getCountRequest, postListRequest } from 'actions/Post';
import { toast } from 'react-toastify';

import 'css/Jobs.css';
import { connect } from 'react-redux';
import Pagination from 'components/Jobs/Pagination'

class Jobs extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            count: 0,
            rows: []
        }
    }

    componentDidMount() {
        this.props.getCountRequest()
            .then(
            () => {
                if (this.props.status === 'SUCCESS') {
                    this.setState({
                        count: this.props.count
                    })
                    let count = this.state.count / 5

                    let rows = []
                    for (let i = parseInt(count, 10); i > 0; i -= 1) {
                        rows.push(i)
                    }
                    this.setState({
                        rows: rows
                    })
                } else {
                    this.setState({
                        count: 0
                    })
                    toast.error('글이 없습니다!')
                }
            }
            )
        this.props.postListRequest(this.props.match.params.id)
            .then(
            () => {
                console.log(this.props.postData)
            }
            )
    }

    render() {
        const page = data => {
            return data.map((page, i) => {
                return (
                    <Pagination id={this.props.match.params.id} num={page} key={i}/>
                )
            })
        }

        return (
            <div className='wrapper jobs'>
                <h1>
                    JOBS
                </h1>
                <div className='container'>
                    <div className='show'>
                        <div className='left'>
                            <div className='type'>구인/구직</div>
                        </div>
                        <div className='title'>제목</div>
                        <div className='right'>
                            <div className='writer'>작성자</div>
                            <div className='date'>작성일</div>
                            <div className='view'>조회수</div>
                        </div>
                    </div>
                    <JobsContainer data={this.props.postData} num={this.props.match.params.id} />
                </div>
                <div className='pageCon'>{page(this.state.rows)}</div>
                <Link to='/write' className='upload'>구인/구직 올리기</Link>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        status: state.Post.post.status,
        count: state.Post.post.count,
        postData: state.Post.list.data
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getCountRequest: () => {
            return dispatch(getCountRequest());
        },
        postListRequest: (id) => {
            return dispatch(postListRequest(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Jobs)