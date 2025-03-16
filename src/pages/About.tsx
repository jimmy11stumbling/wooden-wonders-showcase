
import React from 'react';
import { Navbar } from "@/components/Navbar";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        {/* Header */}
        <section className="pt-32 pb-16 bg-secondary/20">
          <div className="custom-container">
            <div className="max-w-2xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl font-serif font-semibold mb-4">
                About Our Craft
              </h1>
              <p className="text-muted-foreground">
                Discover our passion for creating timeless wooden furniture that combines traditional craftsmanship with modern design.
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16">
          <div className="custom-container">
            <div className="max-w-4xl mx-auto grid gap-12">
              <div className="text-center">
                <h2 className="text-2xl font-serif font-medium mb-4">Our Story</h2>
                <p className="text-muted-foreground">
                  With over two decades of experience in fine woodworking, we've built our reputation on creating exceptional custom furniture that stands the test of time. Each piece is carefully crafted in our workshop using traditional techniques and the finest materials.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <h3 className="font-serif font-medium mb-2">Craftsmanship</h3>
                  <p className="text-muted-foreground">Every piece is handcrafted using time-tested joinery techniques.</p>
                </div>
                <div className="text-center">
                  <h3 className="font-serif font-medium mb-2">Quality</h3>
                  <p className="text-muted-foreground">We use only the finest sustainably sourced hardwoods.</p>
                </div>
                <div className="text-center">
                  <h3 className="font-serif font-medium mb-2">Design</h3>
                  <p className="text-muted-foreground">Contemporary designs that complement any space.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
