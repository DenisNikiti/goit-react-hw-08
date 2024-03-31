import Contact from "../Contact/Contact";
import { useDispatch, useSelector } from "react-redux";
import { selectVisibleContacts } from "../../redux/contacts/selectors";

import { useEffect } from "react";
import { fetchContacts } from "../../redux/contacts/operations";
import { isloading } from "../../redux/contacts/selectors";
import { Hourglass } from "react-loader-spinner";

export default function ContactList() {
  const dispath = useDispatch();
  const contacts = useSelector(selectVisibleContacts);
  const loading = useSelector(isloading);

  useEffect(() => {
    dispath(fetchContacts());
  }, [dispath]);

  return (
    <div>
      <ul>
        {contacts.map((contact) => {
          return <Contact key={contact.id} contact={contact} />;
        })}
      </ul>
      {loading && <Hourglass />}
    </div>
  );
}
