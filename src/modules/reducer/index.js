import {combineReducers} from 'redux';
import articles from './articles';
import article from './article';
import comments from './comments';
import author from './author';
export default combineReducers({
  articles,
  article,
  comments,
  author
})
