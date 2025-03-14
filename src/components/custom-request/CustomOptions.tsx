
import { useState } from 'react';

type CustomOption = {
  category: string;
  options: string[];
};

type CustomOptionsProps = {
  options: CustomOption[];
  onSelectionChange?: (selection: Record<string, string[]>) => void;
};

const CustomOptions = ({ options, onSelectionChange }: CustomOptionsProps) => {
  const [selectedOptions, setSelectedOptions] = useState<Record<string, string[]>>({});
  
  const toggleOption = (category: string, option: string) => {
    setSelectedOptions(prev => {
      const newSelection = { ...prev };
      
      if (!newSelection[category]) {
        newSelection[category] = [option];
      } else if (newSelection[category].includes(option)) {
        newSelection[category] = newSelection[category].filter(item => item !== option);
        if (newSelection[category].length === 0) {
          delete newSelection[category];
        }
      } else {
        newSelection[category] = [...newSelection[category], option];
      }
      
      // Call the callback if provided
      if (onSelectionChange) {
        onSelectionChange(newSelection);
      }
      
      return newSelection;
    });
  };
  
  const isSelected = (category: string, option: string) => {
    return selectedOptions[category]?.includes(option) || false;
  };

  return (
    <div className="space-y-6">
      {options.map((item) => (
        <div key={item.category}>
          <h3 className="text-lg font-medium mb-3">{item.category}</h3>
          <div className="flex flex-wrap gap-2">
            {item.options.map((option) => (
              <button 
                key={option}
                onClick={() => toggleOption(item.category, option)}
                className={`px-3 py-1 rounded-full text-sm transition-all ${
                  isSelected(item.category, option) 
                    ? "bg-wood-walnut text-white" 
                    : "bg-white border border-border hover:bg-secondary/50"
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CustomOptions;
