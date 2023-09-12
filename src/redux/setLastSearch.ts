import { SearchValues } from "../types";
import { SET_LAST_SEARCH } from "./actions";

export const setLastSearch = (searchValues: SearchValues) => ({
  type: SET_LAST_SEARCH,
  payload: searchValues,
});