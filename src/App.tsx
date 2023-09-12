import { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import SearchInput from './components/SearchInput';
import BookList from './components/BookList';
import { useAppSelector } from './store';
import type {} from 'redux-thunk/extend-redux';
import debounce from 'lodash/debounce';
import LoadingSkeleton from './components/LoadingSkeleton';
import { Button } from './components/styles/LoadMoreButton.styled';
import { AppContainer, Title, SectionContainer, ErrorMessage, EmptySearchMessage } from './App.styled';
import { setLastSearch } from './redux/getLastSearch';
import { loadMoreBooks } from './redux/loadMoreBooks';
import { searchBooks } from './redux/searchBooks';
import Select from './components/Select';
import { categories, sortingOptions } from './constants';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sorting, setSorting] = useState('relevance');
  const dispatch = useDispatch();
  const books = useAppSelector((state) => state.books);
  const error = useAppSelector((state) => state.error);
  const loading = useAppSelector((state) => state.loading);
  const loadingMore = useAppSelector((state) => state.loadingMore);

  const debouncedSearch = debounce(
      (searchTerm: string, category: string, sorting: string) => {
        dispatch(searchBooks(searchTerm, category, sorting));
      }, 300)

  const handleSearch = useCallback(() => {
    dispatch(setLastSearch(searchTerm));
    debouncedSearch(searchTerm, selectedCategory, sorting);
  }, [searchTerm, selectedCategory, sorting]);

  const handleLoadMore = () => {
    dispatch(loadMoreBooks(searchTerm));
  };

  const getContent = () => {
    if (loading) return <LoadingSkeleton count={4} />

    if(error) return <ErrorMessage>{error}</ErrorMessage>

    if(searchTerm && books.length > 0) {
      return (
        <>
          <BookList books={books} />
          {loadingMore ? (
            <LoadingSkeleton count={3} />
          ) : (
            <Button onClick={handleLoadMore} />
          )}
        </>
      )
    }

    return <EmptySearchMessage>Введите название книги в адрес поиска</EmptySearchMessage>
  }
 
  return (
    <AppContainer>
      <Title>Поиск книг</Title>

      <SearchInput
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        handleSearch={handleSearch}
      />
      <SectionContainer>
        <Select
          selected={selectedCategory}
          setSelected={setSelectedCategory}
          options={categories}
        />
        <Select selected={sorting} setSelected={setSorting} options={sortingOptions} />
      </SectionContainer>
      {getContent()}
    </AppContainer>
  );
}

export default App;
