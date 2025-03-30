import { Link } from "react-router-dom";
import HeroCover from "../HeroCover/HeroCover";
import MenuItem from "../MenuItem/MenuItem";

const MenuCategory = ({ items, title, bg_img, para }) => {
  return (
    <div>
      {title && <HeroCover img={bg_img} title={title} para={para}></HeroCover>}
      <div className="grid md:grid-cols-2 gap-3">
        {items.map((item) => (
          <MenuItem item={item} key={item._id}></MenuItem>
        ))}
      </div>
      <div className="flex items-center justify-center my-3">
        <Link to={`/shop/${title}`}>
          <button className="border-b-4 border-black px-4 py-2 hover:bg-black  hover:text-white rounded-2xl">
            Order Your Favorite Food
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MenuCategory;
