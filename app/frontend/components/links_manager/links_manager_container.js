import { connect } from 'react-redux';
import { createAnalyticsObj, fetchPortfolio } from
  '../../actions/entities_actions';
import LinksForm from './links_manager';


const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser,
    portfolio: state.entities.portfolio,
    errors: state.errors.entities
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPortfolio: () => dispatch(fetchPortfolio()),
    createAnalyticsObj: (companyName, tagName) =>
      dispatch(createAnalyticsObj(companyName, tagName))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LinksForm);
