import Header from './component/header/header';
import Hero from './component/hero/hero';
import css from './styles/app.module.scss';

const App = () => {
  return (
    <div className={`bg-primary ${css.container}`}>
      <Header />
      <Hero />
    </div>
  );
};

export default App;
