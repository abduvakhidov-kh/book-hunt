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

interface CategorySelectProps {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}

const CategorySelect: React.FC<CategorySelectProps> = ({
  selectedCategory,
  setSelectedCategory,
}) => {
  return (
    <SelectContainer>
      <Select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        <option value="all">Все категории</option>
        <option value="art">Искусство</option>
        <option value="biography">Биографии</option>
        <option value="computers">Компьютеры</option>
        <option value="history">История</option>
        <option value="medical">Медицина</option>
        <option value="poetry">Поэзия</option>
      </Select>
    </SelectContainer>
  );
};

export default CategorySelect;
