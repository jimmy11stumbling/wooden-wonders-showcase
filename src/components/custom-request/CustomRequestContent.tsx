
import { useState } from 'react';
import CustomOptions from './CustomOptions';
import ProcessSteps from './ProcessSteps';

type CustomRequestContentProps = {
  isVisible: boolean;
  customOptions: Array<{
    category: string;
    options: string[];
  }>;
  onSelectionChange?: (selection: Record<string, string[]>) => void;
};

const CustomRequestContent = ({ isVisible, customOptions, onSelectionChange }: CustomRequestContentProps) => {
  const [showSelection, setShowSelection] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState<Record<string, string[]>>({});

  const handleSelectionChange = (selection: Record<string, string[]>) => {
    setSelectedOptions(selection);
    if (onSelectionChange) {
      onSelectionChange(selection);
    }
  };

  // Count total selected options
  const totalSelected = Object.values(selectedOptions).reduce(
    (sum, options) => sum + options.length, 0
  );

  return (
    <div className={`${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
      <span className="inline-block text-sm uppercase tracking-wider font-medium text-wood-walnut mb-3">
        Custom Design
      </span>
      <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-6">
        Bring Your Vision to Life
      </h2>
      <p className="text-muted-foreground mb-8">
        Our custom furniture service allows you to create pieces that perfectly fit your space, style, and needs. From initial concept to final delivery, we work closely with you at every step.
      </p>
      
      {/* Custom options */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-medium">Explore Options</h3>
          {totalSelected > 0 && (
            <span className="text-sm bg-wood-walnut/10 text-wood-walnut px-2 py-1 rounded-full">
              {totalSelected} option{totalSelected !== 1 ? 's' : ''} selected
            </span>
          )}
        </div>
        <CustomOptions options={customOptions} onSelectionChange={handleSelectionChange} />
      </div>
      
      {/* Selection summary if any options are selected */}
      {totalSelected > 0 && (
        <div className="bg-secondary/20 p-4 rounded-lg mb-8">
          <button 
            onClick={() => setShowSelection(!showSelection)}
            className="flex justify-between w-full items-center text-left"
          >
            <span className="font-medium">Your Selections</span>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className={`h-5 w-5 transition-transform ${showSelection ? 'rotate-180' : ''}`} 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          
          {showSelection && (
            <div className="mt-3 space-y-2">
              {Object.entries(selectedOptions).map(([category, options]) => (
                <div key={category}>
                  <span className="text-sm font-medium">{category}:</span>
                  <span className="text-sm ml-2">{options.join(', ')}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
      
      {/* Process steps */}
      <div className="mt-12">
        <ProcessSteps />
      </div>
    </div>
  );
};

export default CustomRequestContent;
