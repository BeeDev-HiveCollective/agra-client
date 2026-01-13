import HeroSection from "../components/HomeComponents/HomeHeroSection/HeroSection";
import CertificationSection from "../components/HomeComponents/HomeCertificationsSection/Certifications";
import ServicesSection from "../components/HomeComponents/HomeServicesSection/services";

function Home() {
  return (
    <div>
      <HeroSection />
      <CertificationSection />
      <ServicesSection />
    </div>
  );
}

export default Home;
