import styled from "styled-components";

export const SkillsStyles = styled.div`
  &.skills {
    width: 100vw;
    min-height: 100vh;
    height: auto;
    padding: 64px;
    box-sizing: border-box;
    background-color: var(--dark-pink);
  }
  .skill__title {
    margin: 0;
    margin-bottom: 64px;
    text-align: center;
    font-size: 48px;
  }
  .skills_grid {
    display: flex;
    width: 70%;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0 auto;
  }
  .skills_technology {
    width: 240px;
    height: 360px;
    display: grid;
    grid-template-rows: 1fr 70px;
    margin: 16px;
  }
  .skills_technology__svg {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .skills_technology__years {
    font-size: 48px;
    text-align: center;
    color: var(--grey);
  }
  @media (max-width: 768px) {
    &.skills {
      padding: 32px;
    }
    .skill__title {
      font-size: 40px;
      margin-bottom: 32px;
    }
    .skills_grid {
      width: 100%;
      justify-content: space-between;
    }
    .skills_technology__years {
      font-size: 32px;
    }
  }
`;
