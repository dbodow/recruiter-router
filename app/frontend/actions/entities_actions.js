import * as portfolioApiUtil from "../util/portfolio-manager_api_util";
export const RECEIVE_PORTFOLIO = "RECEIVE_PORTFOLIO";
export const RECEIVE_PORTFOLIO_ERRORS = "RECEIVE_PORTFOLIO_ERRORS";

export const fetchPortfolio = () => dispatch =>
  portfolioApiUtil
    .fetchPortfolio()
    .then(portfolio => dispatch(receivePortfolio(portfolio)))
    .fail(errors => dispatch(receiveErrors(errors.responseJSON)));

export const receivePortfolio = portfolio => ({
  type: RECEIVE_PORTFOLIO,
  portfolio
});

export const receiveErrors = errors => ({
  type: RECEIVE_PORTFOLIO_ERRORS,
  errors
});
