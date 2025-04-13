import { useEffect, useState } from "react";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import MenuItem from "../../Components/MenuItem/MenuItem";
import useMenu from "../../Hooks/useMenu";

const PopularMenu = () => {
  const [menu] = useMenu();
  const popularMenu = menu.filter((item) => item.category === "popular");

  return (
    <section className="mb-5">
      <SectionTitle heading="Popular Menu" subHeading="From Our Menu">
        {" "}
      </SectionTitle>
      <div className="grid md:grid-cols-2 gap-3">
        {popularMenu.map((item, index) => (
          <MenuItem item={item} key={index}></MenuItem>
        ))}
      </div>
    </section>
  );
};

export default PopularMenu;
