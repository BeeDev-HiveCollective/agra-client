import ResourcesHeader from "../components/ResourcesComponent/ResourcesHeaderComponent/ResourcesHeader";
import IRSResources from "../components/ResourcesComponent/IRSResourcesComponent/IRSResources";
import VirginiaResources from "../components/ResourcesComponent/VirginiaTaxResourcesComponent/VirginiaResources";

function Resources() {
  return (
    <div>
      <ResourcesHeader />
      <IRSResources />
      <VirginiaResources />
    </div>
  );
}

export default Resources;
