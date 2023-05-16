import styled from "styled-components";

export const ContactStyles = styled.div`
  &.contact-me {
    background-color: var(--white);
    padding: 32px;
    box-sizing: border-box;
    max-width: 100vw;
  }
  .contact-me__info {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 8px;
  }
  .contact-me__info__label {
    margin-right: 8px;
    font-size: 17px;
  }
`;
