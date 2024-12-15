"use strict";

import {
  useTranslation
} from "/src/js/i18n.js";

const SectionTitle = ({ id, text }) => {
  const { t } = useTranslation();
  return (
    <>
    <hr className="border-2"/>
    <h3 id={id} className="mb-0">{t(text)}</h3>
    <hr className="opacity-100 my-1 border-2"/>
    </>
  );
};

export default SectionTitle;
