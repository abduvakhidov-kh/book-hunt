import React from 'react';
import { SearchContainer, SearchInputField, SearchButton } from './styles/SearchInput.styled';

interface SearchInputProps {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  handleSearch: () => void;
}

function SearchInput({ searchTerm, setSearchTerm, handleSearch }: SearchInputProps) {
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <SearchContainer>
      <SearchInputField
        type="text"
        placeholder="Введите запрос"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      <SearchButton onClick={handleSearch}>Поиск</SearchButton>
    </SearchContainer>
  );
}

export default SearchInput;
