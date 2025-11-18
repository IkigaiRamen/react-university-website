import React from 'react';
import './ChooseSection.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAward, faUsers, faMapLocationDot } from '@fortawesome/free-solid-svg-icons';
import { Card } from 'react-bootstrap';

function ChooseSection() {
  return (
    <div className='choose-section'>
      <div className="container">
        <h2 className='text-center mb-5'>Pourquoi choisir WELDERCOM ?</h2>
        <div className='row g-4'>
          <div className='col-lg-4'>
            <Card className='d-flex align-items-center border-0 h-100'>
              <div className='mt-3'>
                <FontAwesomeIcon icon={faAward} size="2x"/>
              </div>
              <Card.Body>
                <Card.Title className='text-center mb-3'>
                  Centre spécialisé en soudure 3G et 6G
                </Card.Title>
                <Card.Text className='text-center'>
                  🎉 WELDERCOM est le seul centre de formation spécialisé en soudure 3G et 6G au Canada et en Tunisie. Nos sessions combinent théorie et pratique pour un apprentissage complet. 👩‍🏭🤩👨‍🏭
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className='col-lg-4'>
            <Card className='d-flex align-items-center border-0 h-100'>
              <div className='mt-3'>
                <FontAwesomeIcon icon={faUsers} size="2x"/>
              </div>
              <Card.Body>
                <Card.Title className='text-center mb-3'>
                  Sessions pratiques et interactives
                </Card.Title>
                <Card.Text className='text-center'>
                  Nos formations incluent des exercices pratiques sur ARC, semi-automatique et TIG 🥢🦺, pour que chaque étudiant devienne opérationnel dès la fin de la session. 💯
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className='col-lg-4'>
            <Card className='d-flex align-items-center border-0 h-100'>
              <div className='mt-3'>
                <FontAwesomeIcon icon={faMapLocationDot} size="2x"/>
              </div>
              <Card.Body>
                <Card.Title className='text-center mb-3'>
                  Situé à Tunis
                </Card.Title>
                <Card.Text className='text-center'>
                  Retrouvez-nous au 14 Rue de Pologne, Bab Saadoun, Tunis 🇹🇳. Pour toute information ou inscription, contactez-nous : 📞 +216 36 147 547 / +216 58 108 576 / +216 99 500 004 / +216 28 187 810 / +216 94 191 717 ou par email : contact@weldercom.net 💻 www.weldercom.net
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChooseSection;
