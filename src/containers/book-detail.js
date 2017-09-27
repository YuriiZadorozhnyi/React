import React, { Component } from 'react';

export default class BookDetail extends Component {
  render() {
    if(!this.props.selectedBook) {
      return <div>Select a book to get started.</div>
    }

    return(
      <div>
        <h3>Details for: </h3>
        <div>Title: {this.props.selectedBook.title}</div>
        <div>Pages: {this.props.selectedBook.pages}</div>
        <button onClick={this.props.unselectBook}>UNSELECT</button>
      </div>
    );
  }
}