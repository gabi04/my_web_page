import { ContactStyles } from "./ContactStyles";

const ContactMe = () => (
  <ContactStyles className="contact-me">
    <h1 className="typography--title">Contacto</h1>
    <div className="contact-me__info">
      <b className="contact-me__info__label">E-mail:</b>
      <p className="typography--text">gsuarezc04@gmail.com</p>
    </div>
    <div className="contact-me__info">
      <b className="contact-me__info__label">Celular:</b>
      <p className="typography--text">3197615702</p>
    </div>
  </ContactStyles>
);

export default ContactMe;
