import * as types from '../constants/actionTypes';

const initialState = {
  readArticles: []
};

export default function(state = initialState, action) {
  switch(action.type) {
    case types.SET_ARTICLES:
      return Object.assign({}, state, {
        readArticles: action.articles
      });
  }
  return state;
}
