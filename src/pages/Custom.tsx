
import React from 'react';
import { Navbar } from "@/components/Navbar";
import { CustomRequestForm } from "@/components/custom-request/CustomRequestForm";

export default function Custom() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        {/* Header */}
        <section className="pt-32 pb-16 bg-secondary/20">
          <div className="custom-container">
            <div className="max-w-2xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl font-serif font-semibold mb-4">
                Custom Furniture Request
              </h1>
              <p className="text-muted-foreground">
                Tell us about your dream piece and let us bring it to life.
              </p>
            </div>
          </div>
        </section>

        {/* Form Section */}
        <section className="py-16">
          <div className="custom-container">
            <div className="max-w-2xl mx-auto">
              <CustomRequestForm />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
