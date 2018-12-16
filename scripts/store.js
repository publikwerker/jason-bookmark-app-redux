// JavaScript Document
/*global store isAdding*/

const store = (function(){
	
	const bookmarks = [
		{
			id: 'id',
			title: 'title',
			url: 'url',
			desc: 'desc',
			rating: 'rating',
			isExpanded: false
		}
	];
	const isAdding = false;
	
	return {
		bookmarks,
		isAdding,
	};
	
}());