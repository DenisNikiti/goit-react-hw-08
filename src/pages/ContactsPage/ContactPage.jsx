import ContactForm from "../../components/ContactForm/ContactForm ";
import Contacts from "../../components/Contacts/Contacts";
import SearchBox from "../../components/SearchBox/SearchBox";

export default function ContactPage() {
  return (
    <div>
      <ContactForm />
      <SearchBox />
      <Contacts />
    </div>
  );
}
