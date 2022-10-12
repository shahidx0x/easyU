import { Carousel } from "../components/Carousel";
import { ServiceCard } from "../components/ServiceCard";
import { scd } from "../Data/ServiceCardData";

export const Home = () => {
  return (
    <main>
      <Carousel />
      <h3 className="text-center font-semibold text-5xl mt-10">Our Top Services</h3>
      <div className="mt-20 grid grid-cols-3 gap-6 ">
        {scd.map((data, index) => (
          <ServiceCard key={index} props={data} />
        ))}
      </div>
    </main>
  );
};
