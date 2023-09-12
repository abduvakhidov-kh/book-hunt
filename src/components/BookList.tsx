import React from 'react';
import BookCard from './BookCard';
import LoadingSkeleton from './LoadingSkeleton';
import { GridContainer } from './styles/BookList.styled';
import { BookListProps } from '../types';

const BookList: React.FC<BookListProps> = ({ books, loading }) => {

  if (loading) {
    return <LoadingSkeleton count={3  } />
  }

  return (
    <GridContainer>
      {books.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </GridContainer>
  );
};

export default BookList;
