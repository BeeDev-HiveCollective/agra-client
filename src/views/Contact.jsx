
import ContactHeader from '../components/ContactComponent/ContactHeader'
import ContactInformation from '../components/ContactComponent/ContactInformation'
import ContactForm from '../components/ContactComponent/ContactForm'

import '../components/ContactComponent/contact.css'

function Contact() {
  return (
    <div>
      <ContactHeader />
      <ContactInformation />
      <ContactForm />
    </div>
  );
}

export default Contact;
