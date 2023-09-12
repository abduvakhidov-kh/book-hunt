import { SET_LAST_SEARCH } from "./actions";

export const setLastSearch = (query: string) => ({
  type: SET_LAST_SEARCH,
  payload: query,
});