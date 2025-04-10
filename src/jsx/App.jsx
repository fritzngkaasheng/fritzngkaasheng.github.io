"use strict";

const { HashRouter, Routes, Route } = window.ReactRouterDOM;

import Layout from "/src/js/pages/Layout.js";
import Home from "/src/js/pages/Home.js";
import DynamicResume from "/src/js/pages/DynamicResume.js";
import AcademicCV from "/src/js/pages/AcademicCV.js";
import EntrepreneurResume from "/src/js/pages/EntrepreneurResume.js";
import DatingProfile from "/src/js/pages/DatingProfile.js";
import WillITakeTheJobQuiz from "/src/js/pages/WillITakeTheJobQuiz.js";
import Error404Page from "/src/js/pages/Error404Page.js";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    window.addEventListener('click', this.handleLinkClick);
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.handleLinkClick);
  }

  handleLinkClick = (event) => {
    const link = event.target.closest('a');
    if (link && link.href && !link.href.includes(window.location.hostname)) {
      const userConfirmed = window.confirm(`Do you really want to leave this website and go to ${link.href}?`);
      if (!userConfirmed) {
        event.preventDefault();
      }
    }
  };

  render() {
    return (
      <HashRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="dynamic-resume" element={<DynamicResume />} />
            <Route path="dynamic-resume/:preset" element={<DynamicResume />} />
            <Route path="dynamic-resume/:preset/:encodedFilter" element={<DynamicResume />} />
            <Route path="dynamic-resume/:preset/:mode/:encodedFilter" element={<DynamicResume />} />
            <Route path="academic-cv" element={<AcademicCV />} />
            <Route path="entrepreneur-resume" element={<EntrepreneurResume />} />
            <Route path="dating-profile" element={<DatingProfile />} />
            <Route path="will-i-take-the-job-quiz" element={<WillITakeTheJobQuiz />} />
            <Route path="*" element={<Error404Page />} />
          </Route>
        </Routes>
      </HashRouter>
    );
  }
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
