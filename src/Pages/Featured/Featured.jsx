import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import featuredImage from "../../assets/home/featured.jpg";
import "../Featured/feature.css";

const Featured = () => {
  return (
    <section className="feature_item bg-fixed text-white">
      <SectionTitle
        heading="Check it Out"
        subHeading="FEATURED ITEM"
      ></SectionTitle>

      <div className="md:flex items-center justify-center gap-4 p-12">
        <img
          className="w-[380px] flex-1 p-10 rounded-2xl"
          src={featuredImage}
          alt=""
        />
        <div className="flex-1">
          <p>March 20, 2025</p>
          <h4>WHERE CAN I GET SOME?</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            voluptate facere, deserunt dolores maiores quod nobis quas quasi.
            Eaque repellat recusandae ad laudantium tempore consequatur
            consequuntur omnis ullam maxime tenetur.
          </p>
          <button className="bg-teal-700 text-white p-3 my-5">Order Now</button>
        </div>
      </div>
    </section>
  );
};

export default Featured;
