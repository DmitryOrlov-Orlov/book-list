import React from 'react';
import cl from './MyModal.module.css';

function MyModal({ children, visible, setVisible, setBook }) {

  const rootClasses = [cl.myModal];
  if (visible) {
    rootClasses.push(cl.myModalActive);
  }
  const handlerModal = () => {
    setBook({ title: '', body: '' });
    setVisible(false)
  }

  return (
    <div className={rootClasses.join(' ')} onClick={() => handlerModal()}>
      <div className={cl.myModalContent} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  )
}

export default MyModal;
