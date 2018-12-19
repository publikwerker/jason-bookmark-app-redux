// JavaScript Document
/*global store listMaker $ mainRender*/
'use strict';

const mainRender = (function() {
	
	//if (store.isAdding == true) {
	const render = (function() {	
		if (store.isAdding) {
			console.log('insert the adding block');
			$('.js-add-bookmark').html(
				`
			<fieldset class="add-field">
                <label for="link title" class="adding-label">Title of this bookmark</label><br />
                    <input type="text" name="linkTitle" id="title" placeholder="memorable title" /><br />
                <label for="linkDescription" class="adding-label">Brief description of the site</label><br />
                    <textarea  name="linkDescription" id="description" placeholder="This site had a complete how-to build a fort." /><br />
                <label for="linkUrl" class="adding-label">the url</label><br />
                    <input type="url" name="linkUrl" id="url" placeholder="http://...." /><br/>
                <label for="filter-results" class="adding-label">Rate its goodness</label> <br />
                    <select id="filter-results" name="filterResults">
                        <option value="0">none</option>
                        <option value="1">one</option>
                        <option value="2">two</option>
                        <option value="3">three</option>
                        <option value="4">four</option>
                        <option value="5">five</option>
                    </select><br />
				<button type="submit" id="form-submit">submit</button>
            </fieldset>
			`
			)
		} else {
			console.log('insert the bookmark list');
		}
		
	});
	
	return {
		render,
	};
}());