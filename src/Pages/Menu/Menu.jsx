import { Helmet } from "react-helmet";
import HeroCover from "../../Components/HeroCover/HeroCover";
import useMenu from "../../Hooks/useMenu";
import bg_img from "../../assets/menu/banner3.jpg";
import dessert_bg_img from "../../assets/menu/dessert-bg.jpeg";
import pizza_bg_img from "../../assets/menu/pizza-bg.jpg";
import salad_bg_img from "../../assets/menu/salad-bg.jpg";
import soup_bg_img from "../../assets/menu/soup-bg.jpg";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import MenuCategory from "../../Components/MenuCategory/MenuCategory";

const Menu = () => {
  const [menu] = useMenu();
  const dessert = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const pizza = menu.filter((item) => item.category === "pizza");
  const salad = menu.filter((item) => item.category === "salad");
  const offered = menu.filter((item) => item.category === "offered");

  return (
    <div>
      <Helmet>
        <title>Food Home | menu</title>
      </Helmet>
      <HeroCover
        img={bg_img}
        title="OUR MENU"
        para="Would you like to try a dish?"
      ></HeroCover>

      <SectionTitle
        heading="---Don't miss---"
        subHeading="TODAY'S OFFER"
      ></SectionTitle>
      <MenuCategory items={offered}></MenuCategory>

      {/* dessert item */}
      <MenuCategory
        items={dessert}
        title="dessert"
        para="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        bg_img={dessert_bg_img}
      ></MenuCategory>

      {/* Pizza Items */}

      <MenuCategory
        items={pizza}
        title="pizza"
        para="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        bg_img={pizza_bg_img}
      ></MenuCategory>

      {/* Salads Item */}

      <MenuCategory
        items={salad}
        title="salad"
        para="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        bg_img={salad_bg_img}
      ></MenuCategory>

      {/* Soup Items */}

      <MenuCategory
        items={soup}
        title="soup"
        para="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        bg_img={soup_bg_img}
      ></MenuCategory>
    </div>
  );
};

export default Menu;
