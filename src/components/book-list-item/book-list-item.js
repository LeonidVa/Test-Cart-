import React from 'react';
import './book-list-item.css';

const BookListItem = ({ book, onAddedToCart }) => {
  const { title, author, price } = book;
  return (
    <div className="book-list-item" role='book-list-item'>
      <div className="book-cover">
          <i className="fa fa-book" aria-hidden="true"></i>
      </div>
      <div className="book-details">
        <span className="book-title">{title}</span>
        <div className="book-author">{author}</div>
        <div className="book-price">${price}</div>
        <button
          onClick={onAddedToCart}
          className="add-to-cart">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default BookListItem;
