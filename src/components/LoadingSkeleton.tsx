import React from 'react';
import { SkeletonBook, SkeletonImage, SkeletonTitle, SkeletonCategory, SkeletonAuthors, SkeletonContainer } from './styles/LoadingSkeleton.styled';

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
