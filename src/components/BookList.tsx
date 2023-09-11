import React from 'react';
import BookCard from './BookCard';
import LoadingSkeleton from './LoadingSkeleton';
import { GridContainer } from './styles/BookList.styled';


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
