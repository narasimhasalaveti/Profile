import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import skills from "./skills.js";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="virat.jpg" alt="profile pic" />;
}

function Intro() {
  return (
    <div>
      <h1>Narasimha Reddy</h1>
      <p>
        Front-end Developer and creating responsive web pages. When not coding
        or preparing a course, I like to play board games, to cook (and eat), or
        to just enjoy the Portuguese sun at the beach.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <Skill
          key={skill.skill}
          skill={skill?.skill}
          color={skill?.color}
          level={skill?.level}
        />
      ))}
    </div>
  );
}

function Skill({ skill, color, level }) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>
        {level === "beginner" && "👶"}
        {level === "intermediate" && "👍"}
        {level === "advanced" && "💪"}
      </span>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
