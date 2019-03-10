import {connect} from 'react-redux';
import Home from '../pages/home';
import {getArticles} from '../modules/actions';

const mapStateToProps = state => ({
  articles: state.articles,
});

const mapDispatchToProps = dispatch => ({
  getArticles: () => dispatch(getArticles()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
