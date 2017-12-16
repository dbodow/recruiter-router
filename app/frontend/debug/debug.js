import * as portfolioApiUtil from "../util/portfolio-manager_api_util";
import { fetchPortfolio } from "../actions/entities_actions";
import { login, register, logout } from "../actions/session_actions";

const debugMode = store => {
  window.getState = store.getState;
  window.dispatch = store.dispatch;

  window.login = login;
  window.register = register;
  window.logout = logout;

  window.fetchPortfolioApi = portfolioApiUtil.fetchPortfolio;
  window.fetchPortfolio = fetchPortfolio;
};

export default debugMode;
