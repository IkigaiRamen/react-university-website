import React from "react";
import "./About.css";
import { Link } from "react-router-dom";
import AboutUsSectionImg from "../../utils/images/formation.jpg";
import ChooseSection from "../../components/ChooseSection/ChooseSection";
import Person1 from "../../utils/images/Tig.webp";
import Person2 from "../../utils/images/Semi.jpg";
import Person3 from "../../utils/images/Tig.webp";
import Person4 from "../../utils/images/Mig.webp";
import Person5 from "../../utils/images/Semi.jpg";
import Person6 from "../../utils/images/Tig.webp";
import Person7 from "../../utils/images/Mig.webp";
import Person8 from "../../utils/images/Semi.jpg";
import Person9 from "../../utils/images/Semi.jpg";

const persons = [
  {
    id: 1,
    img: [Person1],
  },
  {
    id: 2,
    img: [Person2],
  },
  {
    id: 3,
    img: [Person3],
  },
  {
    id: 4,
    img: [Person4],
  },
  {
    id: 5,
    img: [Person5],
  },
  {
    id: 6,
    img: [Person6],
  },
  {
    id: 7,
    img: [Person7],
  },
  {
    id: 8,
    img: [Person8],
  },
  {
    id: 9,
    img: [Person9],
  },
];

function About() {
  return (
    <div className="about-page">
      <header className="height-75">
        <div className="container h-100 d-flex flex-column align-items-center justify-content-center text-light">
          <h1 className="text-center fw-semibold">À propos de WELDERCOM</h1>
          <p className="text-center w-75 mb-5">
            WELDERCOM est un centre de formation professionnelle agréé par
            l’État, spécialisé dans les techniques de soudure 3G et 6G. Notre
            mission est de préparer nos stagiaires pour des carrières solides en
            Tunisie et à l’international, notamment au Canada.
          </p>
        </div>
      </header>

      <div className="container my-5">
        <div className="row">
          <div className="col-lg-6 d-flex flex-column justify-content-center mb-4 mb-lg-0">
            <h2 className="mb-4 mb-lg-5">
              Pourquoi se former chez WELDERCOM ?
            </h2>
            <p>
              Notre centre offre une formation pratique et intensive en soudure
              ARC, MIG-MAG semi-automatique, TIG (Tungsten Inert Gas), ainsi que
              la soudure Pipe Line pétrolière et gaz 6G.
            </p>
            <p className="mb-4 mb-lg-5">
              Les stagiaires bénéficient d’un encadrement professionnel,
              d’équipements modernes et de programmes alignés sur les standards
              canadiens et européens. La formation dure plus de 100 heures avec
              possibilité de recrutement et stage professionnel.
            </p>
            <Link to="/contact">
              <button
                type="button"
                className="btn btn-danger btn-lg mx-0 mx-sm-2 my-2 my-sm-0"
              >
                Contact Us
              </button>
            </Link>
          </div>
          <div className="col-lg-6 d-flex justify-content-center">
            <img src={AboutUsSectionImg} className="img-fluid w-75" alt="" />
          </div>
        </div>
      </div>

      <div className="bg-dark text-light py-5">
        <ChooseSection />
      </div>

      <div className="bg-body-tertiary py-5">
        <div className="container">
          <h2 className="text-center mb-5">Nos Stagiaires & Ambiance de Formation
          </h2>
          <div className="row g-4">
            {persons.map((person) => (
              <div key={person.id} className="col-md-4">
                <img src={person.img} className="img-fluid" alt="" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
