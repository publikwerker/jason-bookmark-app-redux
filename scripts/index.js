// JavaScript Document
/*global store isAdding*/

$(document).ready(function () {
	store;
	console.log('index.js ran');
	for (let i=0; i<store.bookmarks.length; i++) {
		console.log('bookmarks contains: ' + store.bookmarks[i]);
	};
	console.log('isAdding has the value of ' + store.isAdding);
	
	
})