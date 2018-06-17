import { combineReducers } from 'redux';

import PostReducer from './reducer_posts';
import TokenReducer from './reducer_token';
import RoutingReducer from './reducer_routing';

const rootReducer = combineReducers({
    posts : PostReducer,
    token : TokenReducer,
    routing : RoutingReducer,
});

export default rootReducer;
