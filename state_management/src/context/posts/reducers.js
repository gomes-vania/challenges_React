import { combineReducers } from 'redux';

export const postsReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_POSTS':
      return action.payload;
    default:
      return state;
  }
}

export const rootReducer = combineReducers({
  posts: postsReducer,
});