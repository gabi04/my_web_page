import styled from "styled-components";

export const AppStyles = styled.div`
  display: grid;
  grid-template-areas: "about-me-bg--one about-me-bg--two";
  grid-template-columns: 1fr 2fr;
  height: 100vh;
  .about-me__bg--one {
    grid-area: about-me-bg--one;
    background-color: #e6dace;
  }
  .about-me__bg--two {
    grid-area: about-me-bg--two;
  }
  .about-me {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    display: grid;
    grid-template-areas: "about-me--one about-me--two";
  }
  .about-me--one {
    background-color: #f4ece6;
    width: 375px;
    height: 529px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
  }

  .about-me--one__photo {
    width: 205px;
    height: 205px;
    border-radius: 100%;
  }

  .about-me__hr {
    width: 50px;
    background-color: #3078fe;
    border: 1px solid #3078fe;
    margin-bottom: 25px;
  }

  .about-me__role {
    letter-spacing: 0.25em;
    font-size: 17px;
    color: rgb(100, 102, 101);
    font-family: sans-serif;
  }
`;
