import {
    DETAIL,
    DETAIL_SUCCESS,
    DETAIL_FAILURE
}
from './ActionTypes'
import axios from 'axios'

export function detailRequest(id){
    return dispatch => {
        dispatch(detail())

        let url = `/api/post/detail/${id}`

        return axios.get(url)
        .then(
            response => {
                dispatch(detailSuccess(response.data))
            }
        )
        .catch(
            error => {
                dispatch(detailFailure(error.response.data.code))
            }
        )
    }
}

export function detail(){
    return{
        type: DETAIL
    }
}

export function detailSuccess(post){
    return{
        type: DETAIL_SUCCESS,
        post
    }
}

export function detailFailure(){
    return {
        type: DETAIL_FAILURE
    }
}

export function viewsRequest(id){
    return axios.get(`/api/post/detail/views/${id}`).then().catch(err => console.error(err))
}