import React, { Component } from 'react'
import Book from './Book.js'
import PropTypes from 'prop-types'

class Shelf extends Component {
  state = {
         booksOnShelf:[]
  }

  constructor(props)   {
    console.log(props.allBooks.length);
  }



  render() {
    return( <div className="bookshelf">
                  <h2 className="bookshelf-title">{this.props.label}</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      <li>
                    <Book bookState="currentlyReading" title="Ender's Game" author="Orson Scott Card" />
                      </li>
                      <li>


                      </li>
                    </ol>
                  </div>
                </div>)
  }

}

export default Shelf
