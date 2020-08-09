import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Form from "./components/Form";
import List from "./components/List";

function App() {
  const [activities, setActivites] = useState([]);

  const addActivity = (activity) => {
    setActivites((prev) => {
      let newActivity = {
        title: activity,
        isCompleted: false,
      };
      return [...prev, newActivity];
    });
  };

  const deleteActivity = (id) => {
    setActivites((prev) => {
      return [...prev.slice(0, id), ...prev.slice(id + 1, prev.length)];
    });
    console.log(activities);
  };

  const doneActivity = (id) => {
    setActivites((prev) => {
      const tempIsComplete = !prev[id].isCompleted;
      const activity = { ...prev[id], isCompleted: tempIsComplete };
      return [
        ...prev.slice(0, id),
        activity,
        ...prev.slice(id + 1, prev.length),
      ];

      // const activities = [...prev];
      // activities[id] = {
      //   ...activities[id],
      //   isCompleted: !activities[id].isCompleted,
      // };
      // return activities;
    });
    console.log(activities);
  };

  return (
    <>
      <div className="container w-75">
        <div className="row">
          <div className="col">
            <h1>To-do list</h1>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <Form addActivity={addActivity} />
          </div>
          <div className="col">
            <List
              activities={activities}
              deleteActivity={deleteActivity}
              doneActivity={doneActivity}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
