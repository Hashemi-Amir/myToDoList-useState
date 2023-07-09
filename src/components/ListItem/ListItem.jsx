import clasess from "./ListItem.module.css";
import { BsTrash } from "react-icons/bs";
import { AiOutlineCheckCircle } from "react-icons/ai";
import PropTypes from "prop-types";

ListItem.propTypes = {
  children: PropTypes.node,
  toDo: PropTypes.object.isRequired,
  onChangeStatus: PropTypes.func.isRequired,
  onDeleteToDo: PropTypes.func.isRequired,
};

function ListItem({ children, toDo, onChangeStatus, onDeleteToDo }) {
  const changeStatusHandler = () => {
    if (toDo.status === "done") return;
    onChangeStatus(toDo.id);
  };

  return (
    <li className={clasess.listItem}>
      {children}
      <div className={clasess.icons}>
        <BsTrash
          onClick={() => onDeleteToDo(toDo.id)}
          color="#FF6262"
          size={20}
        />
        <AiOutlineCheckCircle
          onClick={changeStatusHandler}
          color="#05FF00"
          size={20}
        />
      </div>
    </li>
  );
}

export default ListItem;
