import TermsPrivacyUnsubHeader from '../components/PrivacyTermsUnsubscribe/TermsPrivacyUnsubHeader'
import UnsubscribeForm from '../components/PrivacyTermsUnsubscribe/Unsubscribe/UnsubscribeForm'


export default function Unsubscribe() {

    return(
        <>
        <TermsPrivacyUnsubHeader page_title="Unsubscribe" page_subheading="Complete the form below to unsubscribe. You'll receive a confirmation email shortly after." />
        <UnsubscribeForm />
        </>
    )
}