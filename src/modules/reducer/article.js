import {FAIL, GET_ARTICLE, GET_AUTHOR, GET_COMMENTS, START, SUCCESS} from '../../utils/const';

const initialState = {
  data: {
    article: null,
    comments: null,
    author: null
  },
  loading: false,
  error: ''
};

export default (state = initialState, action) => {
  const {type, payload} = action;

  switch (type) {
    case GET_ARTICLE + START:
      return {
        ...state,
        error: '',
        loading: true
      };

    case GET_ARTICLE + SUCCESS:
      return {
        ...state,
        error: '',
        loading: false,
        data: {
          ...state.data,
          article: payload
        }
      };

    case GET_ARTICLE + FAIL:
      return {
        ...state,
        loading: false,
        data: {
          article: payload,
          comments: null,
          author: null
        }
      };

    case GET_COMMENTS + START:
      return {
        ...state,
        error: '',
        loading: true
      };

    case GET_COMMENTS + SUCCESS:
      return {
        ...state,
        error: '',
        loading: false,
        data: {
          ...state.data,
          comments: payload
        }
      };

    case GET_COMMENTS + FAIL:
      return {
        ...state,
        loading: false,
        data: {
          ...state.data,
          comments: payload
        }
      };

    case GET_AUTHOR + START:
      return {
        ...state,
        error: '',
        loading: true
      };

    case GET_AUTHOR + SUCCESS:
      return {
        ...state,
        error: '',
        loading: false,
        data: {
          ...state.data,
          author: payload
        }
      };

    case GET_AUTHOR + FAIL:
      return {
        ...state,
        loading: false,
        data: {
          ...state.data,
          author: payload
        }
      };

    default:
      return initialState;
  }
}
