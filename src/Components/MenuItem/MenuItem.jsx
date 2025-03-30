const MenuItem = ({ item }) => {
  const { name, recipe, image, price } = item;
  return (
    <div className="flex items-center justify-center gap-3">
      <img
        style={{ borderRadius: "0 200px 200px 200px" }}
        className="w-36 "
        src={image}
        alt=""
      />
      <div>
        <h3 className="text-2xl text-gray-700">{name}------------</h3>
        <p>{recipe}</p>
      </div>
      <p className="text-yellow-600">${price}</p>
    </div>
  );
};

export default MenuItem;
