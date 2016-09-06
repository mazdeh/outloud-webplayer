import React, { Component } from 'react';
import { connect } from 'react-redux';

import ArticlesContainer from './ArticlesContainer';
import { fetchArticles } from '../actions/articles';

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchArticles());
  }

  render() {
    console.log('state: ', this.props);
    return (
      <span>
        <ArticlesContainer />
      </span>
    )
  }
};

function mapStateToProps(state) {
  return {
    state
  }
}

export default connect(mapStateToProps)(App);
