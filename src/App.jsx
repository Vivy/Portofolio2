import Expertise from './component/expertise/expertise';
import Header from './component/header/header';
import Hero from './component/hero/hero';
import People from './component/people/people';
import Portfolio from './component/portfolio/portfolio';
import Work from './component/work/work';
import css from './styles/app.module.scss';

const App = () => {
  return (
    <div className={`bg-primary ${css.container}`}>
      <Header />
      <Hero />
      <Expertise />
      <Work />
      <Portfolio />
      <People />
    </div>
  );
};

export default App;
