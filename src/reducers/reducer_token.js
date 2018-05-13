import { REFRESH_TOKEN, GET_TOKEN } from '../actions/index';

const INITIAL_STATE = {  };

export default function(state = INITIAL_STATE, action){
    // console.log('[reducer_token] action', action);
    // console.log('[reducer_token] state', state);
    switch(action.type){
        case REFRESH_TOKEN:
            console.log('/* REFRESH_TOKEN */', action);
            return { ...state, access_token: action.payload };
        case GET_TOKEN:
            console.log('/* GET_TOKEN */', action);
            return { ...state, access_token: action.payload };
        default:
            return state;
    }
}
