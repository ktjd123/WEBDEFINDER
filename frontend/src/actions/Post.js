import {
    POST_COUNT,
    POST_COUNT_SUCCESS,
    POST_COUNT_FAILURE,
    POST_LIST,
    POST_LIST_SUCCESS,
    POST_LIST_FAILURE,
    POST_REMOVE,
    POST_REMOVE_SUCCESS,
    POST_REMOVE_FAILURE
} from './ActionTypes'
import axios from 'axios'
export function getCountRequest() {
    return dispatch => {
        dispatch(getCount())

        return axios.get('/api/post/total', {})
            .then(
            response => {
                dispatch(getCountSuccess(response.data.count))
            }
            )
            .catch(
            error => {
                dispatch(getCountFailure(error.response.data.code))
            }
            )
    }
}

export function getCount() {
    return {
        type: POST_COUNT
    }
}

export function getCountSuccess(count) {
    return {
        type: POST_COUNT_SUCCESS,
        count
    }
}

export function getCountFailure(code) {
    return {
        type: POST_COUNT_FAILURE,
        code
    }
}

export function postListRequest(id) {
    return (dispatch) => {
        dispatch(postList())

        let url = `/api/post/${id}`
        return axios.get(url)
            .then(
            response => {
                dispatch(postListSuccess(response.data))
            }
            )
            .catch(
            error => {
                dispatch(postListFailure())
            }
            )
    }
}

export function postList() {
    return {
        type: POST_LIST
    }
}

export function postListSuccess(data) {
    return {
        type: POST_LIST_SUCCESS,
        data
    }
}

export function postListFailure() {
    return {
        type: POST_LIST_FAILURE
    }
}

export function postRemoveRequest(id){
    return (dispatch) => {
        dispatch(postRemove())

        return axios.delete('/api/post/' + id)
        .then(
            res => {
                dispatch(postRemoveSuccess())
            }
        ).catch( err => {
            dispatch(postRemoveFailure(err.response.data.code))
        })
    }
}

export function postRemove(){
    return {
        type: POST_REMOVE
    }
}

export function postRemoveSuccess(){
    return {
        type: POST_REMOVE_SUCCESS
    }
}

export function postRemoveFailure(err){
    return {
        type: POST_REMOVE_FAILURE,
        err
    }
}