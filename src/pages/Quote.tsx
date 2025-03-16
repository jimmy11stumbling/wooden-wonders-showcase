
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Quote = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    description: '',
    budget: '',
    timeline: '',
    dimensions: '',
    woodType: '',
    finishPreference: ''
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
      timeline: '',
      dimensions: '',
      woodType: '',
      finishPreference: ''
    });
  };

  return (
    <div className="min-h-screen relative pt-20">
      <div className="absolute inset-0 -z-10">
        <div 
          className="w-full h-full bg-[url('https://images.unsplash.com/photo-1538688525198-9b88f6f53126?q=80&w=3174')] bg-cover bg-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-background" />
      </div>
      
      <div className="custom-container">
        <div className="max-w-2xl mx-auto bg-white/95 backdrop-blur-sm rounded-lg p-6 shadow-lg">
          <h1 className="text-3xl font-serif font-semibold mb-6 text-center">Request a Quote</h1>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Name</label>
              <Input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                placeholder="Your full name"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <Input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                placeholder="your@email.com"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Phone</label>
                <Input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  placeholder="Your phone number"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Project Type</label>
                <Input
                  type="text"
                  value={formData.projectType}
                  onChange={(e) => setFormData({...formData, projectType: e.target.value})}
                  placeholder="e.g., Cabinet, Table"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Project Description</label>
              <Input
                type="text"
                value={formData.description}
                onChange={(e) => setFormData({...formData, description: e.target.value})}
                placeholder="Describe your project"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Budget Range</label>
                <Input
                  type="text"
                  value={formData.budget}
                  onChange={(e) => setFormData({...formData, budget: e.target.value})}
                  placeholder="Your budget range"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Timeline</label>
                <Input
                  type="text"
                  value={formData.timeline}
                  onChange={(e) => setFormData({...formData, timeline: e.target.value})}
                  placeholder="When do you need it?"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Dimensions</label>
              <Input
                type="text"
                value={formData.dimensions}
                onChange={(e) => setFormData({...formData, dimensions: e.target.value})}
                placeholder="Required dimensions if applicable"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Wood Type</label>
                <Input
                  type="text"
                  value={formData.woodType}
                  onChange={(e) => setFormData({...formData, woodType: e.target.value})}
                  placeholder="e.g., Oak, Maple"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Finish Preference</label>
                <Input
                  type="text"
                  value={formData.finishPreference}
                  onChange={(e) => setFormData({...formData, finishPreference: e.target.value})}
                  placeholder="e.g., Natural, Dark"
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
