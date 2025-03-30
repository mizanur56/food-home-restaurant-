import { useState } from "react";
import HeroCover from "../../Components/HeroCover/HeroCover";
import shopImage from "../../assets/shop/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../Hooks/useMenu";
import FoodCard from "../../Components/FoodCard/FoodCard";
import CategoryFoodCard from "../../Components/CategoryFoodCard/CategoryFoodCard";
import { useParams } from "react-router-dom";

const Shop = () => {
  const categories = ["dessert", "soup", "pizza", "salad"];
  const { category } = useParams();
  const initialIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [menu] = useMenu();
  const dessert = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const pizza = menu.filter((item) => item.category === "pizza");
  const salad = menu.filter((item) => item.category === "salad");
  const drink = menu.filter((item) => item.category === "drinks");

  return (
    <div>
      <HeroCover
        img={shopImage}
        title="OUR SHOP "
        para="Would you like to try a dish?"
      ></HeroCover>
      <div className="max-w-5xl mx-auto">
        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList>
            <Tab>Dessert</Tab>
            <Tab>Soups</Tab>
            <Tab>Pizza</Tab>
            <Tab>Salad</Tab>
            <Tab>Drinks</Tab>
          </TabList>
          <TabPanel>
            <CategoryFoodCard items={dessert}></CategoryFoodCard>
          </TabPanel>
          <TabPanel>
            <CategoryFoodCard items={soup}></CategoryFoodCard>
          </TabPanel>
          <TabPanel>
            <CategoryFoodCard items={pizza}></CategoryFoodCard>
          </TabPanel>
          <TabPanel>
            <CategoryFoodCard items={salad}></CategoryFoodCard>
          </TabPanel>
          <TabPanel>
            <CategoryFoodCard items={drink}></CategoryFoodCard>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Shop;
