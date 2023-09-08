import axios from 'axios';
import { Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '../store';

const API_KEY = 'AIzaSyBPwB8cB4mFSqjKa0HPKTErg8e2gUbyVnc';
const BASE_URL = 'https://www.googleapis.com/books/v1/volumes';

export const SEARCH_BOOKS = 'SEARCH_BOOKS';
export const LOAD_MORE_BOOKS = 'LOAD_MORE_BOOKS';
export const SET_ERROR = 'SET_ERROR';
export const SET_LOADING = 'SET_LOADING';
export const SET_LAST_SEARCH = 'SET_LAST_SEARCH';
export const SET_LOADING_MORE = 'SET_LOADING_MORE';

interface SetLastSearch {
  type: typeof SET_LAST_SEARCH,
  payload: string,
}

interface SearchBooksAction {
  type: typeof SEARCH_BOOKS;
  payload: Book[];
}

interface LoadMoreBooksAction {
  type: typeof LOAD_MORE_BOOKS;
  payload: Book[];
}

interface SetErrorAction {
  type: typeof SET_ERROR;
  payload: string;
}

interface SetLoadingAction {
  type: typeof SET_LOADING;
  payload: boolean;
}

interface SetLoadingMore {
  type: typeof SET_LOADING_MORE;
  payload: boolean;
}

export type AppAction =
  | SearchBooksAction
  | LoadMoreBooksAction
  | SetErrorAction
  | SetLoadingAction
  | SetLastSearch
  | SetLoadingMore;

export interface Book {
  id: string;
  volumeInfo: {
    title: string;
    imageLinks?: {
      thumbnail: string;
    };
    categories?: string[];
    authors?: string[];
  };
}

export const setLastSearch = (query: string) => ({
  type: SET_LAST_SEARCH,
  payload: query,
});

export const searchBooks = (
  query: string,
  category: string,
  sorting: string
): ThunkAction<void, RootState, null, AppAction> => {
  return async (dispatch: Dispatch<AppAction>) => {
    dispatch({ type: SET_LOADING, payload: true });
    console.log(category);
    try {
      const response = await axios.get(BASE_URL, {
        params: {
          q: query,
          subject: category === 'all' ? undefined : category,
          orderBy: sorting,
          maxResults: 30,
          key: API_KEY,
        },
      });
      dispatch({ type: SEARCH_BOOKS, payload: response.data.items });
    } catch (error) {
      dispatch({ type: SET_ERROR, payload: 'Error fetching data from API' });
    } finally {
      dispatch({ type: SET_LOADING, payload: false });
    }
  };
};

export const loadMoreBooks = (
  searchTerm: string
): ThunkAction<void, RootState, null, AppAction> => {
  return async (dispatch: Dispatch<AppAction>, getState: () => RootState) => {
    const { currentPage, books } = getState().appState;
    const nextPage = currentPage + 1;
    dispatch({ type: SET_LOADING_MORE, payload: true });
    try {
      const response = await axios.get(BASE_URL, {
        params: {
          q: searchTerm,
          startIndex: nextPage * 30,
          maxResults: 30,
          key: API_KEY,
        },
      });
      const newBooks = response.data.items;

      dispatch({ type: LOAD_MORE_BOOKS, payload: [...books, ...newBooks] });
    } catch (error) {
      dispatch({ type: SET_ERROR, payload: 'Ошибка при загрузке данных с API' });
    } finally {
      dispatch({ type: SET_LOADING_MORE, payload: false });
    }
  };
};

