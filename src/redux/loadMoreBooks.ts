import axios from "axios";
import { ThunkAction } from "redux-thunk";
import { RootState } from "../store";
import { AppAction } from "../types";
import { SET_LOADING_MORE, LOAD_MORE_BOOKS, SET_ERROR } from "./actions";
import { BASE_URL, API_KEY } from "../constants";


export const loadMoreBooks = (
  searchTerm: string
): ThunkAction<void, RootState, null, AppAction> => {
  return async (dispatch, getState) => {
    const { currentPage, books } = getState();
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