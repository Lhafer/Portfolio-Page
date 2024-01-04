import { Component, useState } from "react";
import { Banner } from "./Banner";
import { Projects } from "./Projects.jsx";
import { TopBar } from "./TopBar.jsx";
import { Contact } from "./Contact.jsx";
var learning = false;
export default function App() {
  const [learning, setLearning] = useState(false);

  const updateLearning = () => {
    setLearning(!learning);
  };
  return (
    <>
      <TopBar learning={learning} />
      <Banner updateLearning={updateLearning} />
      <Projects />
      <Contact />
      <div className="box"></div>
    </>
  );
}
