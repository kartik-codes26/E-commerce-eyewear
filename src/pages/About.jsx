import React from 'react'
import { Link } from 'react-router-dom'

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="block text-xs uppercase tracking-[0.3em] mb-4 text-[#737373]">Our Story</span>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase mb-8">The Other</h1>
          <p className="text-xl md:text-2xl font-light leading-relaxed text-[#737373]">
            Independent eyewear design studio created by <strong>Kartik</strong>, focusing on essential forms and superior materials.
          </p>
        </div>
      </section>

      {/* Image Section */}
      <section className="px-6 pb-24">
        <div className="max-w-6xl mx-auto">
          <img 
            src="https://images.unsplash.com/photo-1509100104035-9e7ca97a9271?q=80&w=1600&auto=format&fit=crop" 
            alt="Craftsmanship" 
            className="w-full aspect-[16/9] object-cover"
          />
        </div>
      </section>

      {/* Founder */}
      <section className="py-24 px-6 bg-[#F5F5F5]">
        <div className="max-w-3xl mx-auto text-center">
          <span className="block text-xs uppercase tracking-[0.3em] mb-4 text-[#c9a961]">Founder</span>
          <h2 className="text-2xl font-bold uppercase tracking-tighter mb-6">Kartik</h2>
          <p className="text-lg leading-relaxed text-[#737373] mb-6">
            With a passion for timeless design and exceptional craftsmanship, Kartik founded The Other to create eyewear that transcends trends. Each piece reflects a commitment to quality, innovation, and the belief that the best design is both functional and beautiful.
          </p>
          <p className="text-lg leading-relaxed text-[#737373]">
            Drawing inspiration from architecture, art, and the natural world, every frame tells a story of dedication to the craft and a vision for the future of eyewear.
          </p>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 px-6 bg-[#F5F5F5]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold uppercase tracking-tighter mb-8">Philosophy</h2>
          <p className="text-lg leading-relaxed text-[#737373] mb-6">
            In the symphony of modernity, The Other is a resonant note of tradition harmonized with innovation. Our designs undergo a meticulous process, where every curve, every line, is a deliberate stroke of genius, playing with light and shadow, volume and space.
          </p>
          <p className="text-lg leading-relaxed text-[#737373]">
            We believe in the power of essential forms. Our frames are designed to be timeless, transcending seasonal trends to become lasting companions. Each piece tells a story of uncompromising dedication to quality and aesthetic refinement.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <ValueCard 
              label="Materials"
              title="Premium Acetate"
              description="Sourced from the finest Italian Mazzucchelli acetate, each frame is hand-polished to achieve a luminous finish that improves with age."
            />
            <ValueCard 
              label="Craftsmanship"
              title="Hand Made"
              description="Every frame is assembled by skilled artisans using time-honored techniques passed down through generations."
            />
            <ValueCard 
              label="Design"
              title="Timeless Aesthetic"
              description="Our designs draw inspiration from architectural forms, creating frames that are both structural and sculptural."
            />
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 px-6 bg-black text-white">
        <div className="max-w-4xl mx-auto">
          <span className="block text-xs uppercase tracking-[0.3em] mb-4 text-[#c9a961]">The Process</span>
          <h2 className="text-3xl font-bold uppercase tracking-tighter mb-12">From Concept to Creation</h2>
          <div className="space-y-12">
            <ProcessStep 
              number="01"
              title="Design"
              description="Our design process begins with sketches, exploring form and proportion until we achieve the perfect balance. Each design is refined through dozens of iterations."
            />
            <ProcessStep 
              number="02"
              title="Prototyping"
              description="Using advanced 3D modeling, we create prototypes that allow us to test fit and function before committing to production tooling."
            />
            <ProcessStep 
              number="03"
              title="Production"
              description="Each frame undergoes a rigorous production process involving over 50 individual steps, from cutting to polishing to final assembly."
            />
            <ProcessStep 
              number="04"
              title="Quality"
              description="Every piece is inspected by hand to ensure it meets our exacting standards. Only frames that pass this final examination become The Other."
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl font-bold uppercase tracking-tighter mb-6">Experience The Other</h2>
          <p className="text-[#737373] mb-8">Visit our showroom or browse the collection online.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/optical" className="px-8 py-4 bg-black text-white text-xs uppercase tracking-[0.2em] hover:bg-[#737373] transition-all">Eyeglasses</Link>
            <Link to="/sun" className="px-8 py-4 border border-black text-black text-xs uppercase tracking-[0.2em] hover:bg-black hover:text-white transition-all">Sunglasses</Link>
          </div>
        </div>
      </section>
    </>
  )
}

function ValueCard({ label, title, description }) {
  return (
    <div>
      <span className="block text-xs uppercase tracking-[0.3em] mb-2 text-[#c9a961]">{label}</span>
      <h3 className="text-xl font-bold uppercase tracking-tight mb-4">{title}</h3>
      <p className="text-[#737373] leading-relaxed">{description}</p>
    </div>
  )
}

function ProcessStep({ number, title, description }) {
  return (
    <div className="flex gap-8">
      <span className="text-2xl font-bold text-[#c9a961]">{number}</span>
      <div>
        <h3 className="text-lg font-bold uppercase mb-2">{title}</h3>
        <p className="text-white/60">{description}</p>
      </div>
    </div>
  )
}