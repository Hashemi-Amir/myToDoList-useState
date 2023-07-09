import Filters from "../Filters/Filters";
import ListItem from "../ListItem/ListItem";
import classes from "./Lists.module.css";
import PropTypes from "prop-types";

Lists.propTypes = {
  toDos: PropTypes.array.isRequired,
  onDeleteToDo: PropTypes.func.isRequired,
  onChangeStatus: PropTypes.func.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};

function Lists({ toDos, onDeleteToDo, onChangeStatus, onChangeFilter }) {
  return (
    <div className={classes.lists}>
      <Filters onChangeFilter={onChangeFilter}></Filters>
      <ul>
        {toDos.map((toDo) => (
          <ListItem
            onDeleteToDo={onDeleteToDo}
            onChangeStatus={onChangeStatus}
            toDo={toDo}
            key={toDo.id}
          >
            {toDo.task}
          </ListItem>
        ))}
      </ul>
    </div>
  );
}

export default Lists;
