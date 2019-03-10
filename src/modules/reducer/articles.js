import {FAIL, GET_ARTICLES, START, SUCCESS} from '../../utils/const';

const initialState = {
  data: null,
  loading: false,
  error: ''
};

export default (state = initialState, action) => {
  const {type, payload} = action;

  switch (type) {
    case GET_ARTICLES + START:
      return {
        ...state,
        error: '',
        loading: true
      };

    case GET_ARTICLES + SUCCESS:
      return {
        ...state,
        error: '',
        loading: false,
        data: payload
      };

    case GET_ARTICLES + FAIL:
      return {
        ...state,
        loading: false,
        data: payload
      };

    default:
      return initialState;
  }
}
