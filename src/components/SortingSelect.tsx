import React from 'react';
import styled from 'styled-components';

const SelectContainer = styled.div`
  margin-top: 20px;
`;

const Select = styled.select`
  padding: 12px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #fff;
  color: #333;
  cursor: pointer;
  transition: border-color 0.3s, box-shadow 0.3s;

  &:hover {
    border-color: #aaa;
  }

  &:focus {
    border-color: #555;
    box-shadow: 0 0 5px rgba(85, 85, 85, 0.5);
  }
`;

interface SortingSelectProps {
  sorting: string;
  setSorting: (sorting: string) => void;
}

const SortingSelect: React.FC<SortingSelectProps> = ({ sorting, setSorting }) => {
  return (
    <SelectContainer>
      <Select value={sorting} onChange={(e) => setSorting(e.target.value)}>
        <option value="relevance">По релевантности</option>
        <option value="newest">По новизне</option>
      </Select>
    </SelectContainer>
  );
};

export default SortingSelect;
