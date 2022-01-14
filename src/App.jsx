import React, { useState, useEffect } from 'react';
import BookList from './components/BookList';
import BookForm from './components/BookForm';
import MyModal from './components/UI/MyModal/MyModal';
import MyButton from './components/UI/button/MyButton';
import './styles/App.css';

const App = () => {

  const [books, setBooks] = useState(() => {
    let prepareBooks = localStorage.getItem('books');
    let books = JSON.parse(prepareBooks);
    return books || [];
  });
  const [modal, setModal] = useState({ createModal: false, editModal: false });
  const [book, setBook] = useState({ title: '', body: '', id: '' });

  useEffect(() => {
    localStorage.setItem('books', JSON.stringify(books));
  }, [books])

  const removeBook = (book) => {
    setBooks(books.filter(b => b.id !== book.id));
  }

  const createBook = (e) => {
    e.preventDefault();
    setBook({ title: '', body: '' });
    setBooks([...books, { ...book, id: Date.now() }]);
    setModal({ ...modal, createModal: false });
    setBook({ title: '', body: '' });
  }

  const triggerEditModal = (book) => {
    setModal({ ...modal, editModal: true });
    setBook({ title: book.title, body: book.body, id: book.id });
  }

  const saveEditing = (e) => {
    e.preventDefault();
    setBooks(books.map((b) => {
      if (b.id === book.id) {
        return { ...b, title: book.title, body: book.body };
      }
      return b;
    }));
    setModal({ ...modal, editModal: false });
    setBook({ title: '', body: '' });
  }

  return (
    <div className="App">
      <MyButton onClick={() => setModal({ ...modal, createModal: true })}>
        Создать книгу
      </MyButton>

      {<MyModal setBook={setBook} visible={modal.createModal} setVisible={setModal}>
        <BookForm
          modal={setModal}
          eventButton={createBook}
          book={book}
          setBook={setBook}
          titleForm="Добавить новую книгу"
          titleButton="Создать"
        />
      </MyModal>}

      {<MyModal setBook={setBook} visible={modal.editModal} setVisible={setModal}>
        <BookForm
          modal={setModal}
          eventButton={saveEditing}
          book={book}
          setBook={setBook}
          titleForm="Редактировать текущую книгу"
          titleButton="Сохранить"
        />
      </MyModal>}

      {books.length !== 0
        ? <BookList edit={triggerEditModal} remove={removeBook} books={books} />
        : <h1>Список пуст!</h1>
      }
    </div>
  );
}

export default App;
