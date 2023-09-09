import { useState, useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { searchBooks, loadMoreBooks, setLastSearch } from './redux/actions';
import SearchInput from './components/SearchInput';
import CategorySelect from './components/CategorySelect';
import SortingSelect from './components/SortingSelect';
import BookList from './components/BookList';
import LoadMoreButton from './components/LoadMoreButton';
import styled from 'styled-components';
import { useAppSelector } from './store';
import type {} from 'redux-thunk/extend-redux';
import debounce from 'lodash/debounce';
import LoadingSkeleton from './components/LoadingSkeleton';

const AppContainer = styled.div`
  font-family: Arial, sans-serif;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  padding: 20px;
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

const SectionContainer = styled.div`
  margin: 20px 0;
  display: flex;
  align-items: center;
  gap: 24px;
`;

const EmptySearchMessage = styled.p`
  color: #999;
  margin-top: 10px;
`;

function App() {
  const [searchTerm, setSearchTerm] = useState('Exapmle');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sorting, setSorting] = useState('relevance');
  const dispatch = useDispatch();
  const books = useAppSelector((state) => state.appState.books);
  const error = useAppSelector((state) => state.appState.error);
  const loading = useAppSelector((state) => state.appState.loading);
  const loadingMore = useAppSelector((state) => state.appState.loadingMore);

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
    if (searchTerm.trim() === '') {
      dispatch({
        type: 'SET_ERROR',
        payload: 'Пожалуйста введите название книги в адрес поиска',
      });
    } else {
      dispatch(setLastSearch(searchTerm));
      debouncedSearch(searchTerm, selectedCategory, sorting);
    }
    
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
      <SectionContainer>
        <CategorySelect
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          />
        <SortingSelect sorting={sorting} setSorting={setSorting} />
      </SectionContainer>
      {error ? (
        <ErrorMessage>{error}</ErrorMessage>
      ) : searchTerm && books && books.length > 0 ? (
        <>
          <BookList books={books} loading={loading} />
          {loadingMore ? (
            <LoadingSkeleton count={3} />
          ) : (
            <LoadMoreButton onLoadMore={handleLoadMore} />
          )}
        </>
      ) : (
        <EmptySearchMessage>Книг не найдено</EmptySearchMessage>
      )}
    </AppContainer>
  );
}

export default App;
