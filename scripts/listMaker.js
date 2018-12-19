// JavaScript Document
/*global store listMaker $ mainRender*/
'use strict';


const listMaker = (function() {
	
	function gatherBookmarks() {
	// getting what's in the store
		console.log('getting what\'s in the store');
	const allBookmarks = store.bookmarks;
	return allBookmarks;
	}
	
	
	//converts bookmarks into a string
	const oneBookmarkString = (function(){
		
		console.log('converting bookmark objects into string');
		const theBookmarks = gatherBookmarks();
		const stringReady = JSON.stringify(theBookmarks);
		
		return stringReady;
	}());
	
	
	return {
		oneBookmarkString,
	};
	
}());