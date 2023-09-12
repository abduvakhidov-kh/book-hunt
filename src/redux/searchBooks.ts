import axios from "axios";
import { Dispatch } from "react";
import { ThunkAction } from "redux-thunk";
import { RootState } from "../store";
import { AppAction } from "../types";
import { SET_LOADING, SEARCH_BOOKS, SET_ERROR, API_KEY, BASE_URL } from "./actions";

export const searchBooks = (
  query: string,
  category: string,
  sorting: string
): ThunkAction<void, RootState, null, AppAction> => {
  return async (dispatch: Dispatch<AppAction>) => {
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
      dispatch({ type: SET_ERROR, payload: 'Error fetching data from API' });
    } finally {
      dispatch({ type: SET_LOADING, payload: false });
    }
  };
};