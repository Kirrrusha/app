import {FAIL, GET_COMMENTS, START, SUCCESS} from '../../utils/const';

const initialState = {
  data: null,
  loading: false,
  error: ''
};

export default (state = initialState, action) => {
  const {type, payload} = action;

  switch (type) {
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
        data: payload
      };

    case GET_COMMENTS + FAIL:
      return {
        ...state,
        loading: false,
        data: payload
      };
  }
}
