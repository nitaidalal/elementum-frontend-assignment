import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Tomorrow from "./components/Tomorrow";
import Progress from "./components/Progress";
import Services from "./components/Services";
import Testimonial from "./components/Testimonial";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import StorySection from "./components/StorySection";

export default function App() {
  return (
    <main className="font-body text-black bg-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <StorySection />
      <Services />
      <Testimonial />
      <Newsletter />
      <Footer />
    </main>
  );
}
