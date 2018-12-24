// JavaScript Document
/*global store listMaker main api $*/
'use strict';

const api = (function(callback) {
    console.log('api ran');
    const BASE_URL = 'https://thinkful-list-api.herokuapp.com/jason/bookmarks/';

    const getBookmarks = (function(callback) {
        console.log('getBookmarks ran');
        const bookmarks = $.getJSON(BASE_URL, (callback));
        mainRender.addBookmark(bookmarks);
        //return bookmarks;
    });

    const createBookmarks = (function(bookmarkToBe, callback) {
        console.log('createBookmarks ran');
        const newBookmark = JSON.stringify(bookmarkToBe);

        $.ajax({
            url: BASE_URL,
            method: 'POST',
            contentType: 'application/json',
            data: newBookmark,
            success: callback,
        });
    });

    const deleteItem = (function(id, callback) {
        $.ajax({
            url:BASE_URL+id,
            method: 'DELETE',
            success: callback
        });


    });
	
    return {
        getBookmarks,
        createBookmarks,
        deleteItem,
    };
}());