import axios from "axios";
import { Dispatch } from "react";
import { ThunkAction } from "redux-thunk";
import { RootState } from "../store";
import { AppAction } from "../types";
import { SET_LOADING, SEARCH_BOOKS, SET_ERROR } from "./actions";
import { BASE_URL, API_KEY } from "../constants";

export const searchBooks = (
  query: string,
  category: string,
  sorting: string
): ThunkAction<void, RootState, null, AppAction> => {
  return async (dispatch: Dispatch<AppAction>) => {  
    if (query === '') {
      dispatch({
        type: SET_ERROR,
        payload: 'Пожалуйста введите название книги в адрес поиска',
      });
      
      return
    }
    dispatch({ type: SET_LOADING, payload: true });
    
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
      dispatch({ type: SET_ERROR, payload: 'Ошибка при загрузке данных' });
    } finally {
      dispatch({ type: SET_LOADING, payload: false });
    }
  };
};