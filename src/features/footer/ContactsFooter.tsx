import ContactFooter from './ContactFooter';
import InputContactFooter from './InputContactFooter';

const ContactsFooter = () => {
  return (
    <section className="tablet:col-span-4 desktop-1:col-span-6 col-span-full space-y-4">
      <ContactFooter title="Email" content="user@gmail.com" />
      <ContactFooter title="Call" content="(99) 9 9999-9999" />
      <InputContactFooter />
    </section>
  );
};

export default ContactsFooter;
