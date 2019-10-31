import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'

import Shelf from './Shelf.js'

import * as BooksAPI from './BooksAPI'

class BooksApp extends React.Component {
  state = {books:[],
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false,
      apiReturned: false
  }

  componentDidMount() {
    BooksAPI.getAll()
      .then((books) => {
        this.setState(() => ({
          books
        }))
      },this.apiReturned=true)
  }

      // keys are: title, authors[],publisher,publishedDate, shelf

   /*
   ["title", "subtitle", "authors", "publisher", "publishedDate", "description",
   "industryIdentifiers", "readingModes", "pageCount", "printType", "categories",
   "averageRating", "ratingsCount", "maturityRating", "allowAnonLogging", "contentVersion",
   "panelizationSummary", "imageLinks", "language", "previewLink", "infoLink",
   "canonicalVolumeLink", "id", "shelf"]
   */

  render() {

    return (
      <div className="app">

        {this.state.apiReturned ? (  <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>

              <Shelf label="Currently Reading" allBooks={this.state.books}/>

              </div>
            </div>

          </div>

        ) : (
               <div>waiting...</div>
        )}
      </div>
    )
  }
}

export default BooksApp
