import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Tab from "./components/Tab";
import Content from "./components/Content";
import Img from "./components/Img";

function App() {
  const [activeTab, setActiveTab] = useState(1);

  const tabs = [
    { id: 1, name: "Tab 1" },
    { id: 2, name: "Tab 2" },
    { id: 3, name: "Tab 3" },
    { id: 4, name: "Tab 4" },
    { id: 5, name: "Tab 5" },
  ];

  const content = {
    1: { Component: Content, props: { text: "I am a ninja!" } },
    2: { Component: Content, props: { text: "Will is my sensei." } },
    3: {
      Component: Content,
      props: { text: "I'm gonna make React my bitch!" },
    },
    4: { Component: Content, props: { text: "I'm not getting this :(" } },
    5: { Component: Img, props: {} },
  };

  const ActiveContent = content[activeTab];

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          {tabs.map(({ name, id }) => (
            <Tab
              key={id}
              name={name}
              isActive={activeTab === id}
              setActiveTab={() => setActiveTab(id)}
            />
          ))}
        </div>
      </div>
      <div className="row">
        <div className="col">
          {/* <Content text={content[activeTab]} /> */}
          <ActiveContent.Component {...ActiveContent.props} />
        </div>
      </div>
    </div>
  );
}

export default App;
