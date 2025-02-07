
import ActiveBanner from '../app/components/ActiveBanner';
import Hero from '../app/components/Hero';
import HomeBlog from '../app/components/HomeBlog';
import ImageGrid from '../app/components/ImageGrid';
import { Menucard } from '../app/components/Menucard';
import { OurChef } from '../app/components/OurChefs';
import { Testimonials } from '../app/components/Testimonials';
import Footer from './components/Footer';


export default function Home() {
  return (
    <div className="bg-transparent text-white">

      <main>
        <Hero />
        <ImageGrid />
    <div className="bg-black">
        <Menucard />
        <OurChef />

        <Testimonials />
        </div>



        <ActiveBanner />

        <HomeBlog />
      </main>
      <Footer />
    </div>
  );
}
