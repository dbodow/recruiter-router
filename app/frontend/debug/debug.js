import * as portfolioApiUtil from "../util/portfolio_api_util";
import { login, register, logout } from "../actions/session_actions";

const debugMode = store => {
  window.getState = store.getState;
  window.dispatch = store.dispatch;

  window.login = login;
  window.register = register;
  window.logout = logout;

  window.fetchPortfolioApi = portfolioApiUtil.fetchPortfolio;
};

export default debugMode;
