import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  border: 1px solid #eaeaea;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  cursor: pointer;
  background-color: #fff;

  &:hover {
    transform: scale(1.02);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  }
`;

const ImageContainer = styled.div`
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const BookImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  border-radius: 8px;
`;

const BookInfo = styled.div`
  padding: 16px;
  text-align: start;
`;

const BookTitle = styled.h3`
  font-size: 18px;
  margin: 0;
  color: #333;
  margin-bottom: 8px;
  text-align: start;
`;

const BookCategory = styled.p`
  font-size: 14px;
  color: #666;
  margin-bottom: 8px;
  text-decoration: underline;
`;

const BookAuthors = styled.p`
  font-size: 14px;
  color: #888;
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const PlaceholderImage = styled.div`
  width: 50%;
  height: 80%;
  background-color: #f9f9f9; /* Light gray background color */
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 16px;
  color: #666;
  position: relative;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  border-radius: 8px;
`;

interface BookCardProps {
  book: {
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

function truncateText(text: string, maxLength: number) {
  return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
}

function BookCard({ book }: BookCardProps) {
  return (
    <CardContainer>
      <ImageContainer>
      {book.volumeInfo.imageLinks?.thumbnail ? (
          <BookImage src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} />
        ) : (
          <PlaceholderImage>
            <div>{truncateText(book.volumeInfo.title, 40)}</div>
          </PlaceholderImage>
        )}
      </ImageContainer>
      <BookInfo>
        <BookCategory>{ !!book.volumeInfo.categories ? truncateText(book.volumeInfo.categories?.join(', '), 40) : 'All'}</BookCategory>
        <BookTitle>{truncateText(book.volumeInfo.title, 40)}</BookTitle>
        {book.volumeInfo.authors && <BookAuthors>Авторы: {truncateText(book.volumeInfo.authors?.join(', '), 40)}</BookAuthors>}
      </BookInfo>
    </CardContainer>
  );
}

export default BookCard;
