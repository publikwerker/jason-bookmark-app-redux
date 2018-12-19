// JavaScript Document
/*global store listMaker $ mainRender*/
'use strict';

$(document).ready(function () {

	console.log('index.js ran');
	console.log('isAdding has the value of ' + store.isAdding);
	console.log('bookmarks are:' + listMaker.oneBookmarkString);
	
	
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
	
	//listens for add submit
	$('form').on('submit', event => {
		event.preventDefault();
		console.log('submit button pushed');
		changeIsAddingToFalse();
		// removes add field
		$('.js-add-bookmark').html('');
		mainRender.render();
	});

})