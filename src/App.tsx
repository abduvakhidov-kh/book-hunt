import { useState, useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { searchBooks, loadMoreBooks, setLastSearch } from './redux/actions';
import SearchInput from './components/SearchInput';
import CategorySelect from './components/CategorySelect';
import SortingSelect from './components/SortingSelect';
import BookList from './components/BookList';
import LoadMoreButton from './components/LoadMoreButton';
import LoadingIndicator from './components/LoadingIndicator';
import styled from 'styled-components';
import { useAppSelector } from './store';
import type {} from 'redux-thunk/extend-redux';
import debounce from 'lodash/debounce';

const AppContainer = styled.div`
  font-family: Arial, sans-serif;
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f2f2f2;
`;

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
  color: #333;
`;

const ErrorMessage = styled.p`
  color: red;
  margin-top: 10px;
`;

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sorting, setSorting] = useState('relevance');
  const dispatch = useDispatch();
  const books = useAppSelector((state) => state.appState.books);
  const error = useAppSelector((state) => state.appState.error);
  const loading = useAppSelector((state) => state.appState.loading);

  const debouncedSearch = useCallback(
    debounce(
      (searchTerm: string, category: string, sorting: string) => {
        dispatch(searchBooks(searchTerm, category, sorting));
      },
      300
    ),
    []
  );

  const handleSearch = () => {
    dispatch(setLastSearch(searchTerm));
    debouncedSearch(searchTerm, selectedCategory, sorting);
  };

  const handleLoadMore = () => {
    dispatch(loadMoreBooks(searchTerm));
  };

  useEffect(() => {
    handleSearch();
  }, [searchTerm, selectedCategory, sorting]);

  return (
    <AppContainer>
      <Title>Поиск книг</Title>
      <SearchInput
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        handleSearch={handleSearch}
      />
      <CategorySelect
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <SortingSelect sorting={sorting} setSorting={setSorting} />
      {loading ? (
        <LoadingIndicator />
      ) : error ? (
        <p className="error-message">{error}</p>
      ) : books ? (
        <>
          <BookList books={books} />
          <LoadMoreButton onLoadMore={handleLoadMore} />
        </>
      ) : null}
    </AppContainer>
  );
}

export default App;
