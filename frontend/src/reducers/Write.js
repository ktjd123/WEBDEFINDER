import * as Types from 'actions/ActionTypes';

import update from 'react-addons-update';

const initialState = {
    write: {
        status: 'INIT',
        error: -1
    }
}

export default function Write(state = initialState, action){
    switch(action.type){

        case Types.WRITE:
        return update(state, {
            write: {
                status: {$set: 'PENDING'}
            }
        })

        case Types.WRITE_SUCCESS:
        return update(state, {
            write: {
                status: {$set: 'SUCCESS'}
            }
        })

        case Types.WRITE_FAILURE:
        return update(state, {
            status: {$set: 'FAILURE'},
            error: {$set: action.code}
        })

        default:
        return state
    }
}