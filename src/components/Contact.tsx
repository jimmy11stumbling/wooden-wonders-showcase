import { useState, useRef, useEffect } from 'react';
import { useToast } from "@/components/ui/use-toast";
import { Twitter, Instagram, Facebook } from 'lucide-react';

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
        <div className="max-w-xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-serif font-semibold mb-4">Get in Touch</h2>
          <p className="text-muted-foreground">
            Have a question or want to discuss your project? We'd love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-2 border rounded-md bg-background"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-2 border rounded-md bg-background"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                className="w-full px-4 py-2 border rounded-md bg-background"
                placeholder="Your message..."
              />
            </div>
            <button
              type="submit"
              disabled={formSubmitted}
              className="w-full bg-wood-walnut hover:bg-wood-walnut/90 text-white py-2 px-6 rounded-md transition-colors"
            >
              {formSubmitted ? 'Sending...' : 'Send Message'}
            </button>
          </form>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-medium mb-4">Connect With Us</h3>
              <div className="flex space-x-4">
                <a href="https://facebook.com/woodenwonders" target="_blank" rel="noopener noreferrer" className="bg-secondary p-3 rounded-full hover:bg-secondary/80 transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="bg-secondary p-3 rounded-full hover:bg-secondary/80 transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="bg-secondary p-3 rounded-full hover:bg-secondary/80 transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-4">Visit Our Workshop</h3>
              <p className="text-muted-foreground">
                2022 Zaragoza St.<br />
                Laredo, TX 78040
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-4">Business Hours</h3>
              <p className="text-muted-foreground">
                Monday - Friday: 9am - 6pm<br />
                Saturday: 10am - 4pm<br />
                Sunday: Closed
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;