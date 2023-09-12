import React from 'react';
import BookCard from './BookCard';
import { GridContainer } from './styles/BookList.styled';
import { BookListProps } from '../types';

const BookList: React.FC<BookListProps> = ({ books }) => {

  return (
    <GridContainer>
      {books.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </GridContainer>
  );
};

export default BookList;
