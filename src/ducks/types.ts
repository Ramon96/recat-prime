import * as i from 'types';
export * from './data/types';
export * from './favorites/types';

export type ReduxState = {
  data: i.DataState;
  favorites: i.FavoriteState;
};
