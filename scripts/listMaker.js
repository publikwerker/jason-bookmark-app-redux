// JavaScript Document
/*global store listMaker $ mainRender*/
'use strict';


const listMaker = (function() {
	
	const setStore =(function () {
		console.log('setStore ran');
		// make GET request for info on the server
		api.getBookmarks();
	});
		
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
			// add info to server
			newAddData(formData);
			// change value of isAdding
			changeIsAddingToFalse();
			// removes add field
			$('.js-add-bookmark').html('');
			mainRender.render();
		});
	};
	
	function switchElementToExpanded(object) {
		
		document.getElementById(object.id).outerHTML = mainRender.insertExpandedView(object);
	}
	
	const handleBookmarkClick = function() {
		$('.js-bookmark-list').click('.bookmark-name', function(e) {
			//get id number
			const targetObject = $(e.target).closest('div');
			const theId = (targetObject[0].id);
			const alterThis = store.bookmarks.filter((bookmark) => bookmark.id === theId);
			alterThis.isExpanded = true;
			console.log(alterThis);
			// mute this to render only one element
			//mainRender.render();
			//and instead call switchElementToExpanded
			switchElementToExpanded(alterThis[0]);
			console.log(theId);
		});
	};
	
	const bindEventListeners = function(){
		handleAddButtonClick();
		handleFormSubmit();
		handleBookmarkClick();
	};
	
	
	return {
		setStore,
		//oneBookmarkString,
		bindEventListeners
	};
	
}());