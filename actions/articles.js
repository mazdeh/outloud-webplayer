import * as types from '../constants/actionTypes';

function _setArticles(articles) {
  return {
    type: types.SET_ARTICLES,
    articles
  };
}

export function fetchArticles() {
  return function (dispatch) {
    fetch('http://www.outloud.io:8080/api/feed')
      .then((response) => response.json())
      .then((articles) => {
        dispatch(_setArticles(articles))
      })
  }
}
