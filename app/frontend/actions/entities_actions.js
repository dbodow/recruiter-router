import * as portfolioApiUtil from "../util/portfolio-manager_api_util";
export const RECEIVE_PORTFOLIO = "RECEIVE_PORTFOLIO";
export const RECEIVE_PORTFOLIO_ERRORS = "RECEIVE_PORTFOLIO_ERRORS";

export const createAnalyticsObj = (companyName, tagName) => dispatch =>
  portfolioApiUtil
    .createAnalyticsObj(companyName, tagName)
    .then(portfolio => dispatch(receivePortfolio(portfolio)))
    .fail(errors => dispatch(receiveErrors(errors.responseJSON)));

export const fetchPortfolio = () => dispatch =>
  portfolioApiUtil
    .fetchPortfolio()
    .then(portfolio => dispatch(receivePortfolio(portfolio)))
    .fail(errors => dispatch(receiveErrors(errors.responseJSON)));

export const createTag = tagName => dispatch =>
  portfolioApiUtil
    .createTag(tagName)
    .then(portfolio => dispatch(receivePortfolio(portfolio)))
    .fail(errors => dispatch(receiveErrors(errors.responseJSON)));

export const deleteTag = tagName => dispatch =>
  portfolioApiUtil
    .deleteTag(tagName)
    .then(portfolio => dispatch(receivePortfolio(portfolio)))
    .fail(errors => dispatch(receiveErrors(errors.responseJSON)));

export const updatePortfolio = (portfolioSection, sectionName, tagName) =>
  dispatch =>
    portfolioApiUtil
      .updatePortfolio(portfolioSection, sectionName, tagName)
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
