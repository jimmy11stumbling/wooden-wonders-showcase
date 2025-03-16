
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

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
          style={{ opacity: 0.9 }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-background" />
      </div>

      <div className="custom-container py-12">
        <div className="max-w-2xl mx-auto bg-white/95 backdrop-blur-sm rounded-lg p-8 shadow-lg">
          <h1 className="text-4xl font-serif font-semibold mb-6 text-center">Request a Quote</h1>
          <p className="text-muted-foreground mb-8 text-center">
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
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <Input
                  required
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  placeholder="your@email.com"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Phone</label>
              <Input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                placeholder="(123) 456-7890"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Project Type</label>
              <Input
                required
                type="text"
                value={formData.projectType}
                onChange={(e) => setFormData({...formData, projectType: e.target.value})}
                placeholder="e.g., Kitchen Cabinets, Dining Table, etc."
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Project Description</label>
              <Textarea
                required
                value={formData.description}
                onChange={(e) => setFormData({...formData, description: e.target.value})}
                placeholder="Please describe your project in detail..."
                className="h-32"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Budget Range</label>
                <Input
                  type="text"
                  value={formData.budget}
                  onChange={(e) => setFormData({...formData, budget: e.target.value})}
                  placeholder="e.g., $5,000 - $10,000"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Desired Timeline</label>
                <Input
                  type="text"
                  value={formData.timeline}
                  onChange={(e) => setFormData({...formData, timeline: e.target.value})}
                  placeholder="e.g., 2-3 months"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Dimensions (if applicable)</label>
              <Input
                type="text"
                value={formData.dimensions}
                onChange={(e) => setFormData({...formData, dimensions: e.target.value})}
                placeholder="e.g., 72"W x 36"D x 30"H"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Preferred Wood Type</label>
                <Input
                  type="text"
                  value={formData.woodType}
                  onChange={(e) => setFormData({...formData, woodType: e.target.value})}
                  placeholder="e.g., Walnut, Oak, Maple"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Finish Preference</label>
                <Input
                  type="text"
                  value={formData.finishPreference}
                  onChange={(e) => setFormData({...formData, finishPreference: e.target.value})}
                  placeholder="e.g., Natural, Dark Stain"
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
