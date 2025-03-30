const HeroCover = ({ img, title, para }) => {
  return (
    <div
      className="relative min-h-screen my-5 flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url(${img})`,
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0  bg-opacity-50"></div>

      {/* Text Content */}
      <div className="relative z-10 bg-white/10 rounded-lg backdrop-blur-lg p-5 backdrop-opacity-95 text-center text-white max-w-md drop-shadow-lg">
        <h1 className="mb-5 text-5xl font-bold">{title}</h1>
        <p className="mb-5">{para}</p>
      </div>
    </div>
  );
};

export default HeroCover;
