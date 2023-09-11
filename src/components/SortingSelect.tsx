import React from 'react';
import { SelectContainer, Select } from './styles/CategorySelect.styled';

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
