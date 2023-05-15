const Skill = ({ children, experienceTime }) => (
  <div className="skills_technology">
    {children}
    <h1 className="skills_technology__years">{experienceTime}</h1>
  </div>
);

export default Skill;
