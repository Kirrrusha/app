import {FAIL, GET_ARTICLE, GET_ARTICLES, GET_AUTHOR, GET_COMMENTS, START, SUCCESS} from '../../utils/const';
import axios from 'axios';
import {API, defaultErrorMsg} from '../../utils/default';

export function getArticles() {
  return (dispatch) => {
    dispatch({
      type: GET_ARTICLES + START
    });

    axios.get(`${API}/posts`)
      .then(res => {
        dispatch({
          type: GET_ARTICLES + SUCCESS,
          payload: res.data
        });
      })
      .catch(res => {
        dispatch({
          type: GET_ARTICLES + FAIL,
          payload: {
            errorMsg: res.data.message || defaultErrorMsg,
          },
        });
      });
  };
}

export function getArticle(postId) {
  return (dispatch) => {
    dispatch({
      type: GET_ARTICLE + START
    });

    axios.get(`${API}/posts/${postId}`)
      .then(resPost => {
        dispatch({
          type: GET_ARTICLE + SUCCESS,
          payload: resPost.data
        });
        return resPost.data;
      })
      .then(res => {
        getComments(res.id, dispatch);
        getAuthor(res.userId, dispatch);
      })
      .catch(res => {
        dispatch({
          type: GET_ARTICLE + FAIL,
          payload: {
            errorMsg: res.data.message || defaultErrorMsg,
          },
        });
      });
  };
}

function getComments(postId, dispatch) {
  dispatch({
    type: GET_COMMENTS + START
  });
  axios.get(`${API}/posts/${postId}/comments`)
    .then(res => {
      dispatch({
        type: GET_COMMENTS + SUCCESS,
        payload: res.data.filter(comment => comment.postId === postId)
      });
    })
    .catch(res => {
      dispatch({
        type: GET_COMMENTS + FAIL,
        payload: {
          errorMsg: res.data.message || defaultErrorMsg,
        },
      });
    });
}

function getAuthor(userId, dispatch) {
  dispatch({
    type: GET_AUTHOR + START
  });

  axios.get(`${API}/users/${userId}`)
    .then(res => {
      dispatch({
        type: GET_AUTHOR + SUCCESS,
        payload: res.data
      });
    })
    .catch(res => {
      dispatch({
        type: GET_AUTHOR + FAIL,
        payload: {
          errorMsg: res.data.message || defaultErrorMsg,
        },
      });
    });
}
