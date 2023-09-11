import styled from 'styled-components';

export const SkeletonContainer = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  padding: 20px;
`;

export const SkeletonBook = styled.div`
  height: 400px;
  background-color: #f0f0f0;
  border-radius: 5px;
  margin: 10px;
  animation: loading 1s infinite alternate;

  @keyframes loading {
    0% {
      opacity: 0.7;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const SkeletonTitle = styled.div`
  width: 150px;
  height: 20px;
  background-color: #e0e0e0;
  border-radius: 5px;
  margin: 10px;
  animation: loading 1s infinite alternate;
`;

export const SkeletonCategory = styled.div`
  width: 100px;
  height: 15px;
  background-color: #e0e0e0;
  border-radius: 5px;
  margin: 10px;
  animation: loading 1s infinite alternate;
`;

export const SkeletonAuthors = styled.div`
  width: 120px;
  height: 15px;
  background-color: #e0e0e0;
  border-radius: 5px;
  margin: 10px;
  animation: loading 1s infinite alternate;
`;

export const SkeletonImage = styled.div`
  width: 100%;
  height: 250px;
  background-color: #e0e0e0;
  border-radius: 5px 5px 0 0;
`;
