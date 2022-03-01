import React from "react";
import "./Portfolio.css";
import img1 from "../../assets/portfolio1.jpg";
import img2 from "../../assets/portfolio2.jpg";
import img3 from "../../assets/portfolio3.jpg";
import img4 from "../../assets/portfolio4.jpg";
import img5 from "../../assets/portfolio5.jpg";
import img6 from "../../assets/portfolio6.jpg";

const data = [
  {
    id: 1,
    image: img1,
    title: "Orion UI kit - Charts templates & info graphics in Figma",
    github: "https://github.com",
    demo: "https://dribbble.com/shots/17428314-Orion-UI-kit-Charts-templates-infographics-in-Figma",
  },
  {
    id: 2,
    image: img2,
    title: "Orion UI kit - Charts templates & info graphics in Figma",
    github: "https://github.com",
    demo: "https://dribbble.com/shots/17428314-Orion-UI-kit-Charts-templates-infographics-in-Figma",
  },
  {
    id: 3,
    image: img3,
    title: "Orion UI kit Charts templates info graphics in Figma",
    github: "https://github.com",
    demo: "https://dribbble.com/shots/17428314-Orion-UI-kit-Charts-templates-infographics-in-Figma/attachments/12557659?mode=media",
  },
  {
    id: 4,
    image: img4,
    title: "Orion UI kit Charts templates info graphics in Figma",
    github: "https://github.com",
    demo: "https://dribbble.com/shots/17428309-Orion-UI-kit-Charts-templates-infographics-in-Figma/attachments/12557654?mode=media",
  },
  {
    id: 5,
    image: img5,
    title: "Eclipse - Figma dashboard UI kit for data design web apps",
    github: "https://github.com",
    demo: "https://dribbble.com/shots/17428282-Orion-UI-kit-Charts-templates-infographics-in-Figma/attachments/12557627?mode=media",
  },
  {
    id: 6,
    image: img6,
    title: "Orion UI kit - Charts templates & info graphics in Figma",
    github: "https://github.com",
    demo: "https://dribbble.com/shots/17428242-Orion-UI-kit-Charts-templates-infographics-in-Figma/attachments/12557586?mode=media",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a
                  href={github}
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
