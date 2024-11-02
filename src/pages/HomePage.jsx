import Navbar from '../assets/components/Navbar';
import Footer from '../assets/components/Footer';
import Hero from '../assets/components/Hero';
import AboutFeature from '../assets/components/AboutFeature';
import Doctors from '../assets/components/Doctors';
import Article from '../assets/components/ArticleSection';

const HomePage = () => {
  return (
    <div className="homePage lg:mt-0">
      <Navbar />

      <section id='home'>
        <Hero />
      </section>

      <section id='about'>
        <AboutFeature />
      </section>

      <section id='doctors'>
        <Doctors />
      </section>

      <section id='article'>
        <Article />
      </section>

      <section id='contact'>
        <Footer />
      </section>
    </div>
  );
};

export default HomePage;
