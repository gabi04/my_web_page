import styled from "styled-components";

export const AboutMeStyles = styled.div`
  &.about-me__container {
    display: grid;
    grid-template-areas: "about-me-container-one about-me-container-two";
    grid-template-columns: 1fr 2fr;
    height: 100vh;
    width: 100vw;
  }
  .about-me__container-one {
    grid-area: about-me-container-one;
    background-color: var(--pink);
  }
  .about-me__container-two {
    grid-area: about-me-container-two;
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

  @media (max-width: 768px) {
    &.about-me__container {
      display: block;
      width: auto;
      height: auto;
    }
    .about-me__container-one {
      height: 112px;
      background: var(--white);
    }
    .about-me__container-two {
      background-color: var(--pink);
    }
  }
`;

export const AboutMeOneStyles = styled.div`
  &.about-me-one {
    width: 375px;
    height: inherit;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    display: grid;
    grid-template-rows: 1fr 53px;
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
  @media (max-width: 768px) {
    &.about-me-one {
      width: 320px;
      position: absolute;
      top: 0;
      left: 50%;
      transform: translate(-50%, 0);
    }
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
    font-size: 48px;
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
    background-color: transparent;
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
  @media (max-width: 768px) {
    &.about-me-two {
      width: auto;
    }
    .about-me-two__title {
      font-size: 40px;
      margin-top: 312px;
      margin-bottom: 16px;
    }
    .about-me-two__cv {
      margin: 8px 0;
    }
    .about-me-two__paragraph {
      margin-top: 16px;
    }
  }
`;
