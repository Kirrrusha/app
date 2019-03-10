import {Route} from 'react-router-dom';
import React from 'react';
import ArticleContainer from '../../containers/ArticleContainer';

function ArticlePage() {
    return <Route path="/article/:id" render={getArticle}/>
}

function getArticle({match}) {
  return <ArticleContainer id={match.params.id} />
}

export default ArticlePage;
