const Skill = ({ children, experienceTime }) => (
  <div className="skills_technology">
    <div className="skills_technology__svg">{children}</div>
    <h1 className="skills_technology__years">{experienceTime}</h1>
  </div>
);

export default Skill;
