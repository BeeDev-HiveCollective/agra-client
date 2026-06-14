import PrivacyPolicy from "../components/PrivacyTermsUnsubscribe/PrivacyPolicy";
import TermsPrivacyUnsubHeader from "../components/PrivacyTermsUnsubscribe/TermsPrivacyUnsubHeader";

export default function Privacy() {

  return (
    <div>
      <TermsPrivacyUnsubHeader page_title="Privacy Policy" />
      <PrivacyPolicy />
    </div>
  );
}
