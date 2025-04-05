const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div>
      <h3 className="text-[#D99904] font-serif text-lg my-3">{heading}</h3>
      <h1 className="text-4xl text-black border-y-2 border-gray-500 py-3 ">
        {subHeading}
      </h1>
    </div>
  );
};

export default SectionTitle;
