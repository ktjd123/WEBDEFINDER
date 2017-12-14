import * as Types from 'actions/ActionTypes'
import update from 'react-addons-update';

const initialState = {
    detail: {
        status: 'INIT',
        data: [],
        error: -1
    }
}

export default function Detail(state = initialState, action){
    switch(action.type){
        case Types.DETAIL:
        return update(state, {
            detail: {
                status: {$set: 'PENDING'}
            }
        })

        case Types.DETAIL_SUCCESS:
        return update(state, {
            detail: {
                status: {$set: 'SUCCESS'},
                data: {$set: action.post}
            }
        })

        case Types.DETAIL_FAILURE:
        return update(state, {
            detail: {
                status: {$set: 'FAILURE'},
                error: {$set: action.code}
            }
        })

        default:
        return state
    }
}