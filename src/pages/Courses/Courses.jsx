import React from 'react';
import './Courses.css';
import { Card } from 'react-bootstrap';
import MigCourseImg from '../../utils/images/Mig.webp';
import TigCourseImg from '../../utils/images/Tig.webp';
import ArcCourseImg from '../../utils/images/Arc.jpg';
import SemiAutoCourseImg from '../../utils/images/Semi.jpg';
import FaqAccordion from '../../components/FaqAccordion/FaqAccordion';

const courses = [
    {
        id: 1,
        img: [MigCourseImg],
        title: 'Soudure MIG',
        description: 'Apprenez la technique MIG avec des exercices pratiques et théoriques pour devenir opérationnel sur chantier ou en atelier.'
    },
    {
        id: 2,
        img: [TigCourseImg],
        title: 'Soudure TIG',
        description: 'Formation complète en soudure TIG pour réaliser des assemblages précis sur différents matériaux.'
    },
    {
        id: 3,
        img: [ArcCourseImg],
        title: 'Soudure à l’arc',
        description: 'Maîtrisez la soudure à l’arc avec nos instructeurs expérimentés pour applications industrielles et construction.'
    },
    {
        id: 4,
        img: [SemiAutoCourseImg],
        title: 'Soudure semi-automatique',
        description: 'Technique semi-automatique pour les professionnels et étudiants souhaitant améliorer leur productivité et précision.'
    }
];

function Courses() {
  return (
    <div className='courses-page'>
        <header className='height-75 bg-dark text-light'>
            <div className='container h-100 d-flex flex-column align-items-center justify-content-center text-light'>
                <h1 className='text-center fw-semibold'>Nos Formations</h1>
                <p className='text-center w-75 mb-5'>
                    Découvrez nos formations spécialisées en soudure 3G, 6G, ARC, TIG et semi-automatique. Apprentissage pratique et théorique pour tous niveaux.
                </p>
            </div>
        </header>

        <div className='container py-5'>
            <div className='row g-4'>
                {courses.map((course) => (
                    <div key={course.id} className='col-lg-6'>
                        <Card className='text-white shadow scale-hover-effect'>
                            <Card.Img src={course.img} className='img-fluid' width='500' height='400' />
                            <Card.ImgOverlay className='d-flex flex-column align-items-center justify-content-center p-md-5'>
                                <Card.Title className='text-center fs-1 text-warning'>{course.title}</Card.Title>
                                <Card.Text className='text-center'>{course.description}</Card.Text>
                                <button type='button' className='btn btn-outline-light text-capitalize fw-semibold'>Voir la formation</button>
                            </Card.ImgOverlay>
                        </Card>
                    </div>
                ))}
            </div>
        </div>

        <div className='bg-dark text-light py-5'>
            <FaqAccordion />
        </div>
    </div>
  )
}

export default Courses;
