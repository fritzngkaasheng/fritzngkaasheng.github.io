"use strict";

import {
  useTranslation
} from "/src/js/i18n.js";

import Icon from "/src/js/Icons.js";

import LoadingSection from "/src/js/components/LoadingSection.js";

const React = window.React;
const { useState, useEffect } = React;

const DatingProfile = () => {
  const { t } = useTranslation("dating");

  const [data, setData] = useState({});

  useEffect(() => {
    fetch("/dist/data/dating.min.json")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      })
      .catch((err) => {
        console.error("Failed to load dating.min.json:", err);
      });
  }, []);

  useEffect(() => {
    if (data.aboutMe) {
      
    }
  }, [data]);

  if (Object.keys(data).length < 1) {
    return (
      <>
        <LoadingSection />
      </>
    );
  }

  return (
    <>
      <div id="image-carousel" className="carousel slide bg-black bg-opacity-25" data-bs-theme="dark">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#image-carousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#image-carousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#image-carousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#image-carousel" data-bs-slide-to="3" aria-label="Slide 4"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="/assets/images/D1.jpg" className="d-block w-100 vh-100 object-fit-contain" alt="Selfie"/>
          </div>
          <div className="carousel-item">
            <img src="/assets/images/D2.jpg" className="d-block w-100 vh-100 object-fit-contain" alt="China Trip"/>
          </div>
          <div className="carousel-item">
            <img src="/assets/images/D3.jpg" className="d-block w-100 vh-100 object-fit-contain" alt="Singapore Trip"/>
          </div>
          <div className="carousel-item">
            <img src="/assets/images/D4.jpg" className="d-block w-100 vh-100 object-fit-contain" alt="Selfie with ETS"/>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#image-carousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">{t("Previous")}</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#image-carousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">{t("Next")}</span>
        </button>
      </div>
      <div className="container py-5">
        <div className="row gy-3">
          <div className="col-12">
            <div className="card" id="contact-card">
              <div className="card-body d-flex gap-3">
                <h2 className="d-inline align-content-end m-0">{t(data.name)}</h2>
                <h3 className="d-inline align-content-end m-0">{t(data.age)}</h3>
                <a className="d-inline align-content-center m-0" href="https://omi.sg/" target="_blank"><Icon name="omi"/></a>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="card" id="about-me-card">
              <div className="card-body">
                <h4>{t("About Me")}</h4>
                {data.aboutMe.map((line, index) => {
                  if (line) {
                    return <p key={index} className="mb-0">{t(line)}</p>;
                  }

                  if (!line) {
                    return <br key={index} />;
                  }
                })}
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="card" id="coming-soon-card">
              <div className="card-body">
                <p>{t("Coming Soon")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DatingProfile;
