import React from 'react'
import { Link } from 'react-router-dom'

export default function Shipping() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-24">
      <span className="block text-xs uppercase tracking-[0.3em] mb-4 text-[#737373]">Support</span>
      <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-12">Shipping</h1>
      
      <div className="space-y-12">
        <section>
          <h2 className="text-xl font-bold uppercase tracking-tight mb-4">Complimentary Express Shipping</h2>
          <p className="text-[#737373] leading-relaxed">
            All orders ship complimentary via express delivery. We partner with trusted carriers to ensure your eyewear arrives safely and promptly.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold uppercase tracking-tight mb-4">Delivery Times</h2>
          <div className="space-y-4">
            <div className="flex justify-between py-4 border-b border-[#E5E5E5]">
              <span>Standard Express</span>
              <span className="text-[#737373]">2-4 business days</span>
            </div>
            <div className="flex justify-between py-4 border-b border-[#E5E5E5]">
              <span>Priority Express</span>
              <span className="text-[#737373]">1-2 business days</span>
            </div>
            <div className="flex justify-between py-4 border-b border-[#E5E5E5]">
              <span>International</span>
              <span className="text-[#737373]">5-10 business days</span>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold uppercase tracking-tight mb-4">Tracking Your Order</h2>
          <p className="text-[#737373] leading-relaxed">
            Once your order ships, you'll receive a confirmation email with tracking information. You can also check your order status by logging into your account.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold uppercase tracking-tight mb-4">Shipping Destinations</h2>
          <p className="text-[#737373] leading-relaxed">
            We currently ship to select international destinations. During checkout, you'll see if we can deliver to your location. Import duties and taxes are calculated at checkout.
          </p>
        </section>

        <div className="pt-8 border-t border-[#E5E5E5]">
          <p className="text-[#737373] mb-4">Have questions about your shipment?</p>
          <Link to="/contact" className="inline-block border border-black px-8 py-4 text-xs uppercase tracking-[0.2em] hover:bg-black hover:text-white transition-all">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  )
}