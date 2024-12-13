import React from "react";

const FeaturesSection = () => {
  const features = [
    {
      icon: "fas fa-check-circle",
      title: "Rigorous Quality Control",
      description: "Multi-level inspections ensure every stone meets the highest durability and aesthetic standards.",
    },
    {
      icon: "fas fa-id-card",
      title: "Certified Suppliers & Compliance",
      description: "Sourced from certified suppliers, every stone complies with global and local regulations.",
    },
    {
      icon: "fas fa-user-tie",
      title: "Expert Guidance And Support",
      description: "StonePedia’s specialists provide expert advice on material selection, application, and maintenance.",
    },
    {
      icon: "fas fa-cubes",
      title: "Comprehensive High-Quality Stones",
      description: "Reliable, on-time delivery of stones directly to your project site, ensuring seamless logistics.",
    },
    {
      icon: "fas fa-truck",
      title: "Doorstep Delivery",
      description: "Reliable, on-time delivery of stones directly to your project site, ensuring seamless logistics.",
    },
    {
      icon: "fas fa-clipboard-check",
      title: "Guaranteed Order Fulfillment",
      description: "Accurate and timely order processing to meet all project timelines without delays.",
    },
  ];

  return (
    <div className=" text-white py-16 px-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className=" p-6  text-center flex flex-col items-center"
          >
            <div className="text-pink-500 text-4xl mb-4">
              <i className={feature.icon}></i>
            </div>
            <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
            <p className="text-sm">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesSection;
