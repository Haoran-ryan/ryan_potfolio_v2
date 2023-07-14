import Education from "./components/Education/Education";
import Expertise from "./components/Expertise/Expertise";
import Header from "./components/Header/Header";
import Hero from "./components/Header/hero/Hero";
import Portfolio from "./components/Portfolio/Portfolio";
import css from './styles/app.module.scss';
import People from "./components/People/People.jsx";

const App = () => {
  return <div className={`bg-primary ${css.container}`}>
    <Header />
    <Hero />
    <Expertise />
    <Education />
    <Portfolio />
    <People />
  </div>;
};

export default App;
