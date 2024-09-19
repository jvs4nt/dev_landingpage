import FeatureSection from "./components/FeatureSection"
import Footer from "./components/Footer"
import HeroSection from "./components/HeroSection"
import Navbar from "./components/Navbar"
import Pricing from "./components/ContactForm"
import Testimonials from "./components/Testimonials"
import Workflow from "./components/Workflow"
import ContactForm from "./components/ContactForm"

const App = () => {
  console.log(import.meta.env.VITE_APP_ORIGIN);
  
  return (
    <>
      <Navbar />
      <div className="px-2 pt-20 mx-auto max-w-7xl">
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