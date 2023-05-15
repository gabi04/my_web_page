import styled from "styled-components";

export const AboutMeStyles = styled.div`
  display: grid;
  grid-template-areas: "about-me-bg--one about-me-bg--two";
  grid-template-columns: 1fr 2fr;
  height: 100vh;
  .about-me__bg--one {
    grid-area: about-me-bg--one;
    background-color: var(--pink);
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
    height: 528px;
  }
`;

export const AboutMeOneStyles = styled.div`
  &.about-me-one {
    width: 375px;
    height: inherit;
    display: grid;
    grid-template-rows: 1fr 53px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
  .about-me-one__about-me {
    background-color: var(--pink-two);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
  }
  .about-me-one__about-me__photo {
    width: 205px;
    height: 205px;
    border-radius: 100%;
  }
  .about-me-one__about-me__hr {
    width: 50px;
    background-color: var(--blue);
    border: 1px solid var(--blue);
    margin-bottom: 25px;
  }
  .about-me-one__about-me__role {
    letter-spacing: 0.25em;
    font-size: 17px;
    color: var(--grey);
    font-family: sans-serif;
  }
  .about-me-one__social-media {
    background-color: var(--white);
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
  .about-me-one__social-media__svg {
    height: 40px;
    width: 40px;
  }
`;

export const AboutMeTwoStyles = styled.div`
  &.about-me-two {
    padding: 32px;
    box-sizing: border-box;
    width: 400px;
    height: inherit;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .about-me-two__title {
    font-size: 80px;
    margin: 0;
  }
  .about-me-two__cv {
    padding: 4px 8px;
    border-radius: 16px;
    text-decoration: none;
    font-weight: 500;
    display: block;
    width: fit-content;
    margin: 4px 0;
  }
  .about-me-two__cv--spanish {
    border: 1px solid var(--blue);
    background-color: var(--blue);
    color: var(--white);
  }
  .about-me-two__cv--spanish:hover {
    background-color: var(--white);
    color: var(--black);
  }
  .about-me-two__cv--english {
    border: 1px solid var(--black);
    background-color: var(--white);
    color: var(--black);
  }
  .about-me-two__cv--english:hover {
    background-color: var(--blue);
    border-color: blue;
    color: var(--white);
  }
  .about-me-two__paragraph {
    line-height: 1.5em;
    font-size: 17px;
    text-align: justify;
    color: var(--grey);
    margin: 0;
  }
`;
