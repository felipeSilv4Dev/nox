import HeaderFooter from './HeaderFooter';
import SocialsFooter from './SocialsFooter';
import NavFooter from './NavFooter';
import ContactsFooter from './ContactsFooter';

const Footer = () => {
  const tablet = 'tablet:w-[94%] tablet:grid-cols-[repeat(8,1fr)] ';
  const desktop =
    'desktop-1:py-20 desktop-1:w-[80%] desktop-2:w-[76%] desktop-1:grid-cols-[repeat(12,1fr)]';

  return (
    <footer className="bg-black-800 relative z-1 mt-16">
      <section
        className={`${tablet} ${desktop} mx-auto grid max-w-[1600px] grid-cols-[repeat(4,1fr)] items-end gap-8 px-4 py-12`}
      >
        <HeaderFooter />
        <SocialsFooter />
        <NavFooter />
        <ContactsFooter />
      </section>
    </footer>
  );
};

export default Footer;
