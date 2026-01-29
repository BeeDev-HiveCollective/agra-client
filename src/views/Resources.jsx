import ResourcesHeader from "../components/ResourcesComponent/ResourcesHeaderComponent/ResourcesHeader";
import IRSResources from "../components/ResourcesComponent/IRSResourcesComponent/IRSResources";
import VirginiaResources from "../components/ResourcesComponent/VirginiaTaxResourcesComponent/VirginiaResources";
import ProfessionalAffiliations from "../components/ResourcesComponent/ProfessionalAffiliationResources/ProfessionalAffiliations";
import SecurityNotice from "../components/ResourcesComponent/SecurityNoticeComponent/SecurityNotice";

function Resources() {
  return (
    <div>
      <ResourcesHeader />
      <IRSResources />
      <VirginiaResources />
      <ProfessionalAffiliations />
      <SecurityNotice />
    </div>
  );
}

export default Resources;
