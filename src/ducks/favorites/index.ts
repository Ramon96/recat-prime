/**
 * This is an example file from react-prime
 */
import * as i from 'types';
import { ActionType, action } from 'typesafe-actions';


export const dataActions = {
  add: (fact: string) => action('data/ADD', fact),
  remove: (fact: string) => action('data/REMOVE', fact),
  get: () => action('data/GET'),
} as const; // <-- Important if you don't want to explicitly type the return type of all actions

const initialState: i.FavoriteState = {
  favorites: []
};

export const addFavorite: any = (fact: string) => {
  return (dispatch: any) => {
    dispatch(dataActions.add(fact));
  };
};
export const removeFavorite: any = (fact: string) => {
  return (dispatch: any) => {
    dispatch(dataActions.remove(fact));
  };
};
export const getFavorite: any = () => {
  return (dispatch: any) => {
    dispatch(dataActions.get());
  };
};

export default (state = initialState, action: ActionType<typeof dataActions>): i.FavoriteState => {
  switch (action.type) {
    case 'data/ADD':
      // only add if the fact is not already in the favorites.
      if(state.favorites?.indexOf(action.payload) === -1){
        return {
          ...state,
          favorites: [...state.favorites, action.payload],
        };
      }
    return {...state}
    case 'data/REMOVE':
        return {
          ...state,
          favorites: state.favorites?.filter(item => item !== action.payload)
        }
      case 'data/GET':
        return{
          ...state,
        }
    default:
      return state;
  }
};


