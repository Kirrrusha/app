import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getArticle} from '../modules/actions';
import Article from '../pages/Article';

class ArticleContainer extends Component {
  componentDidMount() {
    const {id} = this.props;
    this.props.onGetArticle(id);
  }

  render() {
    const {article: {data}} = this.props;
    return <Article data={data} />
  }
}

const mapStateToProps = state => ({
  article: state.article,
});

const mapDispatchToProps = dispatch => ({
  onGetArticle: (params) => dispatch(getArticle(params)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ArticleContainer);
