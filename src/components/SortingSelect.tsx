import React from 'react';
import styled from 'styled-components';

const SelectContainer = styled.div`
  margin-top: 20px;
`;

const Select = styled.select`
  padding: 10px;
  font-size: 16px;
`;

interface SortingSelectProps {
  sorting: string;
  setSorting: (sorting: string) => void;
}

const SortingSelect: React.FC<SortingSelectProps> = ({ sorting, setSorting }) => {
  return (
    <SelectContainer>
      <Select
        value={sorting}
        onChange={(e) => setSorting(e.target.value)}
      >
        <option value="relevance">По релевантности</option>
        <option value="newest">По новизне</option>
      </Select>
    </SelectContainer>
  );
};

export default SortingSelect;
