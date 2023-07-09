import Filter from "../Filter/Filter";
import clasess from "./Filters.module.css";
import PropTypes from "prop-types";

Filters.propTypes = {
  onChangeFilter: PropTypes.func.isRequired,
};

function Filters({ onChangeFilter }) {
  return (
    <div className={clasess.filters}>
      <Filter filterType="progress" onChangeFilter={onChangeFilter}>
        In progress todos
      </Filter>
      <Filter filterType="done" onChangeFilter={onChangeFilter}>
        Done todos
      </Filter>
    </div>
  );
}

export default Filters;
