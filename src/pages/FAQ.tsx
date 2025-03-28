import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const categories = [
  "All Questions",
  "Ordering",
  "Customization",
  "Delivery",
  "Care & Maintenance",
  "Payment"
];

const faqItems = [
  {
    question: "How long does a custom furniture piece take to complete?",
    answer: "The timeframe varies depending on the complexity of the design, materials, and our current workload. A simple piece might take 4-6 weeks, while more complex projects can take 8-12 weeks. During our initial consultation, we'll provide you with a specific timeline for your project."
  },
  {
    question: "Can I request modifications to pieces I see in your catalog?",
    answer: "Absolutely! Our catalog pieces can be customized to your preferences. We can modify dimensions, wood types, finishes, and details to suit your needs. Simply let us know what changes you'd like when making an inquiry."
  },
  {
    question: "Do you offer delivery and installation services?",
    answer: "Yes, we offer white-glove delivery and professional installation for all our furniture pieces. Local delivery is available within a 50-mile radius of our workshop. For destinations beyond this range, we work with specialized furniture shipping partners to ensure safe delivery."
  },
  {
    question: "What types of wood do you typically work with?",
    answer: "We primarily work with sustainable hardwoods including walnut, oak, maple, cherry, and ash. We also offer reclaimed wood options. For specialty projects, we can source exotic woods upon request, though we emphasize environmentally responsible sourcing for all our materials."
  },
  {
    question: "How do I care for and maintain my wooden furniture?",
    answer: "We provide detailed care instructions with each piece. Generally, wooden furniture should be kept away from direct sunlight and heat sources. Dust regularly with a soft cloth, and use a quality wood cleaner or polish 2-4 times per year. For specific finishes, we'll provide customized care instructions."
  },
  {
    question: "Do you offer warranties on your furniture?",
    answer: "Yes, all our furniture comes with a 5-year warranty against manufacturing defects. This covers issues related to joinery, construction, and finish. Normal wear and tear, damage from improper use, or environmental damage (such as sun fading) are not covered under the warranty."
  },
  {
    question: "Can I visit your workshop to see my piece being made?",
    answer: "We welcome clients to visit our workshop during scheduled appointment times. Once your project is underway, we can arrange for you to visit and see the progress. We also provide photo updates throughout the building process."
  },
  {
    question: "What is your payment structure for custom orders?",
    answer: "For custom orders, we require a 50% deposit to begin work, with the remaining balance due before delivery. For projects exceeding a certain amount, we can arrange a payment plan with a deposit, midpoint payment, and final payment."
  }
];

const FAQ = () => {
  const [activeCategory, setActiveCategory] = useState("All Questions");

  return (
    <div className="min-h-screen relative pt-20">
      <div className="absolute inset-0 -z-10">
        <div 
          className="w-full h-full bg-[url('https://images.unsplash.com/photo-1538688525198-9b88f6f53126?q=80&w=3174')] bg-cover bg-center"
          style={{ opacity: 0.9 }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-background" />
      </div>
      <Navbar />
      <main>
        {/* Header */}
        <section className="pt-32 pb-16">
          <div className="custom-container">
            <div className="max-w-2xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl font-serif font-semibold mb-4 text-white">
                Frequently Asked Questions
              </h1>
              <p className="text-gray-200">
                Find answers to common questions about our custom wooden furniture, ordering process, and more.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Content */}
        <section className="py-16">
          <div className="custom-container">
            <div className="max-w-4xl mx-auto">
              {/* Category Filter */}
              <div className="flex flex-wrap justify-center gap-2 mb-12">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      activeCategory === category
                        ? "bg-wood-walnut text-white"
                        : "bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              {/* FAQ Accordion */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <Accordion type="single" collapsible className="w-full space-y-4">
                  {faqItems.map((item, index) => (
                    <AccordionItem key={index} value={`item-${index}`} className="border-b border-muted px-2">
                      <AccordionTrigger className="text-lg font-medium py-4 hover:text-wood-walnut transition-colors">
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground pb-4">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>

              {/* Still have questions */}
              <div className="mt-12 text-center">
                <h3 className="text-xl font-serif font-medium mb-3 text-white">Still have questions?</h3>
                <p className="text-gray-200 mb-6">We're here to help with any questions about our custom wooden furniture.</p>
                <a 
                  href="#contact" 
                  className="inline-block bg-wood-walnut hover:bg-wood-walnut/90 text-white font-medium rounded-md px-6 py-3 transition-all hover-lift"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default FAQ;