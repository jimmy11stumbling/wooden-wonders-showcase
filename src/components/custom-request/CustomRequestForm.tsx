
import { useState } from 'react';
import { Upload, Check } from 'lucide-react';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const CustomRequestForm = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setFormSubmitted(true);
      // Reset after 3 seconds
      setTimeout(() => setFormSubmitted(false), 3000);
    }, 500);
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
      
      <div>
        <Label htmlFor="description" className="block text-sm font-medium mb-1">Project Description</Label>
        <Textarea 
          id="description" 
          rows={4}
          className="w-full"
          placeholder="Describe your custom furniture needs, including dimensions, materials preferences, and any special requirements..."
        />
      </div>
      
      <div>
        <Label className="block text-sm font-medium mb-1">Upload Reference Images (optional)</Label>
        <div className="border border-dashed border-input rounded-md p-4 text-center">
          <Upload className="h-6 w-6 mx-auto mb-2 text-muted-foreground" />
          <p className="text-sm text-muted-foreground">Drag and drop files here, or click to browse</p>
          <input type="file" multiple className="hidden" />
        </div>
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
