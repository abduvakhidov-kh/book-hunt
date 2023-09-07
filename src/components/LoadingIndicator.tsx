import React from 'react';
import styled from 'styled-components';

const Indicator = styled.div`
  font-size: 24px;
  color: #007bff;
  margin-top: 20px;
`;

const LoadingIndicator: React.FC = () => {
  return (
    <Indicator>
      Загрузка...
    </Indicator>
  );
};

export default LoadingIndicator;
