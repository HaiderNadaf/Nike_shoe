import { arrowRight } from "../assets/icons";
import { shoe8 } from "../assets/images";
import Button from "../components/Button";

const SuperQuality = () => {
  return (
    <section
      id="abouts-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          We Provide you
          <span className="text-coral-red"> Super </span>
          <span className="text-coral-red"> Quality </span> Shoes
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Ensuring premium comfort ans style,meticulously crafted footwear is
          design to elevants your experinces, providing u with unmatched
          quality,innovation, and touch of elegance.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Our dedicationto detail and excellence ensure your satisfaction
        </p>
        <div className="mt-11">
          <Button label="Shop Now" iconURL={arrowRight} />
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <img
          src={shoe8}
          alt="product detail"
          width={570}
          height={522}
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default SuperQuality;
