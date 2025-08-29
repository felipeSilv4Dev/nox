interface ContactFooterProps {
  title: string;
  content: string;
}
const ContactFooter = ({ title, content }: ContactFooterProps) => {
  return (
    <div className="space-y-0.5">
      <h2 className='text-white-100 font-["Assistant"] text-[18px] font-semibold capitalize'>
        {title}
      </h2>
      <p className='text-white-500 tablet:text-base font-["Assistant"] text-sm'>
        {content}
      </p>
    </div>
  );
};

export default ContactFooter;
