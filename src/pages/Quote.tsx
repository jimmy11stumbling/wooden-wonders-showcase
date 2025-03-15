
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Quote = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    description: '',
    budget: '',
    timeline: ''
  });
  
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Quote Request Submitted",
      description: "We'll get back to you within 24 hours with a detailed quote.",
    });
    setFormData({
      name: '',
      email: '',
      phone: '',
      projectType: '',
      description: '',
      budget: '',
      timeline: ''
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary/50 to-secondary/10 pt-20">
      <div className="custom-container py-12">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-serif font-semibold mb-6">Request a Quote</h1>
          <p className="text-muted-foreground mb-8">
            Fill out the form below and we'll provide you with a detailed quote for your custom cabinetry project.
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <Input
                  required
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <Input
                  required
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Phone</label>
              <Input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Project Type</label>
              <Input
                required
                type="text"
                placeholder="e.g., Kitchen Cabinets, Bathroom Vanity"
                value={formData.projectType}
                onChange={(e) => setFormData({...formData, projectType: e.target.value})}
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Project Description</label>
              <Textarea
                required
                placeholder="Please describe your project in detail..."
                value={formData.description}
                onChange={(e) => setFormData({...formData, description: e.target.value})}
                className="min-h-[100px]"
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Budget Range</label>
                <Input
                  type="text"
                  placeholder="e.g., $5,000 - $10,000"
                  value={formData.budget}
                  onChange={(e) => setFormData({...formData, budget: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Desired Timeline</label>
                <Input
                  type="text"
                  placeholder="e.g., 2-3 months"
                  value={formData.timeline}
                  onChange={(e) => setFormData({...formData, timeline: e.target.value})}
                />
              </div>
            </div>
            
            <Button type="submit" className="w-full bg-wood-walnut hover:bg-wood-walnut/90">
              Submit Quote Request
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Quote;
