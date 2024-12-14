"use strict";

const React = window.React;
const { useState, useEffect } = React;
import BottomRightFloatingButtons from "/src/js/components/BottomRightFloatingButtons.js";
import A4Container from "/src/js/components/A4Container.js";

const DynamicResume = () => {
  const [profile, setProfile] = useState({});

  useEffect(() => {
    fetch("/dist/data/profile.min.json")
      .then((res) => res.json())
      .then((data) => {
        setProfile(data);
      })
      .catch((err) => {
        console.error("Failed to load profile.json:", err);
      });
  }, []);

  return (
    <>
      {profile.improvedHRProcessMode === "true" && <BottomRightFloatingButtons />}
      <A4Container />
    </>
  );
};

export default DynamicResume;
