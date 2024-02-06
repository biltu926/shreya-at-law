import React from 'react';
import './Projects.css';
import { projectData } from '../../../your_info';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Projects = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Aangepaste waarde
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  

  const renderDemoContent = (project) => {
    if (isImageURL(project.demoUrl)) {
      return <img src={project.demoUrl} alt="Project Thumbnail" />;
    } else {
      return <iframe src={project.demoUrl} title="Project Demo" allowFullScreen />;
    }
  };

  const isImageURL = (url) => {
    const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif'];
    return imageExtensions.some((extension) => url.toLowerCase().endsWith(extension));
  };

  return (
    <section id="Projects" className="projects section">
      <div className="container">
        <div className="section-title">
          <h2 className="wow fadeInUp" data-wow-delay=".4s">
            Interests
          </h2>
          <p  data-wow-delay=".6s" >
          Civil and criminal law, Social work, People management, Project management, Animal welfare.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Projects;
