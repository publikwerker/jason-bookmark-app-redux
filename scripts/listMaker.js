// JavaScript Document
/*global store listMaker $ mainRender*/
'use strict';


const listMaker = (function() {
	

	const setStore =(function () {
		console.log('setStore ran');
		// clear old store
		store.bookmarks = [];
		// make GET request for info on the server
		api.getBookmarks();
	});
		
	//changes isAdding value to true
	function toggleIsAdding() {
		store.isAdding = !store.isAdding;
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
		toggleIsAdding();
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
			setStore();
			mainRender.render();
		});
	};
	
	function switchElementToExpanded(object) {	
		document.getElementById(object.id).outerHTML = mainRender.insertExpandedView(object);
	}

	function switchElementToCondensed(object) {	
		document.getElementById(object.id).outerHTML = mainRender.insertCondensedView(object);
	}
	
	const handleBookmarkClick = function() {
		$('.js-bookmark-list').click('.bookmark-name', function(e) {
			//get id number
			const targetObject = $(e.target).closest('div');
			console.log(`e.target is ${e.target}`);
			//assign it to a variable
			const theId = (targetObject[0].id);
			console.log(`theID is ${theId}`)
			//select bookmark with that id from store
			const bookmarkClicked = store.bookmarks.filter((bookmark) => bookmark.id === theId);
			console.log("the value of bookmarkClicked[0].isExpanded is " + bookmarkClicked[0].isExpanded);
			//ascertain value of isExpanded key within bookmark object
			//and reverse it
			bookmarkClicked[0].isExpanded = !bookmarkClicked[0].isExpanded;
			//assign that value to a variable
			const tempIsExpanded = bookmarkClicked[0].isExpanded;
			//check new value of isExpanded, 
			//render accordingly
			if (tempIsExpanded === true) {
				console.log("this works");
				switchElementToExpanded(bookmarkClicked[0]);
			} else if (tempIsExpanded === false) {
				console.log("this works");
				switchElementToCondensed(bookmarkClicked[0]);
			};

			console.log("the value of tempIsExpanded is " + tempIsExpanded);
			console.log(theId);
		});
	};


	const handleDeleteButtonClick = function() {
		$('.js-bookmark-list').click('delete-link', function(e) {
			const targetObject = $(e.target).closest('div');
			const bookmarkToDelete = targetObject[0].id;
		})
	}
	
	const bindEventListeners = function(){
		handleAddButtonClick();
		handleFormSubmit();
		handleBookmarkClick();
		handleDeleteButtonClick();
	};
	
	
	return {
		setStore,
		bindEventListeners
	};
	
}());