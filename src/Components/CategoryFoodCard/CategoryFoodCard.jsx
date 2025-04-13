import FoodCard from "../FoodCard/FoodCard";

const CategoryFoodCard = ({ items }) => {
  return (
    <div className="grid lg:grid-cols-3 gap-3">
      {items.map((item) => (
        <FoodCard key={item._id} item={item}></FoodCard>
      ))}
    </div>
  );
};

export default CategoryFoodCard;
