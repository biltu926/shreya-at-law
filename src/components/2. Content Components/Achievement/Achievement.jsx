import React, { useEffect, useRef, useState } from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import './Achievement.css';
import { achievements } from '../../../your_info';

const Achievement = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  return (
    <section className="our-achievement section">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 offset-lg-1 col-md-12 col-12">
            <div className="title">
              <h2>"Justice will not be served until those who are unaffected are as outraged as those who are."</h2>
              <p style={{ fontSize: 30 }}>Benjamin Franklin</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-8 offset-lg-2 col-md-12 col-12">

          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievement;
