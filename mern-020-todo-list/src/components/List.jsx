import React from "react";

const List = ({ activities, deleteActivity, doneActivity }) => {
  return (
    <div className="row">
      <div className="col">
        {activities.map((activity, id) => (
          <div className="card m-2" key={id}>
            <div className="card-body p-2">
              <span className={activity.isCompleted ? "completed" : ""}>
                {activity.title}
              </span>
              <span
                className="btn btn-danger float-right m-1"
                onClick={(e) => {
                  e.preventDefault();
                  deleteActivity(id);
                }}
              >
                Delete
              </span>
              <span
                className="btn btn-primary float-right m-1"
                onClick={(e) => {
                  e.preventDefault();
                  doneActivity(id);
                }}
              >
                Done
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;
