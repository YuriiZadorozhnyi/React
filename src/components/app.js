import React, { Component } from 'react';

import BookList from '../containers/book-list';
import BookDetail from '../containers/book-detail';

export default class App extends Component {
  
  constructor() {
    super();
    this.state = {
      selectedBook: null,
      books: [
        {title: 'JavaScript', pages: 321},
        {title: 'Python', pages: 212},
        {title: 'Objective-C', pages: 222},
        {title: 'Java', pages: 152},
      ]
    };

    this.selectBook = this.selectBook.bind(this);
    this.unselectBook = this.unselectBook.bind(this);
  }

  selectBook(book) {
    this.setState({
      selectedBook: book
    })
  }

  unselectBook() {
    this.setState({
      selectedBook: null
    })
  }

  render() {
    return (
      <div>
        <BookList selectBook={this.selectBook} books={this.state.books}/>
        <BookDetail selectedBook={this.state.selectedBook} unselectBook={this.unselectBook}/>
      </div>
    );
  }
}