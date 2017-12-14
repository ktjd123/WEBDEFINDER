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

        let url = `/details/${id}`

        return axios.get(url)
        .then(
            response => {
                dispatch(detailSuccess(response.data.post))
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