
import './bannerSection.scss';
import { Button } from '../Button/Button.jsx';
import { scrollToSection } from '../../util/helper.js';

export const BannerSection = () => {
  return (
    <section className="banner">
      <div className="banner__content">
        <h1 className="banner__title">
          Test assignment for front-end developer
        </h1>
        <p className="banner__text">
          What defines a good front-end developer is one that has skilled
          knowledge of HTML, CSS, JS with a vast understanding of User design
          thinking as they'll be building web interfaces with accessibility in
          mind. They should also be excited to learn, as the world of Front-End
          Development keeps evolving.
        </p>
        <Button onClick={() => scrollToSection('singUp')}>Sign up</Button>
      </div>
    </section>
  );
};
