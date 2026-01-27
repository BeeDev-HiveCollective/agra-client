import ServicesHeader from "../components/ServicesComponents/ServicesHeader/ServicesHeader";
import TaxServices from "../components/ServicesComponents/TaxServicesComponent/TaxServices";
import FinancialServices from "../components/ServicesComponents/FinancialServicesComponent/FinancialServices";

function Services() {
  return (
    <div>
      <ServicesHeader />
      <TaxServices />
      <FinancialServices />
    </div>
  );
}

export default Services;
