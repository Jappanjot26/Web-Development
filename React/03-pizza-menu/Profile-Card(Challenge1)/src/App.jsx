import "./styles.css";

export default function App() {
  return (
    <div className="app">
      <Card
        img="profile.jpg"
        name="Jonas Schmedtmann"
        description="Full-stack web developer and teacher at Udemy. When not coding or preparing a course, I like to play board games, to cook (and eat), or to just enjoy the Portuguese sun at the beach."
        skillsList={[
          { name: "HTML + CSS", emoji: "💪", bgColor: "blue" },
          { name: "JavaScript", emoji: "💪", bgColor: "yellow" },
          { name: "React", emoji: "💪", bgColor: "green" },
          { name: "Node.js", emoji: "💪", bgColor: "red" },
        ]}
      />
    </div>
  );
}

function Card(props) {
  return (
    <div className="card">
      <img src={props.img} alt="Profile photo" />
      <h2>{props.name}</h2>
      <h4>{props.description}</h4>
      <SkillsList list={props.skillsList} />
    </div>
  );
}

function SkillsList(props) {
  return (
    <div className="skill-list">
      {props.list.map((skill) => {
        return (
          <Skill
            name={skill.name}
            emoji={skill.emoji}
            bgColor={skill.bgColor}
          />
        );
      })}
    </div>
  );
}

function Skill(props) {
  const style = { backgroundColor: props.bgColor };
  return (
    <div className="skill" style={style}>
      <h3>
        {props.name}&nbsp;
        {props.emoji}
      </h3>
    </div>
  );
}
