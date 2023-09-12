import React from 'react';
import { BookAuthors, BookCategory, BookImage, BookInfo, BookTitle, CardContainer, ImageContainer, PlaceholderImage } from './styles/BookCard.styled';
import { Book } from '../types';
import { truncateText } from '../utils';

function BookCard({ book }: {book: Book}) {
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
