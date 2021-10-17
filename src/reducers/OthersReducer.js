import {
  OTHER_API,
  OTHER_API_SUCCESS,
  OTHER_API_FAIL,
} from '../actions/types';

const INITAL_STATE = {
  loading: false,
  message: '',
  all_caracters: []
};

export default (state = INITAL_STATE, action) => {
  switch (action.type) {


    case OTHER_API:
      return { ...state, loading: true, message: '' };

    case OTHER_API_SUCCESS:
      const data = action.payload.data;
      switch (action.payload.api) {
        case 'characters':
          return { ...state, loading: false, all_caracters: data };

        default:
          return state;
      }

    case OTHER_API_FAIL:
      return {
        ...state,
        loading: false,
        message: action.payload,

      };

    default:
      return state;
  }
};
