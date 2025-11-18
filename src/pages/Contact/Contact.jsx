import React from "react";
import "./Contact.css";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import LondonLocationImg from "../../utils/images/London-location.jpg";
import ManchesterLocationImg from "../../utils/images/Manchester-location.jpg";
import LiverpoolLocationImg from "../../utils/images/Liverpool-location.jpg";

function Contact() {
  return (
    <div className="contact-page">
      <header className="height-75">
        <div className="container h-100 d-flex flex-column align-items-center justify-content-center text-light">
          <h1 className="text-center fw-semibold">Contactez WELDERCOM</h1>
          <p className="text-center w-75 mb-5">
            Pour toute information concernant nos formations 3G / 6G, les
            inscriptions, les stages professionnels ou les opportunités de
            recrutement, contactez-nous. Notre équipe vous répondra rapidement.
          </p>
        </div>
      </header>

      <div className="container my-5 d-flex justify-content-center">
        <Form id="contact-form">
          <Form.Group className="mb-3">
            <Form.Label>Nom complet</Form.Label>
            <Form.Control placeholder="Votre nom et prénom" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Votre email" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Numéro de téléphone</Form.Label>
            <Form.Control placeholder="+216 ..." />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Sujet</Form.Label>
            <Form.Control placeholder="Ex: Inscription, demande d’information..." />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Votre message</Form.Label>
            <Form.Control
              as="textarea"
              rows={4}
              placeholder="Écrivez votre message ici..."
            />
          </Form.Group>

          <Button variant="danger btn-lg" type="submit">
            Submit
          </Button>
        </Form>
      </div>

      <div className="bg-dark text-light p-5">
        <div className="container">
          <h2 className="text-center mb-5">Nos Coordonnées</h2>

          <div className="d-flex flex-column align-items-center">
            <h4>Centre WELDERCOM</h4>
            <p className="text-center">
              14 Rue de Pologne, Bab Saadoun, Tunis
              <br />
              Tél fixe : +216 36 147 547
              <br />
              Mobile : +216 58 108 576 — +216 99 500 004
              <br />
              Mobile : +216 28 187 810 — +216 94 191 717
              <br />
              Email : contact@weldercom.net
              <br />
              Site web : www.weldercom.net
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
