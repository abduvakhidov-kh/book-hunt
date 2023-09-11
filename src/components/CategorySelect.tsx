import React from 'react';
import { SelectContainer, Select } from './styles/CategorySelect.styled';

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
