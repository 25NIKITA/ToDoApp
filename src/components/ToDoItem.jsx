function ToDoItem({ ToDoName, ToDoDate, onDeleteClick }) {
  return (
    <div className="container">
      <div className="row n-row">
        <div className="col-6">{ToDoName}</div>
        <div className="col-4">{ToDoDate}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger n-button"
            onClick={() => onDeleteClick(ToDoName)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
export default ToDoItem;
