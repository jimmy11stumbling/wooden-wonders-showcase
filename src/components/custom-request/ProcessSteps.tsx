
const ProcessSteps = () => {
  const steps = [
    "Initial consultation to discuss your needs and ideas",
    "Design concept and material selection",
    "Detailed proposal with sketches and pricing",
    "Crafting your custom piece with regular updates",
    "Delivery and installation in your space"
  ];

  return (
    <div>
      <h3 className="text-lg font-medium mb-4">Our Custom Process</h3>
      <ol className="space-y-3">
        {steps.map((step, index) => (
          <li key={index} className="flex items-start">
            <span className="bg-wood-walnut text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5 flex-shrink-0">
              {index + 1}
            </span>
            <p className="text-sm">{step}</p>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default ProcessSteps;
