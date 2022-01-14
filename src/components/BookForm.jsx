import React from 'react';
import MyButton from './UI/button/MyButton';
import MyInput from './UI/input/MyInput';

const BookForm = ({ eventButton, book, setBook, titleForm, titleButton }) => {

  return (
    <form action="">
      <h1>{titleForm}</h1>
      <MyInput
        value={book.title}
        onChange={(e) => setBook({ ...book, title: e.target.value })}
        type="text"
        placeholder='Название книги'
      />
      <MyInput
        value={book.body}
        onChange={(e) => setBook({ ...book, body: e.target.value })}
        type="text"
        placeholder='Описание книги'
      />
      <MyButton onClick={eventButton}>{titleButton}</MyButton>
    </form>
  )
}

export default BookForm;
