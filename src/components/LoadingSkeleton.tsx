import React from 'react';
import styled from 'styled-components';

const SkeletonContainer = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  padding: 20px;
`;

const SkeletonBook = styled.div`
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

const SkeletonTitle = styled.div`
  width: 150px;
  height: 20px;
  background-color: #e0e0e0;
  border-radius: 5px;
  margin: 10px;
  animation: loading 1s infinite alternate;
`;

const SkeletonCategory = styled.div`
  width: 100px;
  height: 15px;
  background-color: #e0e0e0;
  border-radius: 5px;
  margin: 10px;
  animation: loading 1s infinite alternate;
`;

const SkeletonAuthors = styled.div`
  width: 120px;
  height: 15px;
  background-color: #e0e0e0;
  border-radius: 5px;
  margin: 10px;
  animation: loading 1s infinite alternate;
`;

const SkeletonImage = styled.div`
  width: 100%;
  height: 250px;
  background-color: #e0e0e0;
  border-radius: 5px 5px 0 0;
`;

function LoadingSkeleton({ count }: { count: number }) {
  const skeletons = Array.from({ length: count }, (_, index) => (
    <SkeletonBook key={index}>
      <SkeletonImage />
      <SkeletonTitle />
      <SkeletonCategory />
      <SkeletonAuthors />
    </SkeletonBook>
  ));

  return <SkeletonContainer>{skeletons}</SkeletonContainer>;
}

export default LoadingSkeleton;
