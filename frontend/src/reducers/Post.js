import * as Types from 'actions/ActionTypes';

import update from 'react-addons-update'

const initialState = {
    post:{
        status: 'INIT',
        count: 0,
        error: -1
    },
    list: {
        status: 'INIT',
        data: [],
        
    },
    remove: {
        status: 'INIT',
        error: -1
    }
}

export default function Post (state = initialState, action){
    switch(action.type){
        case Types.POST_COUNT:
        return update(state, {
            post:{
                status: {$set: 'PENDING'}
            }
        })

        case Types.POST_COUNT_SUCCESS:
        return update(state, {
            post: {
                status: {$set: 'SUCCESS'},
                count: {$set: action.count}
            }
        })

        case Types.POST_COUNT_FAILURE:
        return update(state, {
            post:{
                status: {$set: 'FAILURE'},
                count: {$set: 0},
                error: action.code
            }
        })

        case Types.POST_LIST:
        return update(state, {
            status: {$set: 'PENDING'}
        })

        case Types.POST_LIST_SUCCESS:
            return update(state, {
                list: {
                    status: {$set: 'SUCCESS'},
                    data: {$set: action.data},
                }
            })
        case Types.POST_LIST_FAILURE:
        return update(state, {
            list: {
                status: {$set: 'FAILURE'}
            }
        })

        case Types.POST_REMOVE:
        return update(state, {
            remove: {$set: 'PENDING'}
        })

        case Types.POST_REMOVE_SUCCESS:
        return update(state, {
            remove: {$set: 'SUCCESS'}
        })

        case Types.POST_REMOVE_FAILURE:
        return update(state, {
            remove: {$set: 'FAILURE'},
            error: {$set: action.code}
        })

        default:
            return state;
    }
}