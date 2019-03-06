import {FAIL, GET_ARTICLE, START, SUCCESS} from '../../utils/const';

const initialState = {
  data: null,
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
        data: payload
      };

    case GET_ARTICLE + FAIL:
      return {
        ...state,
        loading: false,
        data: payload
      };
  }
}
