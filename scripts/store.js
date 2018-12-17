// JavaScript Document
/*global store listMaker*/

const store = (function(){
	
	const bookmarks = [
		{
			id: 'id',
			title: 'title',
			url: 'url',
			desc: 'desc',
			rating: 'rating',
			isExpanded: false
		},
				{
			id: 'id',
			title: 'title',
			url: 'url',
			desc: 'desc',
			rating: 'rating',
			isExpanded: false
		},
		{
			id: 'id',
			title: 'title',
			url: 'url',
			desc: 'desc',
			rating: 'rating',
			isExpanded: true
		}
	];
	const isAdding = false;
	
	return {
		bookmarks,
		isAdding,
	};
	
}());