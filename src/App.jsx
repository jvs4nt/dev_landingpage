import FeatureSection from "./components/FeatureSection"
import HeroSection from "./components/HeroSection"
import Navbar from "./components/Navbar"
import Workflow from "./components/Workflow"
import ContactForm from "./components/ContactForm"

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

AOS.init();

const App = () => {

  console.log(import.meta.env.VITE_APP_ORIGIN);

    return (
    <>
      <Navbar />
      <div id="inicio" className="px-2 pt-20 mx-auto max-w-7xl">
        <HeroSection />
        <FeatureSection />
        <Workflow />
        <ContactForm />
        {/* <Testimonials /> */}
        {/*<Footer /> */}
      </div>
    </>
  )
}

export default App