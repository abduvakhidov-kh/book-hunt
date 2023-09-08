import { combineReducers } from 'redux';
import {
  AppAction,
  SEARCH_BOOKS,
  LOAD_MORE_BOOKS,
  SET_ERROR,
  SET_LOADING,
  Book,
  SET_LAST_SEARCH,
} from './actions';

interface AppState {
  books: Book[];
  error: string | null;
  loading: boolean;
  currentPage: number;
  lastSearch: string;
}

const initialState: AppState = {
  books: [],
  error: null,
  loading: false,
  currentPage: 1,
  lastSearch: ''
};

const appReducer = (state = initialState, action: AppAction): AppState => {
  switch (action.type) {
    case SEARCH_BOOKS:
      return {
        ...state,
        books: action.payload,
        error: null,
      };
      case SET_LAST_SEARCH:
        return {
          ...state,
          lastSearch: action.payload,
        };
    case LOAD_MORE_BOOKS:
      return {
        ...state,
        books: [...state.books, ...action.payload],
        currentPage: state.currentPage + 1,
        error: null,
      };
    case SET_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  appState: appReducer,
});

export default rootReducer;
