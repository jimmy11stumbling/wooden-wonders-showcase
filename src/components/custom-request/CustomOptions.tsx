
type CustomOption = {
  category: string;
  options: string[];
};

type CustomOptionsProps = {
  options: CustomOption[];
};

const CustomOptions = ({ options }: CustomOptionsProps) => {
  return (
    <div className="space-y-6">
      {options.map((item) => (
        <div key={item.category}>
          <h3 className="text-lg font-medium mb-3">{item.category}</h3>
          <div className="flex flex-wrap gap-2">
            {item.options.map((option) => (
              <span 
                key={option}
                className="bg-white border border-border px-3 py-1 rounded-full text-sm"
              >
                {option}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CustomOptions;
