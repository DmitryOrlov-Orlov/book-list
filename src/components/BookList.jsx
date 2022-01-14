import React from 'react';
import BookItem from './BookItem';

const BookList = ({ books, remove, edit }) => {

  return (
    <div>
      <h1>Список книг</h1>
      {books.map((book, item) => {
        return (
          <BookItem
            number={item + 1}
            key={book.id}
            book={book}
            remove={remove}
            edit={edit}
          />
        )
      })}
    </div>
  )
}

export default BookList;
