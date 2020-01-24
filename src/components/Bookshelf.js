import React from 'react';
import BookshelfTitle from './BookshelfTitle';
import BookshelfBooks from './BookshelfBooks';

const Bookshelf = (props) => (
  <div className="bookshelf">
    <BookshelfTitle title={props.title} />
    <BookshelfBooks books={props.books} />
  </div>
);

export default Bookshelf;