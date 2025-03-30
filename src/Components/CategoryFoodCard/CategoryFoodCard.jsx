import FoodCard from "../FoodCard/FoodCard";

const CategoryFoodCard = ({ items }) => {
  return (
    <div className="grid md:grid-cols-3 gap-3 my-5">
      {items.map((item) => (
        <FoodCard key={item._id} item={item}></FoodCard>
      ))}
    </div>
  );
};

export default CategoryFoodCard;
