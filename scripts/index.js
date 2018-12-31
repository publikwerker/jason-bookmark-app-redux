// JavaScript Document
/*global store listMaker $ mainRender*/
'use strict';

$(document).ready(function () {
	
	// make GET request for info on the server
	api.getBookmarks((bookmarks) => {
		// each bookmark get added to store
		bookmarks.forEach((bookmark) => store.addItem(bookmark));
		// render it to the DOM
		mainRender.render();
	});
   listMaker.bindEventListeners();
});