"use strict";

import {
  useTranslation
} from "/src/js/i18n.js";

import Icon from "/src/js/Icons.js";

import LoadingSection from "/src/js/components/LoadingSection.js";
import BasicInfoItem from "/src/js/components/BasicInfoItem.js";

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
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-4 p-0 py-md-5 bg-black bg-opacity-25">
          <div id="image-carousel" className="carousel slide">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#image-carousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#image-carousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#image-carousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
              <button type="button" data-bs-target="#image-carousel" data-bs-slide-to="3" aria-label="Slide 4"></button>
              <button type="button" data-bs-target="#image-carousel" data-bs-slide-to="4" aria-label="Slide 5"></button>
            </div>
            <div className="carousel-inner ratio ratio-1x1">
              <div className="carousel-item active">
                <img loading="lazy" src="/assets/images/D1.jpg" className="d-block w-100 h-100 object-fit-contain" alt="Selfie"/>
              </div>
              <div className="carousel-item">
                <img loading="lazy" src="/assets/images/D2.jpg" className="d-block w-100 h-100 object-fit-contain" alt="China Trip"/>
              </div>
              <div className="carousel-item">
                <img loading="lazy" src="/assets/images/D3.jpg" className="d-block w-100 h-100 object-fit-contain" alt="Singapore Trip"/>
              </div>
              <div className="carousel-item">
                <img loading="lazy" src="/assets/images/D4.jpg" className="d-block w-100 h-100 object-fit-contain" alt="Selfie with ETS"/>
              </div>
              <div className="carousel-item">
                <img loading="lazy" src="/assets/images/D5.jpg" className="d-block w-100 h-100 object-fit-contain" alt="Taiwan Trip"/>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#image-carousel" data-bs-slide="prev">
              <span className="visually-hidden">{t("Previous")}</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#image-carousel" data-bs-slide="next">
              <span className="visually-hidden">{t("Next")}</span>
            </button>
          </div>
        </div>
        <div className="py-5 col-12 col-md-8">
          <div className="row gy-3">
            <div className="col-12">
              <div className="card" id="contact-card">
                <div className="card-body d-flex gap-3">
                  <h2 className="d-inline align-content-end m-0">{t(data.name)}</h2>
                  <h3 className="d-inline align-content-end m-0">{t(data.age)}</h3>
                  <a className="d-inline align-content-center m-0" href="https://omi.sg/" target="_blank"><Icon name="omi"/></a>
                  <a className="d-inline align-content-center m-0 text-decoration-none" href="https://www.linkedin.com/in/fritzngkaasheng" target="_blank"><Icon name="linkedIn24"/> <span>{t("(For verification)")}</span></a>
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
              <div className="card" id="basic-info-card">
                <div className="card-body">
                  <h4>{t("Basic Information")}</h4>
                  <BasicInfoItem icon="genderMale" text={t("Male")} />
                  <BasicInfoItem icon="ruler" text={t(data.basicInformation.height)} />
                  <BasicInfoItem icon="home" text={t(data.basicInformation.comeFrom)} />
                  <BasicInfoItem icon="wineGlass" text={t(data.lifestyle.drinking)} />
                  <BasicInfoItem icon="smoking" text={t(data.lifestyle.smoking)} />
                  <BasicInfoItem icon="droplet" text={t(data.basicInformation.bloodType)} />
                  <BasicInfoItem icon="globeAmericas" text={t(data.basicInformation.speaking.join(" | "))} />
                  <BasicInfoItem icon="buildings" text={t(data.workEducation.industry)} />
                  <BasicInfoItem icon="briefcase" text={t(data.workEducation.occupation)} />
                  <BasicInfoItem icon="mortorboard" text={t(data.workEducation.degree)} />
                  <BasicInfoItem icon="school" text={t(data.workEducation.school)} />
                  <BasicInfoItem icon="search" text={t(data.lifestyle.lookingFor)} />
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="card" id="lifestyle-card">
                <div className="card-body">
                  <h4>{t("Lifestyle")}</h4>
                  <BasicInfoItem icon="dog" text={t(data.lifestyle.pets)} />
                  <BasicInfoItem icon="dumbbell" text={t(data.lifestyle.exercise)} />
                  <BasicInfoItem icon="utensils" text={t(data.lifestyle.diet)} />
                  <BasicInfoItem icon="couch" text={t(data.lifestyle.offDay)} />
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="card" id="my-zodiac-sign-card">
                <div className="card-body">
                  <h4>{t("My Zodiac Sign")}</h4>
                  <p className="mb-0">{t(data.basicInformation.zodiac)}</p>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="card" id="my-interests-card">
                <div className="card-body">
                  <h4>{t("My Interests")}</h4>
                  <div className="d-flex flex-wrap gap-3">
                    {Object.entries(data.interests).map(interestListByCategory => {
                      let iconName = "";
                      
                      if (interestListByCategory[0] === "food") {
                        iconName = "utensils";
                      }

                      if (interestListByCategory[0] === "flimTv") {
                        iconName = "playFill";
                      }

                      if (interestListByCategory[0] === "travel") {
                        iconName = "airplaneFill";
                      }

                      return interestListByCategory[1].map((interest, interestIndex) => {
                        return (
                          <>
                          <button key={interestIndex} type="button" className="btn active" data-bs-toggle="button" aria-pressed="true"><Icon name={iconName} /> {t(interest)}</button>
                          </>
                        );
                      });
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DatingProfile;
