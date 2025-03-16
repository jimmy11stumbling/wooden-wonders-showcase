
import { useState } from 'react';
import { Upload, Check } from 'lucide-react';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

type CustomRequestFormProps = {
  selectedOptions?: Record<string, string[]>;
};

const CustomRequestForm = ({ selectedOptions = {} }: CustomRequestFormProps) => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const { toast } = useToast();
  
  const hasSelections = Object.keys(selectedOptions).length > 0;
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const fileArray = Array.from(e.target.files);
      setUploadedFiles(prev => [...prev, ...fileArray]);
      
      // Show success toast
      if (fileArray.length > 0) {
        toast({
          title: `${fileArray.length} file${fileArray.length === 1 ? '' : 's'} added`,
          description: "Your reference images have been attached to your request.",
        });
      }
    }
  };
  
  const removeFile = (index: number) => {
    setUploadedFiles(prev => prev.filter((_, i) => i !== index));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setFormSubmitted(true);
      
      // Show success toast
      toast({
        title: "Request Submitted!",
        description: "We'll be in touch within 24 hours to discuss your custom project.",
      });
      
      // Reset after 3 seconds
      setTimeout(() => setFormSubmitted(false), 3000);
    }, 500);
  };

  // Format selected options for the form
  const formatSelectedOptions = () => {
    if (!hasSelections) return '';
    
    return Object.entries(selectedOptions)
      .map(([category, options]) => `${category}: ${options.join(', ')}`)
      .join('\n');
  };

  if (formSubmitted) {
    return (
      <div className="text-center py-12">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
          <Check className="h-8 w-8 text-green-600" />
        </div>
        <h4 className="text-lg font-medium mb-2">Request Submitted!</h4>
        <p className="text-muted-foreground">We'll be in touch within 24 hours to discuss your custom project.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="name" className="block text-sm font-medium mb-1">Name</Label>
          <Input 
            type="text" 
            id="name" 
            required
            className="w-full"
          />
        </div>
        <div>
          <Label htmlFor="email" className="block text-sm font-medium mb-1">Email</Label>
          <Input 
            type="email" 
            id="email" 
            required
            className="w-full"
          />
        </div>
      </div>
      
      <div>
        <Label htmlFor="furniture-type" className="block text-sm font-medium mb-1">Furniture Type</Label>
        <select 
          id="furniture-type" 
          className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-1 focus:ring-wood-walnut"
        >
          <option value="">Select a furniture type</option>
          <option value="table">Table</option>
          <option value="chair">Chair</option>
          <option value="cabinet">Cabinet</option>
          <option value="bed">Bed</option>
          <option value="desk">Desk</option>
          <option value="shelving">Shelving</option>
          <option value="other">Other (specify below)</option>
        </select>
      </div>
      
      {/* Display selected options if any */}
      {hasSelections && (
        <div>
          <Label htmlFor="selected-options" className="block text-sm font-medium mb-1">
            Selected Options
          </Label>
          <div className="bg-secondary/10 p-3 rounded-md text-sm">
            {Object.entries(selectedOptions).map(([category, options]) => (
              <div key={category} className="mb-1 last:mb-0">
                <span className="font-medium">{category}:</span> {options.join(', ')}
              </div>
            ))}
          </div>
        </div>
      )}
      
      <div>
        <Label htmlFor="description" className="block text-sm font-medium mb-1">Project Description</Label>
        <Textarea 
          id="description" 
          rows={4}
          className="w-full"
          placeholder="Describe your custom furniture needs, including dimensions, materials preferences, and any special requirements..."
          defaultValue={hasSelections ? `My preferences include:\n${formatSelectedOptions()}\n\nAdditional details:` : ''}
        />
      </div>
      
      <div>
        <Label className="block text-sm font-medium mb-1">Upload Reference Images (optional)</Label>
        <div className="border border-dashed border-input rounded-md p-4 text-center">
          <input 
            type="file" 
            id="file-upload"
            multiple 
            className="hidden" 
            onChange={handleFileChange}
          />
          <label 
            htmlFor="file-upload"
            className="cursor-pointer block w-full"
          >
            <Upload className="h-6 w-6 mx-auto mb-2 text-muted-foreground" />
            <p className="text-sm text-muted-foreground">
              Drag and drop files here, or click to browse
            </p>
          </label>
        </div>
        
        {/* Display uploaded files */}
        {uploadedFiles.length > 0 && (
          <div className="mt-3 space-y-2">
            {uploadedFiles.map((file, index) => (
              <div key={index} className="flex items-center justify-between bg-secondary/10 p-2 rounded">
                <span className="text-sm truncate max-w-[80%]">{file.name}</span>
                <button 
                  type="button"
                  onClick={() => removeFile(index)}
                  className="text-red-500 hover:text-red-700"
                >
                  &times;
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
      
      <Button 
        type="submit"
        className="w-full bg-wood-walnut hover:bg-wood-walnut/90 text-white font-medium rounded-md px-6 py-3 transition-all"
      >
        Submit Request
      </Button>
    </form>
  );
};

export default CustomRequestForm;
