import ReactSvg from "../../svg/ReactSvg";
import JavaScriptSvg from "../../svg/JavaScriptSvg";
import { SkillsStyles } from "./SkillsStyles";
import TypeScriptSvg from "../../svg/TypeScriptSvg";
import HtmlSvg from "../../svg/HtmlSvg";
import CssSvg from "../../svg/CssSvg";
import JestSvg from "../../svg/JestSvg";
import Skill from "./Skill";

const Skills = () => (
  <SkillsStyles className="skills">
    <h1 className="skill__title">Mis habilidades</h1>
    <div className="skills_grid">
      <Skill experienceTime="4 años">
        <ReactSvg size={240} />
      </Skill>
      <Skill experienceTime="4 años">
        <JavaScriptSvg size={160} />
      </Skill>
      <Skill experienceTime="4 años">
        <HtmlSvg size={160} />
      </Skill>
      <Skill experienceTime="4 años">
        <CssSvg size={160} />
      </Skill>
      <Skill experienceTime="6 meses">
        <TypeScriptSvg size={160} />
      </Skill>
      <Skill experienceTime="6 meses">
        <JestSvg size={240} />
      </Skill>
    </div>
  </SkillsStyles>
);

export default Skills;
