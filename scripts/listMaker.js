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
	const handleAddButtonClick = function () {
	$('#add-button').on('click', function() {
		console.log('add button clicked');
		changeIsAddingToTrue();
		mainRender.render();
	})};
	
	//capture form data and save it to theBody
	const newAddData = (function(input) {
		
		let theTitle = input[0].value;
		console.log(input[0].value);
		let theDesc = input[1].value;
		console.log(input[1].value);
		let theURL = input[2].value;
		console.log(input[2].value);
		let theRating = input[3].value;
		console.log(input[3].value);
		
		let theBody = `{
			"title": "${theTitle}",
        	"url": "${theURL}",
        	"desc": "${theDesc}",
        	"rating": ${theRating},
			"isExpanded": false
		}`;
		console.log(theBody);
		api.createBookmarks(theBody);
	});
	
	
	//listens for add submit
	const handleFormSubmit = function() {
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
			api.getBookmarks(() => {
				mainRender.render();
			});
		});
	};
	
	const handleBookmarkClick = function() {
		$('.js-bookmark-list').click('.bookmark-name', function(e) {
			//get id number
			const targetObject = $(e.target).closest('div');
			const theId = (targetObject[0].id);
			console.log(theId);
		});
	};
	
	const bindEventListeners = function(){
		handleAddButtonClick();
		handleFormSubmit();
		handleBookmarkClick();
	};
	
	
	return {
		oneBookmarkString,
		bindEventListeners
	};
	
}());