import merge from "lodash/merge";

import { RECEIVE_PORTFOLIO } from "../actions/entities_actions";

const _nullEntities = Object.freeze({
  entities: {
    portfolio: null
  }
});

const entitiesReducer = (state = _nullEntities, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_PORTFOLIO:
      const portfolio = action.portfolio;
      return merge({}, portfolio);
    default:
      return state;
  }
};

export default entitiesReducer;
