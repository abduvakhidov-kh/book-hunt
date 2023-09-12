import { SelectOption } from "./types";

export const categories: SelectOption[] = [
  {
    value: 'all',
    title: 'Все категории',
  },
  {
    value: 'art',
    title: 'Искусство',
  },
  {
    value: 'biography',
    title: 'Биографии',
  },
  {
    value: 'computers',
    title: 'Компьютеры',
  },
  {
    value: 'history',
    title: 'История',
  },
  {
    value: 'medical',
    title: 'Медицина',
  },
  {
    value: 'poetry',
    title: 'Поэзия',
  },
];

export const sortingOptions: SelectOption[] = [
  {
    value: 'relevance',
    title: 'По релевантности',
  },
  {
    value: 'newest',
    title: 'По новизне',
  },
];

export const BASE_URL = 'https://www.googleapis.com/books/v1/volumes';
export const API_KEY = process.env.REACT_APP_API_KEY
