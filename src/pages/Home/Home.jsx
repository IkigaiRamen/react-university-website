import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import ChooseSection from '../../components/ChooseSection/ChooseSection';
import StartCoursesImg from '../../utils/images/start-courses-img.jpg'; // replace with a welding image later
import FaqAccordion from '../../components/FaqAccordion/FaqAccordion';
import { Card } from 'react-bootstrap';

// Replace these 3 images with welding-related ones
import Blog1Img from '../../utils/images/blog1-img.jpg';
import Blog2Img from '../../utils/images/blog2-img.jpg';
import Blog3Img from '../../utils/images/blog3-img.jpg';

const blogs = [
    {
        id: 1,
        img: [Blog1Img],
        title: 'Pourquoi choisir la soudure 3G/6G ?',
        description: 'Découvrez pourquoi la soudure 3G/6G est l’une des compétences les plus demandées au Canada et en Europe. Salaire élevé, forte demande, et possibilités de recrutement.'
    },
    {
        id: 2,
        img: [Blog2Img],
        title: 'Comment se préparer à une session de soudure 6G',
        description: 'La soudure 6G demande précision, technique et entraînement. Voici les conseils de nos formateurs pour réussir votre certification avec succès.'
    },
    {
        id: 3,
        img: [Blog3Img],
        title: 'Les opportunités de travail pour les soudeurs en 2025',
        description: 'Le secteur du soudage est en pleine expansion, notamment au Canada. Découvrez les opportunités de recrutement accessibles après votre formation chez WELDERCOM.'
    }
];

function Home() {
  return (
    <div className='home-page'>
        {/* HERO SECTION */}
        <header className='h-100 min-vh-100 d-flex align-items-center text-light'>
            <div className='container d-flex flex-column align-items-center'>
                <h1 className='text-center fw-semibold'>
                    Centre de Formation Professionnelle<br /> 
                    en Soudure 3G & 6G
                </h1>
                <p className='text-center'>
                    WELDERCOM est un centre agréé par l’État spécialisé en soudure 
                    ARC, MIG-MAG, TIG et Pipe Line 6G. Formation pratique, stages, 
                    et préparation pour travailler au Canada.
                </p>

                <div className='d-flex flex-column flex-sm-row align-items-center mt-md-3'>
                    <Link to="/courses">
                        <button type='button' className='btn btn-danger btn-lg mx-0 mx-sm-2 my-2 my-sm-0'>
                            Nos Formations
                        </button>
                    </Link>
                    <Link to="/contact">
                        <button type='button' className='btn btn-outline-light btn-lg mx-0 mx-sm-2 my-2 my-sm-0'>
                            Contactez-nous
                        </button>
                    </Link>
                </div>
            </div>
        </header>

        {/* WHY CHOOSE US SECTION */}
        <div className="py-5">
            <ChooseSection />
        </div>

        {/* START COURSES SECTION */}
        <div className='py-5 bg-light'>
            <div className="container">
                <div className='row d-flex align-items-center justify-content-around'>
                    <div className='col-lg-5'>
                        <h2 className='text-capitalize'>Prochaine session</h2>
                        <p>
                            La prochaine session de formation en soudure débute très bientôt. 
                            100% pratique, avec encadrement professionnel et préparation aux 
                            normes canadiennes et européennes.
                        </p>
                        <Link to="/courses">
                            <button type='button' className='btn btn-danger btn-lg mx-0 mx-sm-2 my-2 my-sm-0'>
                                En savoir plus
                            </button>
                        </Link>
                    </div>

                    <div className='col-lg-5 mt-5 mt-lg-0'>
                        <img src={StartCoursesImg} className='img-fluid' alt="Welding training" />
                    </div>
                </div>
            </div>
        </div>

        {/* FAQ SECTION */}
        <div className="py-5">
            <FaqAccordion />
        </div>

        {/* BLOG SECTION */}
        <div className='blog-section text-light py-5'>
            <div className='container d-flex flex-column align-items-center'>
                <h2 className='text-center text-capitalize mb-5'>Derniers articles</h2>

                <div className='row g-4'>
                    {blogs.map((blog) => (
                        <div key={blog.id} className='col-md-6 col-lg-4'>
                            <Link to="/blog" className='text-decoration-none'>
                                <Card className='h-100 shadow scale-hover-effect'>
                                    <Card.Img variant="top" src={blog.img} />
                                    <Card.Body className='p-md-5'>
                                        <Card.Title>{blog.title}</Card.Title>
                                        <Card.Text>{blog.description}</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </div>
                    ))}
                </div>

                <Link to="/blog">
                    <button type='button' className='btn btn-danger btn-lg mt-5'>
                        Voir tous les articles
                    </button>
                </Link>
            </div>
        </div>

    </div>
  )
}

export default Home;
