import { NOTEBOOK_LIST, NOTEBOOK_SECTION_LIST, NOTEBOOK_SECTION_PAGE_LIST, PAGE_CONTENT, CLEAR_SIDEBAR } from '../actions/index';

const INITIAL_STATE = { sidebar: null, pagehtml : null };

export default function(state = INITIAL_STATE, action){
    // console.log('[reducer_posts] action', action);
    // console.log('[reducer_posts] state', state);
    switch(action.type){
        case CLEAR_SIDEBAR:
            console.log('/* CLEAR_SIDEBAR */', action);
            return { ...state, sidebar: action.payload };
        case NOTEBOOK_LIST:
            console.log('/* NOTEBOOK_LIST */', action);
            return { ...state, sidebar: action.payload.value };
        case NOTEBOOK_SECTION_LIST:
            console.log('/* NOTEBOOK_SECTION_LIST */', action);
            return { ...state, sidebar: action.payload.value };
        case NOTEBOOK_SECTION_PAGE_LIST:
            console.log('/* NOTEBOOK_SECTION_PAGE_LIST */', action);
            return { ...state, sidebar: action.payload.value };
        case PAGE_CONTENT:
            console.log('/* PAGE_CONTENT */', action);
            return { ...state, pagehtml: action.payload };
        default:
            return state;
    }
}
