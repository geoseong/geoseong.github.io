import { 
	NOTEBOOK_LIST, 
	NOTEBOOK_SECTION_LIST, 
	NOTEBOOK_SECTION_PAGE_LIST, 
	PAGE_CONTENT, 
	CLEAR_SIDEBAR,
	SWITCH_LOADER
 } from '../actions/index';

const INITIAL_STATE = { sidebar: null, pagehtml: null, loaded: null };

export default function(state = INITIAL_STATE, action){
	// console.log('[reducer_posts] action', action);
	// console.log('[reducer_posts] state', state);
	switch(action.type){
		case CLEAR_SIDEBAR:
			console.log('/* CLEAR_SIDEBAR */', action);
			return { ...state, sidebar: action.payload};
		case NOTEBOOK_LIST:
			console.log('/* NOTEBOOK_LIST */', action);
			return { ...state, sidebar: action.payload.value, loaded: {sidebar: true} };
		case NOTEBOOK_SECTION_LIST:
			console.log('/* NOTEBOOK_SECTION_LIST */', action);
			return { ...state, sidebar: action.payload.value, loaded: {sidebar: true} };
		case NOTEBOOK_SECTION_PAGE_LIST:
			console.log('/* NOTEBOOK_SECTION_PAGE_LIST */', action);
			return { ...state, sidebar: action.payload.value, loaded: {sidebar: true} };
		case PAGE_CONTENT:
			console.log('/* PAGE_CONTENT */', action);
			return { ...state, pagehtml: action.payload, loaded: {main: true} };
		case SWITCH_LOADER:
			console.log('/* SWITCH_LOADER */', action);
			return { ...state, loaded: action.payload,/*  loaded: {sidebar: true}  */};
		default:
			return state;
	}
}
