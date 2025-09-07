type LinkContainerProps = {
  name: string;
  linkNames: string[];
  onHover?: () => void;
  onLeave?: () => void;
  onClick?: () => void;
};

const LinkContainer = ({
  name,
  linkNames,
  onHover,
  onLeave,
  onClick
}: LinkContainerProps) => {
  return (
    <div className="flex flex-col">
      <h3 className="text-brandBlack font-semibold p-1">{name}</h3>
      {linkNames.map((linkName, index) => (
        <a
          key={index}
          className="mb-2 text-brandGray font-semibold p-1 hover:text-brandBlack cursor-pointer"
          onMouseEnter={onHover}
          onMouseLeave={onLeave}
          onClick={onClick}
        >
          {linkName}
        </a>
      ))}
    </div>
  );
};

export default LinkContainer;
