// JavaScript Document
/*global store listMaker $ mainRender*/
'use strict';

$(document).ready(function () {
	api.getBookmarks(() => {
		mainRender.render();
	});
   listMaker.bindEventListeners();
});