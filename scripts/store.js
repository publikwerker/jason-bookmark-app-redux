// JavaScript Document
/*global store listMaker $ mainRender*/
'use strict';

const store = (function(){
	
	// const bookmarks = [
	// 	{
	// 		id: '439275908',
	// 		title: 'publikwerks',
	// 		url: 'http://www.publikwerks.com',
	// 		desc: 'best art in the world',
	// 		rating: 'four',
	// 		isExpanded: false
	// 	},
	// 			{
	// 		id: '526247',
	// 		title: 'volkslandia',
	// 		url: 'http://www.volkslandia.com',
	// 		desc: 'desc',
	// 		rating: 'two',
	// 		isExpanded: false
	// 	},
	// 	{
	// 		id: '63754',
	// 		title: 'tarot',
	// 		url: 'http://www.thedarkside.com',
	// 		desc: 'automated tarot reading',
	// 		rating: 'five',
	// 		isExpanded: true
	// 	}
	// ];
	// const isAdding = false;
	
	const addItem = function(item) {
		//item.isExpanded = false;
		console.log(this);
		store.bookmarks.push(item);
	}
	
	return {
		bookmarks: [],
		isAdding: false,
		addItem
	};
	
}());