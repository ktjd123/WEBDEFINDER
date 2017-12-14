
import Write from './Write';
import Post from './Post';
import Detail from './Detail'

import {combineReducers} from 'redux';

const reducers = combineReducers({
    Write,
    Post,
    Detail
})

export default reducers