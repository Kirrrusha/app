import {FAIL, GET_AUTHOR, START, SUCCESS} from '../../utils/const';

const initialState = {
  data: null,
  loading: false,
  error: ''
};

export default (state = initialState, action) => {
  const {type, payload} = action;

  switch (type) {
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
        data: payload
      };

    case GET_AUTHOR + FAIL:
      return {
        ...state,
        loading: false,
        data: payload
      };
  }
}
