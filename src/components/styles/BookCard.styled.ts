import styled from "styled-components";

export const CardContainer = styled.div`
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

export const ImageContainer = styled.div`
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

export const BookImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  border-radius: 8px;
`;

export const BookInfo = styled.div`
  padding: 16px;
  text-align: start;
`;

export const BookTitle = styled.h3`
  font-size: 18px;
  margin: 0;
  color: #333;
  margin-bottom: 8px;
  text-align: start;
`;

export const BookCategory = styled.p`
  font-size: 14px;
  color: #666;
  margin-bottom: 8px;
  text-decoration: underline;
`;

export const BookAuthors = styled.p`
  font-size: 14px;
  color: #888;
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const PlaceholderImage = styled.div`
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