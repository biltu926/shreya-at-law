import React, { useEffect } from 'react';
import './Skillz.css';
import WOW from 'wow.js';
import { categories } from '../../../your_info';

const Skillz = () => {
    useEffect(() => {
        new WOW().init();
    }, []);

    return (
        <section id="Skills" className="skills section">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="section-title">
                            <h3 className="wow fadeInUp" data-wow-delay=".4s">
                            Let me be the voice to those in need.
                            </h3>
                            <p className="wow fadeInUp" data-wow-delay=".6s">
                            Aspiring lawyer and social activist.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {categories.map((category) => (
                        <div
                            key={category.name}
                            className="col-lg-4 col-md-6 col-12"
                        >
                            <div
                                className="single-feature wow fadeInUp"
                                data-wow-delay=".2s"
                            >
                                <h3>{category.title}</h3>
                                <p>{category.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skillz;
