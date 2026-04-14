import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="max-w-3xl mx-auto px-6 py-24">
      <span className="block text-xs uppercase tracking-[0.3em] mb-4 text-[#737373]">Support</span>
      <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-12">Contact</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-xl font-bold uppercase tracking-tight mb-4">Get in Touch</h2>
          <p className="text-[#737373] leading-relaxed mb-6">
            Have a question about our eyewear? Need help with your order? We're here to help.
          </p>
          <div className="space-y-4 text-sm">
            <p><strong>Email:</strong> support@theother.com</p>
            <p><strong>Phone:</strong> +1 (555) 123-4567</p>
            <p><strong>Hours:</strong> Mon-Fri 9am-6pm EST</p>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-bold uppercase tracking-tight mb-4">Visit Our Studio</h2>
          <p className="text-[#737373] leading-relaxed mb-4">
            Experience our collection in person at our flagship studio.
          </p>
          <address className="not-italic text-sm text-[#737373]">
            123 Design District<br />
            New York, NY 10013<br />
            United States
          </address>
        </div>
      </div>

      {submitted ? (
        <div className="bg-[#F5F5F5] p-8 text-center">
          <iconify-icon icon="lucide:check-circle" className="text-4xl text-green-600 mb-4"></iconify-icon>
          <h3 className="text-xl font-bold uppercase tracking-tight mb-2">Message Sent</h3>
          <p className="text-[#737373]">Thank you for reaching out. We'll get back to you within 24 hours.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-xs font-bold uppercase tracking-widest mb-2">Name</label>
            <input 
              type="text" 
              required
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="w-full px-4 py-4 border border-[#E5E5E5] outline-none focus:border-black transition-colors"
            />
          </div>
          <div>
            <label className="block text-xs font-bold uppercase tracking-widest mb-2">Email</label>
            <input 
              type="email" 
              required
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="w-full px-4 py-4 border border-[#E5E5E5] outline-none focus:border-black transition-colors"
            />
          </div>
          <div>
            <label className="block text-xs font-bold uppercase tracking-widest mb-2">Message</label>
            <textarea 
              required
              rows="5"
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              className="w-full px-4 py-4 border border-[#E5E5E5] outline-none focus:border-black transition-colors resize-none"
            ></textarea>
          </div>
          <button type="submit" className="bg-black text-white px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] hover:bg-[#737373] transition-all">
            Send Message
          </button>
        </form>
      )}
    </div>
  )
}