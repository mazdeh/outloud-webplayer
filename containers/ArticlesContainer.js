import React, { Component } from 'react';
import { connect } from 'react-redux';

import ArticleCard from '../components/ArticleCard';

class ArticlesContainer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { readArticles } = this.props;
    return (
      <span>
      {
        readArticles.map((article, key) => {
          return <ArticleCard key={key} article={article} />
        })
      }
      </span>
    )
  }
}

function mapStateToProps(state) {
  const { readArticles } = state.articles;
  return {
    readArticles
  }
}

export default connect(mapStateToProps)(ArticlesContainer);
