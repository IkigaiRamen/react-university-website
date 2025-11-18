import React from 'react';
import './FaqAccordion.css';
import Accordion from 'react-bootstrap/Accordion';

function FaqAccordion() {
  const faqs = [
    {
      question: "Quels cours propose WELDERCOM ?",
      answer: "WELDERCOM propose divers cours de soudure tels que MIG, TIG et à l'arc. Nous offrons également des programmes de certification pour débutants et professionnels."
    },
    {
      question: "Où se situe WELDERCOM ?",
      answer: "Notre école de soudure est située au 14 Rue de Pologne, Bab Saadoun, Tunis, facilement accessible en transport en commun."
    },
    {
      question: "Recevrai-je une certification après la formation ?",
      answer: "Oui, tous nos cours sont accompagnés d'une certification officielle reconnue dans le secteur après réussite de la formation."
    },
    {
      question: "Quels sont les horaires des cours ?",
      answer: "Nous proposons des horaires flexibles : matin, après-midi et week-end afin de répondre aux besoins de chacun."
    },
    {
      question: "Comment puis-je m'inscrire à un cours ?",
      answer: "Vous pouvez vous inscrire directement sur notre site web à l'adresse weldercom.net ou nous contacter par téléphone pour plus d'assistance."
    }
  ];

  return (
    <div className='faq-section'>
      <div className='container d-flex flex-column align-items-center'>
        <h2 className='text-center text-capitalize mb-5'>Questions fréquemment posées</h2>
        <p className='text-center mb-5'>
          Voici quelques questions courantes sur nos cours et services de soudure. 
          Si vous avez d'autres questions, n'hésitez pas à nous contacter directement.
        </p>
        <Accordion defaultActiveKey="0" flush>
          {faqs.map((faq, index) => (
            <Accordion.Item key={index} eventKey={index.toString()}>
              <Accordion.Header>{faq.question}</Accordion.Header>
              <Accordion.Body>{faq.answer}</Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </div>
    </div>
  );
}

export default FaqAccordion;
