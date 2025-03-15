
import { useState, useRef, useEffect } from 'react';
import { MapPin, Mail, Phone, Send } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const { toast } = useToast();
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message')
    };

    setFormSubmitted(true);
    
    try {
      // Here you would normally send the data to your backend
      // For now we'll simulate an API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you within 24 hours.",
        variant: "default",
      });
      
      // Clear form
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again later or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setFormSubmitted(false);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      id="contact" 
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-secondary/10 to-background"
    >
      <div className="custom-container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-sm uppercase tracking-wider font-medium text-wood-walnut mb-3">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-6">
            Contact Wooden Wonders
          </h2>
          <p className="text-muted-foreground">
            Whether you have a question about our custom furniture, need a quote, or want to discuss a project, we're here to help.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className={`${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <Tabs defaultValue="info" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="info">Contact Info</TabsTrigger>
                <TabsTrigger value="map">Map & Directions</TabsTrigger>
              </TabsList>
              
              <TabsContent value="info" className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-wood-walnut/10 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-wood-walnut" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">Workshop Address</h3>
                    <p className="text-muted-foreground">
                      2022 Zaragoza St.<br />
                      Laredo, TX<br />
                      United States
                    </p>
                    <p className="text-sm mt-2">
                      <strong>Workshop Hours:</strong> Monday-Friday 9am-5pm, Saturday 10am-4pm
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-wood-walnut/10 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-wood-walnut" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">Email Us</h3>
                    <p className="text-muted-foreground">
                      info@cabinetsbydesign.com<br />
                      custom@cabinetsbydesign.com
                    </p>
                    <p className="text-sm mt-2">
                      We typically respond to emails within 24 hours.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-wood-walnut/10 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-wood-walnut" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">Call Us</h3>
                    <p className="text-muted-foreground">
                      (956) 645-1575<br />
                      Mon-Fri 9am-5pm CST
                    </p>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h3 className="text-lg font-medium mb-3">Follow Us</h3>
                  <div className="flex space-x-4">
                    <a href="#" className="bg-secondary p-3 rounded-full hover:bg-secondary/80 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.668.072 4.948c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.668-.014 4.948-.072c4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                    </a>
                    <a href="#" className="bg-secondary p-3 rounded-full hover:bg-secondary/80 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                      </svg>
                    </a>
                    <a href="#" className="bg-secondary p-3 rounded-full hover:bg-secondary/80 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                      </svg>
                    </a>
                    <a href="#" className="bg-secondary p-3 rounded-full hover:bg-secondary/80 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.441 16.892c-2.102.144-6.784.144-8.883 0-2.276-.156-2.541-1.27-2.558-4.892.017-3.629.285-4.736 2.558-4.892 2.099-.144 6.782-.144 8.883 0 2.277.156 2.541 1.27 2.559 4.892-.018 3.629-.285 4.736-2.559 4.892zm-6.441-7.234l4.917 2.338-4.917 2.346v-4.684z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="map">
                <div className="bg-secondary/20 p-1 rounded-lg shadow-sm">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.5224132254584!2d-99.51112792374607!3d27.5062776276753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x866120f318c57223%3A0x9e8a89b1bf1a7c0c!2s2022%20Zaragoza%20St%2C%20Laredo%2C%20TX%2078040!5e0!3m2!1sen!2sus!4v1709081230044!5m2!1sen!2sus" 
                    width="100%" 
                    height="450" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Google Maps location of Cabinets by Design"
                    className="rounded-lg"
                  ></iframe>
                </div>
                <div className="mt-4">
                  <h3 className="text-lg font-medium mb-2">Getting Here</h3>
                  <p className="text-muted-foreground mb-4">
                    Our workshop is conveniently located in Laredo, TX. Visit us to discuss your custom cabinet needs in person.
                  </p>
                  <Button variant="outline" size="sm" className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    Get Directions
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </div>
          
          {/* Contact Form */}
          <div className={`${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}>
            <div className="bg-white shadow-lg rounded-lg p-8">
              <h3 className="text-xl font-serif font-medium mb-6">Send Us a Message</h3>
              
              {formSubmitted ? (
                <div className="text-center py-12">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                    <Send className="h-8 w-8 text-green-600" />
                  </div>
                  <h4 className="text-lg font-medium mb-2">Message Sent!</h4>
                  <p className="text-muted-foreground">Thanks for reaching out. We'll get back to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                      <input 
                        type="text" 
                        id="name" 
                        required
                        className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-1 focus:ring-wood-walnut"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                      <input 
                        type="email" 
                        id="email" 
                        required
                        className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-1 focus:ring-wood-walnut"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-1">Subject</label>
                    <select 
                      id="subject" 
                      className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-1 focus:ring-wood-walnut"
                    >
                      <option value="">Select a subject</option>
                      <option value="custom-inquiry">Custom Furniture Inquiry</option>
                      <option value="quote">Request a Quote</option>
                      <option value="workshop-visit">Schedule Workshop Visit</option>
                      <option value="general">General Question</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                    <textarea 
                      id="message" 
                      rows={4}
                      required
                      className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-1 focus:ring-wood-walnut"
                      placeholder="Please provide details about your inquiry..."
                    ></textarea>
                  </div>
                  
                  <div className="flex items-start">
                    <input 
                      type="checkbox" 
                      id="privacy" 
                      required
                      className="mt-1 mr-2"
                    />
                    <label htmlFor="privacy" className="text-sm text-muted-foreground">
                      I agree to the privacy policy and consent to being contacted regarding my inquiry.
                    </label>
                  </div>
                  
                  <Button type="submit" className="w-full bg-wood-walnut hover:bg-wood-walnut/90 text-white">
                    Send Message
                  </Button>
                </form>
              )}
              
              <p className="text-sm text-muted-foreground mt-6">
                By submitting this form, you agree to our <a href="#" className="text-wood-walnut hover:underline">Privacy Policy</a> and consent to being contacted regarding your inquiry.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
