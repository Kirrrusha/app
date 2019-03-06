import {GET_ARTICLE, GET_ARTICLES, GET_AUTHOR, GET_COMMENTS, START} from '../../utils/const';
import axios from 'axios';
import {API} from '../../utils/default';

export function getArticles() {
  return (dispatch) => {
    dispatch({
      type: GET_ARTICLES + START
    })

    axios.get(API)
      .then(res => {
        console.log(res);
      })
      .catch(res => console.log(res));
  }
}

export function getArticle(postId) {
  return (dispatch) => {
    dispatch({
      type: GET_ARTICLE + START
    })

    axios.get(`${API}/${postId}`)
      .then(res => {
        console.log(res);
      })
      .catch(res => console.log(res));
  }
}

export function getComments(postId) {
  return (dispatch) => {
    dispatch({
      type: GET_COMMENTS + START
    })

    axios.get(`${API}/${postId}/comments`)
      .then(res => {
        console.log(res);
      })
      .catch(res => console.log(res));
  }
}

export function getAuthor(userId) {
  return (dispatch) => {
    dispatch({
      type: GET_AUTHOR + START
    })

    axios.get(`${API}/users/${userId}`)
      .then(res => {
        console.log(res);
      })
      .catch(res => console.log(res));
  }
}
