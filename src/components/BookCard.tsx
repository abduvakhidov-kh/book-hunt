import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin-bottom: 20px;
  text-align: left;
`;

const BookImage = styled.img`
  max-width: 100px;
  height: auto;
  margin-right: 20px;
`;

const BookTitle = styled.h3`
  font-size: 18px;
  margin: 0;
  margin-bottom: 10px;
`;

const BookCategory = styled.p`
  font-size: 14px;
  color: #777;
  margin: 0;
`;

const BookAuthors = styled.p`
  font-size: 16px;
  margin: 10px 0;
`;

interface BookCardProps {
  book: {
    id: string;
    volumeInfo: {
      title: string;
      imageLinks?: {
        thumbnail: string;
      };
      categories?: string[];
      authors?: string[];
    };
  };
}

const BookCard: React.FC<BookCardProps> = ({ book }) => {
  return (
    <Card>
      <div>
        <BookImage src={book.volumeInfo.imageLinks?.thumbnail || ''} alt={book.volumeInfo.title} />
      </div>
      <div>
        <BookTitle>{book.volumeInfo.title}</BookTitle>
        <BookCategory>{book.volumeInfo.categories?.[0]}</BookCategory>
        <BookAuthors>Авторы: {book.volumeInfo.authors?.join(', ')}</BookAuthors>
      </div>
    </Card>
  );
};

export default BookCard;
