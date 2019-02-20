// JavaScript Document
/*global store listMaker main api $*/
'use strict';

const api = (function(callback) {
    console.log('api ran');
    const BASE_URL = 'https://thinkful-list-api.herokuapp.com/jason/bookmarks/';

    const getBookmarks = (function(callback) {
        console.log('getBookmarks ran');
        $.ajax({
			method: 'GET',
			datatype: "json",
			url: BASE_URL,
			data: {part: "snippet"},
			success: (bookmarks) => {
			// each bookmark gets added to store
				bookmarks.forEach((bookmark) => {
                    bookmark.isExpanded=false;
                    store.bookmarks.push(bookmark);
                });
                bookmarks.forEach((bookmark) => {
                    console.log(bookmark)
                });
                mainRender.render();
			}
		});
    });

    const createBookmarks = (function(theBody, callback) {
        console.log('createBookmarks ran');
        //const newBookmark = JSON.stringify(theBody);
		//console.log(newBookmark);

        $.ajax({
            url: BASE_URL,
            method: 'POST',
            contentType: 'application/json',
            data: theBody,
            success: (function() {
                listMaker.setStore();
                mainRender.render();
            }),
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