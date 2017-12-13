import{
    WRITE,
    WRITE_SUCCESS,
    WRITE_FAILURE
} from './ActionTypes';

import axios from 'axios';

export function writeRequest(title, writer, type, content){
    return(dispatch) => {
        dispatch(write());

        return axios.post('/api/post/', {title, writer, type, content})
        .then(
            response => {
                dispatch(writeSuccess());
            }
        )
        .catch(
            error => {
                dispatch(writeFailure(error.response.data.code))
            }
        )
    }
}

export function write(){
    return{
        type: WRITE
    }
}

export function writeSuccess(){
    return {
        type: WRITE_SUCCESS
    }
}

export function writeFailure(code){
    return {
        type: WRITE_FAILURE,
        code
    }
}