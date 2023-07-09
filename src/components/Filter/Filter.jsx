import classes from "./Filter.module.css";
import PropTypes from "prop-types";

Filter.propTypes = {
  children: PropTypes.node,
  onChangeFilter: PropTypes.func.isRequired,
  filterType: PropTypes.string.isRequired,
};

function Filter({ children, onChangeFilter, filterType }) {
  return (
    <button
      onClick={() => onChangeFilter(filterType)}
      className={`${classes.filter} `}
    >
      {children}
    </button>
  );
}
export default Filter;
