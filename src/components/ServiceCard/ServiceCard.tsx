import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import Footer from "../Footer";

const ServiceCard: React.FC<{ title: string; description: string }> = ({
  title,
  description,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0,
  });

  // Trigger animation once component is in view
  if (inView && !isVisible) {
    setIsVisible(true);
  }

  return (
    <Link href="#">
      <div
        ref={ref}
        className={`group rounded-lg border cursor-pointer border-transparent px-5 py-4 transition-all ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        } hover:border-green-600 hover:bg-green-700 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 shadow-md`}
      >
        <h2 className="mb-3 text-2xl font-bold text-white">{title} →</h2>
        <p className="m-0 max-w-[30ch] text-sm opacity-50 text-white">
          {description}
        </p>
      </div>
    </Link>
  );
};

const ServicesSection: React.FC = () => {
  return (
    <>
      <div className="mb-32 py-12 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <ServiceCard
          title="Fertilizers"
          description="Explore our range of high-quality fertilizers for optimal crop growth."
        />
        <ServiceCard
          title="Seeds"
          description="Browse our selection of premium seeds to maximize your crop yield."
        />
        <ServiceCard
          title="Consultancy"
          description="Get expert advice and guidance from our agricultural consultants."
        />
        <ServiceCard
          title="Equipment"
          description="Discover essential farming equipment to streamline your operations."
        />
      </div>
      <Footer />
    </>
  );
};

export default ServicesSection;
