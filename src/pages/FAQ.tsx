
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// FAQ data
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
  },
  {
    question: "Can you match a specific color or finish?",
    answer: "Yes, we can match existing finishes or create custom color blends. We'll create sample pieces on your chosen wood type for approval before applying the finish to your furniture."
  },
  {
    question: "Do you create furniture for commercial spaces?",
    answer: "Absolutely. We work with interior designers, architects, and business owners to create custom furniture for commercial spaces including offices, restaurants, hotels, and retail environments. We can provide commercial-grade finishes that stand up to heavier use."
  }
];

// FAQ categories
const categories = [
  "All Questions",
  "Custom Orders",
  "Materials",
  "Delivery",
  "Maintenance",
  "Payment"
];

const FAQ = () => {
  const [activeCategory, setActiveCategory] = useState("All Questions");

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        {/* Header */}
        <section className="pt-32 pb-16 bg-secondary/20">
          <div className="custom-container">
            <div className="max-w-2xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl font-serif font-semibold mb-4">
                Frequently Asked Questions
              </h1>
              <p className="text-muted-foreground">
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
                        : "bg-secondary hover:bg-secondary/70 text-foreground"
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
                <h3 className="text-xl font-serif font-medium mb-3">Still have questions?</h3>
                <p className="text-muted-foreground mb-6">We're here to help with any questions about our custom wooden furniture.</p>
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
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 last:border-0">
      <button
        className="flex justify-between items-center w-full py-4 text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-medium text-lg">{question}</span>
        <ChevronDown
          className={`transform transition-transform ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-4 text-muted-foreground">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = () => {
  const faqs = [
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
      answer: "We provide detailed care instructions with each piece. Generally, dust regularly with a soft cloth, avoid direct sunlight, maintain consistent room humidity, and clean with appropriate wood cleaners. We also offer maintenance services and can provide specific care recommendations based on your piece's wood type and finish."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary/50 to-secondary/10 pt-20">
      <div className="custom-container py-12">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-serif font-semibold mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-muted-foreground mb-8">
            Find answers to common questions about our custom furniture and services.
          </p>
          <div className="bg-card rounded-lg p-6">
            {faqs.map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
