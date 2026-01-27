import ServicesHeader from "../components/ServicesComponents/ServicesHeader/ServicesHeader";
import TaxServices from "../components/ServicesComponents/TaxServicesComponent/TaxServices";
import FinancialServices from "../components/ServicesComponents/FinancialServicesComponent/FinancialServices";
import AdvisoryServices from "../components/ServicesComponents/AdvisoryComponent/AdvisoryServices";
import ServicesCTA from "../components/ServicesComponents/CTAComponent/ServicesCTA";

function Services() {
  return (
    <div>
      <ServicesHeader />
      <TaxServices />
      <FinancialServices />
      <AdvisoryServices />
      <ServicesCTA />
    </div>
  );
}

export default Services;
