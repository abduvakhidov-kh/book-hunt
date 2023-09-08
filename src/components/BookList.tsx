import React from 'react';
import BookCard from './BookCard';
import styled from 'styled-components';
import LoadingSkeleton from './LoadingSkeleton';

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  width: 100%;
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
  loading: boolean
}

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
