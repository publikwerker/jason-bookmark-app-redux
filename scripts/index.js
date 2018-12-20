// JavaScript Document
/*global store listMaker $ mainRender*/
'use strict';

$(document).ready(function () {
	
    api.getBookmarks((items) => {
		items.forEach((item) => mainRender.addBookmark(item));
	});
					 
	mainRender.render;
      //  generateBookmarkString(item);
     //   listMaker.mainRender();
	console.log('index.js ran');
	console.log('isAdding has the value of ' + store.isAdding);
	console.log('bookmarks are:' + listMaker.oneBookmarkString);
	
	});