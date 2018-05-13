import request from 'request';
import cheerio from 'cheerio';
            
export const GET_TOKEN = 'GET_TOKEN';
export const REFRESH_TOKEN = 'REFRESH_TOKEN';

export const NOTEBOOK_LIST = 'NOTEBOOK_LIST';
export const NOTEBOOK_SECTION_LIST = 'NOTEBOOK_SECTION_LIST';
export const NOTEBOOK_SECTION_PAGE_LIST = 'NOTEBOOK_SECTION_PAGE_LIST';
export const PAGE_CONTENT = 'PAGE_CONTENT';
export const CLEAR_SIDEBAR = 'CLEAR_SIDEBAR';

const GET_TOKEN_URL = 'https://duok8m97kh.execute-api.ap-northeast-2.amazonaws.com/v001/getToken';
// const GET_TOKEN_URL = `http://localhost:3000/getToken`;
const NOTEBOOK_LIST_URL = 'https://www.onenote.com/api/v1.0/me/notes/notebooks';
const NOTEBOOK_SECTION_LIST_URL = (notebookId) => {return 'https://www.onenote.com/api/v1.0/me/notes/notebooks/' + notebookId + '/sections'};
const NOTEBOOK_SECTION_PAGE_LIST_URL = (sectionId) => {return 'https://www.onenote.com/api/v1.0/me/notes/sections/' + sectionId + '/pages'};
const PAGE_CONTENT_URL = (pageId) => {return 'https://www.onenote.com/api/v1.0/me/notes/pages/' + pageId + '/content?preAuthenticated=true'};

export function clearSidebar() {
    return (dispatch) => {
        // console.log('clearSidebar');
        dispatch({
            type: CLEAR_SIDEBAR, payload: null
        });
    };
}
export function getToken(camefrom, callback) {
    // console.log('[action-getToken] where are you from?', camefrom);
    var options = {
        method: 'POST',
        url: GET_TOKEN_URL,
        headers:
         { 'Content-Type': 'application/json' },
        body: {},
        json: true
    };

    return (dispatch) => {
        request(options, function (error, response, body) {
            if (error || body.error){
                //console.log('[action.index]getToken error!!', error);
                let errormsg = (error)?error:body.error;
                return callback(errormsg);
            }
            // console.log('getToken request then', body);
            dispatch({
                type: GET_TOKEN, payload: body
            });
        });
    };
}

export function getSectionsList(token, notebookId, callback) {
    // console.log('NOTEBOOK_SECTION_LIST_URL(notebookId)', NOTEBOOK_SECTION_LIST_URL(notebookId));
    var options = {
        method: 'GET',
        url: NOTEBOOK_SECTION_LIST_URL(notebookId),
        headers:
         { 'Authorization': `Bearer ${token}` },
        body: {},
        json: true
    };

    return (dispatch) => {
        request(options, function (error, response, body) {
            if (error || body.error){
                // console.log('[action.index]getSectionsList error!!', error);
                let errormsg = (error)?error:body.error;
                return callback(errormsg);
            }
            // console.log('getSectionsList request then', body);
            dispatch({
                type: NOTEBOOK_SECTION_LIST, payload: body
            });
        });
    };
}
export function getSectionPagesList(token, sectionId, callback) {
    // console.log('[action_index]getSectionPagesList, sectionId', sectionId)
    var options = {
        method: 'GET',
        url: NOTEBOOK_SECTION_PAGE_LIST_URL(sectionId),
        headers:
         { 'Authorization': `Bearer ${token}` },
        body: {},
        json: true
    };

    return (dispatch) => {
        request(options, function (error, response, body) {
            if (error){
                // console.log('[getSectionPagesList]error!!', error);
                return callback(error);
            }
            // console.log('getSectionPagesList request then', body);
            dispatch({
                type: NOTEBOOK_SECTION_PAGE_LIST, payload: body
            });
        });
    };
}

export function getPageContent(token, listItem, callback) {
    // console.log('[action.index]getPageContent-listItem', listItem);
    /* parameter if listItem
        @id : 페이지 id
        @title : 페이지타이틀
        @lastModifiedTime : 마지막 수정날짜
    */
    var options = {
        method: 'GET',
        url: (listItem.id)?PAGE_CONTENT_URL(listItem.id):PAGE_CONTENT_URL(`0-c28267b55ebd4f02b60235bd0a6fc4a4!1-BC575AB8E2AB9833!2094`),
        headers:
         { 'Authorization': `Bearer ${token}` },
        body: {},
        json: true
    };

    return (dispatch) => {
        request(options, function (error, response, body) {
            // console.log('[action.index]actionCreator getPageContent error', error);
            // console.log('[action.index]actionCreator getPageContent body', body);
            if (error || body.error){
                // console.log('[action.index]getPageContent error!!', error);
                let errormsg = (error)?error:body.error;
                return callback(errormsg);
            }
            
            /* 노트 페이지의 <body> DOM */
            const $ = cheerio.load(body);
            /* 노트 페이지의 이름 추출 */
            let cheerTitle = $('title').text();
            /* 노트 페이지의 수정날짜 */
            let listItemLastModifiedDt = (listItem.lastModifiedTime)?listItem.lastModifiedTime:'';
            /* div영역의 style 바꾸기 */
            let cheerbody = $('body div').attr('style', 'word-break:break-all; padding:1em');
            
            /* 노트 페이지의 이름 */
            // let listItemTitle = (listItem.title)?listItem.title:body.substring(body.indexOf('<title>')+'<title>'.length, body.indexOf('</title>'));
            // 노트 페이지의 제목 추출
            // var titleDom = (!listItem)?'':`<div class="gs-item-title-area">
            //     <span class="gs-item-title">${listItemTitle}</span><span class="gs-item-modifiedDt">${listItemLastModifiedDt}</span>
            // </div>`;
            var titleDom = (!listItem)?'':`<div class="gs-item-title-area">
                <span class="gs-item-title">${cheerTitle}</span><span class="gs-item-modifiedDt">${listItemLastModifiedDt}</span>
            </div>`;

            // <body>, <div>의 style변경
            // var bodyEntireDom = body.substring(body.indexOf('<body'));
            // var lengthDiv = '<div style="'.length;
            // var idxDiv = bodyEntireDom.indexOf('<div style="')
            // var divSizeStyleDomRare = bodyEntireDom.substring(idxDiv+lengthDiv);
            // var idxSizeStyleEnd = divSizeStyleDomRare.indexOf('">');
            // var sizeStyle = divSizeStyleDomRare.substring(0,idxSizeStyleEnd);
            // var mergedStyle = 'word-break:break-all; padding:1em;';

            // var resultBodyDom = bodyEntireDom.replace(sizeStyle, mergedStyle).replace(/body/g, 'div')

            dispatch({
                type: PAGE_CONTENT,
                // payload: titleDom + resultBodyDom
                payload: titleDom + $.html()
            });
            // callback(titleDom + resultBodyDom);
        });
    };
}
