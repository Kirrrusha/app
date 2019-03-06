import {connect} from 'react-redux';
import Home from '../pages/home';

const mapStateToProps = state => ({
  // errorMsg: state.session.errorMsg,
});

const mapDispatchToProps = dispatch => ({
  // logIn: (params, cb) => dispatch(logIn(params, cb)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
