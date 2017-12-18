import { connect } from 'react-redux';

import { fetchPortfolio, createTag, deleteTag, updatePortfolio } from
  '../../actions/entities_actions';
import PortfolioBuilder from
  './portfolio_builder';


const mapStateToProps = (state) => {
  return {
    portfolio: state.entities.portfolio,
    errors: state.errors.entities
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPortfolio: () => dispatch(fetchPortfolio()),
    createTag: tagName => dispatch(createTag(tagName)),
    deleteTag: tagName => dispatch(deleteTag(tagName)),
    updatePortfolio: (portfolioSection, sectionName, tagName) =>
      dispatch(updatePortfolio(portfolioSection, sectionName, tagName))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PortfolioBuilder);
