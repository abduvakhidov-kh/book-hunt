import { useState, useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { searchBooks, loadMoreBooks, setLastSearch } from './redux/actions';
import SearchInput from './components/SearchInput';
import CategorySelect from './components/CategorySelect';
import SortingSelect from './components/SortingSelect';
import BookList from './components/BookList';
import { useAppSelector } from './store';
import type {} from 'redux-thunk/extend-redux';
import debounce from 'lodash/debounce';
import LoadingSkeleton from './components/LoadingSkeleton';
import { Button } from './components/styles/LoadMoreButton.styled';
import { AppContainer, Title, SectionContainer, ErrorMessage, EmptySearchMessage } from './App.styled';

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

  const handleSearch = useCallback(() => {
    if (searchTerm.trim() === '') {
      dispatch({
        type: 'SET_ERROR',
        payload: 'Пожалуйста введите название книги в адрес поиска',
      });
    } else {
      dispatch(setLastSearch(searchTerm));
      debouncedSearch(searchTerm, selectedCategory, sorting);
    }
    
  }, [searchTerm, selectedCategory, sorting]);

  const handleLoadMore = () => {
    dispatch(loadMoreBooks(searchTerm));
  };

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
      ) : searchTerm && books.length > 0 ? (
        <>
          <BookList books={books} loading={loading} />
          {loadingMore ? (
            <LoadingSkeleton count={3} />
          ) : (
            <Button onClick={handleLoadMore} />
          )}
        </>
      ) : (
        <EmptySearchMessage>Книг не найдено</EmptySearchMessage>
      )}
    </AppContainer>
  );
}

export default App;
