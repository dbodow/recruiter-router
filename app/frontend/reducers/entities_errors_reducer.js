import {
  RECEIVE_PORTFOLIO,
  RECEIVE_PORTFOLIO_ERRORS
} from '../actions/entities_actions';

export default (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_PORTFOLIO_ERRORS:
      return action.errors;
    case RECEIVE_PORTFOLIO:
      return [];
    default:
      return state;
  }
};
