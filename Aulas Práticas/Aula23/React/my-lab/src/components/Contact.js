import React from "react";

export default function Contact(props) {
  console.log(props);
  return (
    <div className="contact-card">
      <img
        src={props.img}"
        alt="imagem Mr Whiskerson"
      />
      <h3>{props.name}</h3>
      <div className="info-group">
        <img
          src="./images/phone-icon.png"
          alt="icone fone"
        />
        <p>(212) 555-1234</p>
      </div>
      <div className="info-group">
        <img
          src="./images/mail-icon.png"
          alt="icone mail"
        />
        <p>mr.whiskaz@catnap.meow</p>
      </div>
    </div>
  );
}