import { connect } from 'react-redux';

// TODO Update with ajax thunk actions when completed
import { receivePortfolio, receiveErrors } from
  '../../actions/entities_actions';
import PortfolioBuilder from
  './portfolio_builder';


const mapStateToProps = (state) => {
  return {
    entities: state.entities,
    errors: state.errors.entities
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    receivePortfolio,
    receiveErrors
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PortfolioBuilder);
