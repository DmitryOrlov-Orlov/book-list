import React from 'react';
import MyButton from './UI/button/MyButton';

const BookItem = (props) => {

  return (
    <div className="book">
      <div className="book__content">
        <strong>{props.number}. {props.book.title}</strong>
        <div>{props.book.body}</div>
      </div>
      <div>
        <MyButton id={props.book.id} onClick={() => props.edit(props.book)}>Редактировать</MyButton>
        <MyButton onClick={() => props.remove(props.book)}>
          Удалить
        </MyButton>
      </div>
    </div>
  )
}

export default BookItem;
