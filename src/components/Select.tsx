import React from 'react';
import { SelectContainer, Select as StyledSelect } from './styles/Select.styled';
import { SelectProps } from '../types';

const Select: React.FC<SelectProps> = ({
  selected,
  setSelected,
  options
}) => {
  return (
    <SelectContainer>
      <StyledSelect
        value={selected}
        onChange={(e) => setSelected(e.target.value)}
      >
        {options.map(({value, title}) => (
          <option value={value}>{title}</option>
        ))}
      </StyledSelect>
    </SelectContainer>
  );
};

export default Select;
