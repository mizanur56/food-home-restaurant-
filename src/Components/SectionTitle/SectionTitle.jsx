const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="flex flex-col items-center justify-center my-10 space-y-3 ">
      <p className="text-yellow-600">{heading}</p>
      <h1 className="text-4xl border-y-2 py-2 border-gray-300">{subHeading}</h1>
    </div>
  );
};

export default SectionTitle;
