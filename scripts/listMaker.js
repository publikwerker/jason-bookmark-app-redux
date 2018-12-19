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
	
		
	//changes isAdding value to true
	function changeIsAddingToTrue() {
		store.isAdding = true;
		console.log('isAdding has the value of ' + store.isAdding);
	}
	
	//changes isAdding value to false
	function changeIsAddingToFalse() {
		store.isAdding = false;
		console.log('isAdding has the value of ' + store.isAdding);
	}
	
	//listens for add button click
	$('#add-button').on('click', function() {
		console.log('add button clicked');
		changeIsAddingToTrue();
		mainRender.render();
	});
	
	//capture form data
	const newAddData = (function(input) {
		console.log(input);
	});
	
	
	//listens for add submit

	$('form').on('submit', event => {
		event.preventDefault();
		console.log('submit button pushed');
		// capture form data
		const formData = $('form').serializeArray();
		newAddData(formData);
		// change value of isAdding
		changeIsAddingToFalse();
		// removes add field
		$('.js-add-bookmark').html('');
		mainRender.render();
	});
	
	
	return {
		oneBookmarkString,
	};
	
}());