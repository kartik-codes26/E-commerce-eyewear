import React from 'react'
import { Link } from 'react-router-dom'

export default function Returns() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-24">
      <span className="block text-xs uppercase tracking-[0.3em] mb-4 text-[#737373]">Support</span>
      <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-12">Returns & Exchanges</h1>
      
      <div className="space-y-12">
        <section>
          <h2 className="text-xl font-bold uppercase tracking-tight mb-4">Easy Returns</h2>
          <p className="text-[#737373] leading-relaxed">
            We want you to love your eyewear. If you're not completely satisfied, you may return or exchange your purchase within 14 days of delivery, provided it remains in original condition with all accessories included.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold uppercase tracking-tight mb-4">Return Process</h2>
          <ol className="space-y-4 text-[#737373]">
            <li className="flex gap-4">
              <span className="font-bold">01</span>
              <span>Contact our team to initiate a return. We'll provide a prepaid shipping label.</span>
            </li>
            <li className="flex gap-4">
              <span className="font-bold">02</span>
              <span>Pack your eyewear securely in the original packaging.</span>
            </li>
            <li className="flex gap-4">
              <span className="font-bold">03</span>
              <span>Ship your return using the provided label.</span>
            </li>
            <li className="flex gap-4">
              <span className="font-bold">04</span>
              <span>Refunds are processed within 5-7 business days of receipt.</span>
            </li>
          </ol>
        </section>

        <section>
          <h2 className="text-xl font-bold uppercase tracking-tight mb-4">What Can Be Returned</h2>
          <ul className="space-y-2 text-[#737373]">
            <li>• Unworn eyewear in original condition</li>
            <li>• All original packaging and accessories</li>
            <li>• Proof of purchase</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold uppercase tracking-tight mb-4">What Cannot Be Returned</h2>
          <ul className="space-y-2 text-[#737373]">
            <li>• eyewear that has been worn or altered</li>
            <li>• Damaged or scratched products</li>
            <li>• Sale items or custom orders</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold uppercase tracking-tight mb-4">Exchanges</h2>
          <p className="text-[#737373] leading-relaxed">
            Need a different size or color? We offer complimentary exchanges for unworn eyewear. Contact our team to arrange your exchange.
          </p>
        </section>

        <div className="pt-8 border-t border-[#E5E5E5]">
          <p className="text-[#737373] mb-4">Need help with a return?</p>
          <Link to="/contact" className="inline-block border border-black px-8 py-4 text-xs uppercase tracking-[0.2em] hover:bg-black hover:text-white transition-all">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  )
}