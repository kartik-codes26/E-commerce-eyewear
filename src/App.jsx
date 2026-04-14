import React, { useState } from 'react'
import { Routes, Route, Link, useLocation } from 'react-router-dom'
import { CartProvider, useCart } from './context/CartContext'
import Home from './pages/Home'
import About from './pages/About'
import Optical from './pages/Optical'
import Sun from './pages/Sun'
import ProductDetail from './pages/ProductDetail'
import Shipping from './pages/Shipping'
import Returns from './pages/Returns'
import Contact from './pages/Contact'
import CartDrawer from './components/CartDrawer'

export default function App() {
  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  )
}

function AppContent() {
  const location = useLocation()
  const isHome = location.pathname === '/'
  const { cart, setIsCartOpen } = useCart()
  
  return (
    <div className={`min-h-screen w-full ${isHome ? 'bg-black text-white' : 'bg-white text-[#111]'} flex flex-col relative font-sans`} style={{ '--foreground': '#111', '--background': '#FFF', '--primary': '#000', '--primary-foreground': '#FFF', '--secondary': '#F5F5F5', '--tertiary': '#737373', '--muted': '#F5F5F5', '--muted-foreground': '#737373', '--card': '#FAFAFA', '--border': '#E5E5E5' }}>
      <Header isHome={isHome} />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/optical" element={<Optical />} />
          <Route path="/sun" element={<Sun />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/shipping" element={<Shipping />} />
          <Route path="/returns" element={<Returns />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer isHome={isHome} />
      <CartDrawer />
    </div>
  )
}

function Header({ isHome }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { cart, setIsCartOpen } = useCart()
  
  return (
    <header className={`sticky top-0 z-50 ${isHome ? 'bg-black/80' : 'bg-white/80'} backdrop-blur-sm border-b ${isHome ? 'border-white/10' : 'border-[#E5E5E5]'} px-6 py-4 flex items-center justify-between`}>
      <div className="flex items-center gap-8">
        <Link to="/" className="text-2xl font-bold tracking-tighter uppercase">{isHome ? 'The Other' : <span className="text-black">The Other</span>}</Link>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium tracking-wide uppercase">
          <Link to="/optical" className={`hover:text-[#737373] transition-colors ${isHome ? 'text-white' : 'text-black'}`}>Optical</Link>
          <Link to="/sun" className={`hover:text-[#737373] transition-colors ${isHome ? 'text-white' : 'text-black'}`}>Sun</Link>
          <Link to="/about" className={`hover:text-[#737373] transition-colors ${isHome ? 'text-white' : 'text-black'}`}>About</Link>
        </nav>
      </div>
      <div className="flex items-center gap-4">
        <button className={`p-2 hover:bg-[#F5F5F5] ${isHome ? 'text-white' : 'text-black'}`}><iconify-icon icon="lucide:search" className="text-xl"></iconify-icon></button>
        <button 
          className={`p-2 hover:bg-[#F5F5F5] relative ${isHome ? 'text-white' : 'text-black'}`}
          onClick={() => setIsCartOpen(true)}
        >
          <iconify-icon icon="lucide:shopping-cart" className="text-xl"></iconify-icon>
          {cart.length > 0 && (
            <span className="absolute -top-1 -right-1 w-5 h-5 bg-black text-white text-[10px] font-bold rounded-full flex items-center justify-center">{cart.length}</span>
          )}
        </button>
        <button className="md:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}><iconify-icon icon="lucide:menu" className="text-xl"></iconify-icon></button>
      </div>
    </header>
  )
}

function Footer({ isHome }) {
  return (
    <footer className={`${isHome ? 'bg-white text-black' : 'bg-black text-white'} px-6 py-16 md:px-12 mt-12`}>
      <div className={`grid grid-cols-1 md:grid-cols-4 gap-12 ${isHome ? 'border-b border-black/10' : 'border-b border-white/10'} pb-12`}>
        <div className="space-y-6">
          <h4 className="text-xl font-bold uppercase tracking-tighter">The Other</h4>
          <p className={`${isHome ? 'text-black/60' : 'text-white/60'} text-sm leading-relaxed`}>Independent eyewear design studio focusing on essential forms and superior materials.</p>
        </div>
        <div>
          <h5 className="text-xs font-bold uppercase tracking-widest mb-6">Shop</h5>
          <ul className={`space-y-4 text-sm ${isHome ? 'text-black/60' : 'text-white/60'}`}>
            <li><Link to="/sun" className="hover:text-primary transition-colors">Sunglasses</Link></li>
            <li><Link to="/optical" className="hover:text-primary transition-colors">Eyeglasses</Link></li>
          </ul>
        </div>
        <div>
          <h5 className="text-xs font-bold uppercase tracking-widest mb-6">Support</h5>
          <ul className={`space-y-4 text-sm ${isHome ? 'text-black/60' : 'text-white/60'}`}>
            <li><Link to="/shipping" className="hover:text-white transition-colors">Shipping</Link></li>
            <li><Link to="/returns" className="hover:text-white transition-colors">Returns</Link></li>
            <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h5 className="text-xs font-bold uppercase tracking-widest mb-6">Newsletter</h5>
          <div className={`flex border-b ${isHome ? 'border-black/30' : 'border-white/30'} pb-2`}>
            <input type="email" placeholder="Email Address" className={`bg-transparent border-none outline-none text-sm w-full ${isHome ? 'text-black' : 'text-white'}`} />
            <button className="text-xs font-bold uppercase tracking-widest">Join</button>
          </div>
        </div>
      </div>
      <div className={`pt-8 text-center text-xs ${isHome ? 'text-black/60' : 'text-white/40'}`}>
        © 2026 — All Rights Reserved The Other
      </div>
    </footer>
  )
}