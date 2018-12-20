// JavaScript Document
/*global store listMaker main api $*/
'use strict';

const api = (function(callback) {
    console.log('api ran');
    const BASE_URL = 'https://thinkful-list-api.herokuapp.com/jason/bookmarks/';

    const getBookmarks = (function(callback) {
        console.log('getBookmarks ran');
        $.getJSON(BASE_URL, (callback));
    });
	
    return {
        getBookmarks,
        //createBookmarks,
        //deleteItem,
    };
}());