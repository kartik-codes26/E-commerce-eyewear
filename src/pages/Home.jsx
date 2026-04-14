import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center text-center bg-black text-white px-6 py-32">
        <div className="max-w-4xl">
          <span className="block text-xs uppercase tracking-[0.3em] mb-6 text-[#c9a961]">Made for the Few</span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight mb-8">The Art of the Frame</h1>
          <Link to="/sun" className="inline-block border border-white px-8 py-4 text-xs uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all">Discover the Frame</Link>
        </div>
      </section>

      {/* Functional Jewellery Section */}
      <section className="py-32 bg-white text-black text-center px-6">
        <div className="max-w-2xl mx-auto">
          <span className="block text-xs uppercase tracking-[0.3em] mb-4 text-[#c9a961]">Functional Jewellery</span>
          <h2 className="text-3xl md:text-4xl font-light mb-8">The unparalleled durability of titanium.</h2>
          <Link to="/about" className="inline-block border border-black px-8 py-4 text-xs uppercase tracking-[0.2em] hover:bg-black hover:text-white transition-all">Reveal the Design</Link>
        </div>
      </section>

      {/* Collections Preview */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="block text-xs uppercase tracking-[0.3em] mb-4 text-[#737373]">Timeless Designs</span>
            <p className="text-[#737373] max-w-lg mx-auto">Each and every pair of our glasses is the result of a journey, from concept to creation.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <CollectionCard 
              image="https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=800&auto=format&fit=crop"
              title="The Apollo"
              tagline="New Arrival"
              link="/product/apollo"
            />
            <CollectionCard 
              image="https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=800&auto=format&fit=crop"
              title="The Luna"
              tagline="Classic Silhouette"
              link="/product/luna"
            />
            <CollectionCard 
              image="https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?q=80&w=800&auto=format&fit=crop"
              title="The Horizon"
              tagline="Bold Statement"
              link="/product/horizon"
            />
          </div>
        </div>
      </section>

      {/* About Teaser */}
      <section className="py-32 bg-black text-white text-center px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-xl md:text-2xl font-light leading-relaxed italic mb-8">
            The Other introduces an innovative approach to eyewear. Each pair is a harmonious blend of design, timeless aesthetics, function and comfort.
          </p>
          <Link to="/about" className="inline-block border border-white px-8 py-4 text-xs uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all">Discover More</Link>
        </div>
      </section>

      {/* Features */}
      <section className="grid grid-cols-1 md:grid-cols-2">
        <div className="py-20 px-8 bg-white text-center border border-[#E5E5E5]">
          <span className="block text-xs uppercase tracking-[0.3em] mb-4 text-[#c9a961]">Limited Edition</span>
          <h3 className="text-2xl font-light mb-4">Designed at the intersection of art and science.</h3>
        </div>
        <div className="py-20 px-8 bg-[#F5F5F5] text-center border border-[#E5E5E5]">
          <span className="block text-xs uppercase tracking-[0.3em] mb-4 text-[#c9a961]">Made to Last</span>
          <h3 className="text-2xl font-light mb-4">World-class innovation with a human touch.</h3>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-32 px-6 bg-[#F5F5F5] text-center">
        <div className="max-w-xl mx-auto">
          <span className="block text-xs uppercase tracking-[0.3em] mb-4 text-[#737373]">Stay up to date and never miss out.</span>
          <form className="flex flex-col md:flex-row gap-4 mt-8">
            <input 
              type="email" 
              placeholder="Email address" 
              className="flex-1 px-6 py-4 border border-[#ddd] bg-white text-black outline-none focus:border-black"
            />
            <button type="submit" className="px-8 py-4 bg-black text-white text-xs uppercase tracking-[0.15em] hover:bg-[#c9a961] transition-all">
              Join the community
            </button>
          </form>
        </div>
      </section>
    </>
  )
}

function CollectionCard({ image, title, tagline, link }) {
  return (
    <Link to={link} className="group block">
      <div className="aspect-[3/4] bg-[#F5F5F5] mb-6 overflow-hidden relative">
        <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
        {tagline && (
          <span className="absolute top-4 left-4 bg-white px-3 py-2 text-[10px] uppercase tracking-widest">{tagline}</span>
        )}
      </div>
      <div className="text-center">
        <h3 className="text-lg font-medium mb-1">{title}</h3>
        <span className="text-xs uppercase tracking-widest text-[#737373] border-b border-black pb-1">The Origins</span>
      </div>
    </Link>
  )
}