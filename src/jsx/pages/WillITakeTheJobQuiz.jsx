"use strict";

import ComingSoonSection from "/src/js/components/ComingSoonSection.js";

const WillITakeTheJobQuiz = () => {
  return (
    <div className="container">
      <form>
        <div className="mb-3">
          <label for="quizOrigin" className="form-label">Which country is this job from?</label>
          <select className="form-select" name="origin" id="quizOrigin" aria-label="Which country is this job from?">
            <option selected>Choose...</option>
            <option value="sg">Singapore</option>
            <option value="au">Australia</option>
            <option value="nz">New Zealand</option>
            <option value="cn">China</option>
            <option value="de">Germany</option>
            <option value="my">Malaysia</option>
            <option value="tw">Taiwan</option>
            <option value="gb">United Kingdom of Great Britain and Northern Ireland</option>
            <option value="th">Thailand</option>
            <option value="mm">Myanmar</option>
          </select>
        </div>
        <h2>The probability that I will choose this job is NaN%</h2>
      </form>
    </div>
  );
};

export default WillITakeTheJobQuiz;
