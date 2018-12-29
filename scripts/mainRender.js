// JavaScript Document
/*global store listMaker $ mainRender*/
'use strict';

const mainRender = (function() {
	
	function insertAddingBlock() {
		console.log('insert the adding block');
		// insert form for adding bookmarks
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
		);	
	}
	
	function insertCondensedView(bookmark) {
		// insert condensed bookmark
		return`
            <div class="bookmark" id="${bookmark.id}">
                
                    <h2 class="bookmark-name">${bookmark.title}</h2>
                
                <a class="bookmark-link" href="${bookmark.url}">Link</a>
                <span class="rating">${bookmark.rating} stars</span>
            </div>
			`;
	}
	
	
	function insertExpandedView(bookmark) {
		// insert expanded bookmark
		return` <div class="bookmark" id="${bookmark.id}">
              
                    <h2 class="bookmark-name">${bookmark.title}</h2>
             
                <a class="bookmark-link" href="${bookmark.url}">Link</a>
                <div class="bookmark-description">
                    <p class="description">${bookmark.desc}</p>
                </div>
                <span class="rating">${bookmark.rating} stars</span>
                <button name="delete-link">delete</button>
            </div>`;
	}
	
	 // this creates a string of all the bookmarks
    function generateBookmarkString() {
        console.log('generateBookmarkString ran');
        const bookmarks = store.bookmarks.map((bookmark) => {
			if (bookmark.isExpanded===true) {
				return insertExpandedView(bookmark);
			} else {
				return insertCondensedView(bookmark);
			}
		});
		
        return bookmarks.join('');
    };
	
	
    const addBookmark = function(theBookmarks) {
		for (let i=0; i < theBookmarks; i++) {
			store.bookmarks.push(theBookmarks[i]);
		};
    };
	
	//if (store.isAdding == true) 
	const render = (function() {	
		
		if (store.isAdding) {
			//clear bookmark list
			$('.js-bookmark-list').html('');
			insertAddingBlock();
		} else {
			// clear form for adding bookmarks
			$('.js-add-bookmark').html('');
			const bookmarkDisplay = generateBookmarkString();
			$('.js-bookmark-list').html(bookmarkDisplay);
		}
	});
	
	
	return {
		render,
		addBookmark,
	};
	}());
