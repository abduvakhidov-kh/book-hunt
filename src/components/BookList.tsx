import React from 'react';
import BookCard from './BookCard';
import styled from 'styled-components';

const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

interface BookListProps {
  books: {
    id: string;
    volumeInfo: {
      title: string;
      imageLinks?: {
        thumbnail: string;
      };
      categories?: string[];
      authors?: string[];
    };
  }[];
}

const BookList: React.FC<BookListProps> = ({ books }) => {
  return (
    <List>
      {books.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </List>
  );
};

export default BookList;
