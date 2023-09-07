import React from 'react';
import styled from 'styled-components';

const SelectContainer = styled.div`
  margin-top: 20px;
`;

const Select = styled.select`
  padding: 10px;
  font-size: 16px;
`;

interface CategorySelectProps {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}

const CategorySelect: React.FC<CategorySelectProps> = ({ selectedCategory, setSelectedCategory }) => {
  const categories = ['all', 'art', 'biography', 'computers', 'history', 'medical', 'poetry'];

  return (
    <SelectContainer>
      <Select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </Select>
    </SelectContainer>
  );
};

export default CategorySelect;
