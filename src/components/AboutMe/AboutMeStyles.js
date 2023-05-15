import styled from "styled-components";

export const AboutMeStyles = styled.div`
  &.about-me__container {
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(https://imageio.forbes.com/blogs-images/laurencebradford/files/2017/02/communication-1200x794.jpeg?format=jpg&width=1200);
    height: 100vh;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .about-me {
    height: 528px;
    display: flex;
  }
  @media (max-width: 768px) {
    &.about-me__container {
      height: auto;
    }
    .about-me {
      flex-direction: column;
      width: 320px;
      height: auto;
    }
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
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    background-color: var(--dark-pink);
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
  @media (max-width: 768px) {
    &.about-me-one {
      flex-direction: column;
      width: inherit;
      height: auto;
    }
    .about-me-one__about-me {
      padding: 32px;
      box-sizing: border-box;
    }
  }
`;

export const AboutMeTwoStyles = styled.div`
  &.about-me-two {
    width: 400px;
    height: inherit;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 32px;
    box-sizing: border-box;
    background-color: rgba(255, 255, 255, 0.4);
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
      width: inherit;
      height: auto;
    }
    .about-me-two__title {
      font-size: 40px;
      margin: 16px 0;
    }
    .about-me-two__cv {
      margin: 8px 0;
    }
    .about-me-two__paragraph {
      margin-top: 16px;
    }
  }
`;
