type descripContainerProps = {
  firstHeader: string;
  partial1: string;
  partial2: string;
  paragraph: string;
  link: string;
};

const DescriptionContainer = ({
  firstHeader,
  partial1,
  partial2,
  paragraph,
  link,
}: Partial<descripContainerProps>) => {
  return (
    <div className="max-w-md text-left">
      <p className="mb-4 text-secondaryPink">{firstHeader}</p>
      <h1 className="text-4xl font-bold text-brandBlack leading-tight">
        {partial1}
      </h1>
      <h1 className="text-4xl font-bold text-brandGray leading-tight mb-6">
        {partial2}
      </h1>
      <p className="text-lg text-brandGray mb-6">{paragraph}</p>
      <a
        href="#"
        className="text-lg text-brandBlack hover:text-brandBlack font-bold hover:border-secondaryPink border-b-2 border-transparent pb-1"
      >
        {link}
      </a>
    </div>
  );
};

export default DescriptionContainer;
