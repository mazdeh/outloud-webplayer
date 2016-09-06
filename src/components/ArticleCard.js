import React, { Component } from 'react';

export default class ArticleCard extends Component {
  render() {
    const { title, author, source, plays, top_reading, url } = this.props.article;
    return (
      <p>
        <div>{title}</div>
        <div>{author}</div>
        <div>{source}</div>
        <br></br>
      </p>
    )
  }

}
