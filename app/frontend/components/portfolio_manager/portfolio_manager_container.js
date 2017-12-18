import { connect } from "react-redux";
import PortfolioManager from "./portfolio_manager";
import { fetchPortfolio } from "../../actions/entities_actions";

const mapStateToProps = state => {
  return {
    portfolio: state.entities.portfolio,
    errors: state.errors.entities
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchPortfolio: () => dispatch(fetchPortfolio())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PortfolioManager);
