import { SET_LAST_SEARCH, SEARCH_BOOKS, LOAD_MORE_BOOKS, SET_ERROR, SET_LOADING, SET_LOADING_MORE } from "../redux/actions";

export interface Book {
  volumeInfo: {
    title: string;
    imageLinks?: {
      thumbnail: string;
    };
    categories?: string[];
    authors?: string[];
  };
}

export interface BookListProps {
  books: {
    id: string;
    volumeInfo: {
      title: string;
      imageLinks?: {
        thumbnail: string;
      };
      categories?: string[];
      authors?: string[];
    };
  }[];
  loading: boolean
}

export interface CategorySelectProps {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}

export interface SearchInputProps {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  handleSearch: () => void;
}

export interface SortingSelectProps {
  sorting: string;
  setSorting: (sorting: string) => void;
}

export interface SetLastSearch {
  type: typeof SET_LAST_SEARCH,
  payload: string,
}

export interface SearchBooksAction {
  type: typeof SEARCH_BOOKS;
  payload: Book[];
}

export interface LoadMoreBooksAction {
  type: typeof LOAD_MORE_BOOKS;
  payload: Book[];
}

export interface SetErrorAction {
  type: typeof SET_ERROR;
  payload: string;
}

export interface SetLoadingAction {
  type: typeof SET_LOADING;
  payload: boolean;
}

export interface SetLoadingMore {
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

export interface AppState {
  books: Book[];
  error: string | null;
  loading: boolean;
  currentPage: number;
  lastSearch: string;
  loadingMore: boolean,
}