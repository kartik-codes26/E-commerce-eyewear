import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

export default function CartDrawer() {
  const { cart, removeFromCart, cartTotal, isCartOpen, setIsCartOpen } = useCart()

  if (!isCartOpen) return null

  return (
    <div className="fixed inset-0 z-[100]">
      <div className="absolute inset-0 bg-black/50" onClick={() => setIsCartOpen(false)}></div>
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl flex flex-col">
        <div className="p-6 border-b border-[#E5E5E5] flex items-center justify-between">
          <h2 className="text-xl font-bold uppercase tracking-tighter">Shopping Bag</h2>
          <button onClick={() => setIsCartOpen(false)} className="p-2 hover:bg-[#F5F5F5]">
            <iconify-icon icon="lucide:x" className="text-xl"></iconify-icon>
          </button>
        </div>
        
        <div className="flex-1 overflow-y-auto p-6">
          {cart.length === 0 ? (
            <div className="text-center py-12">
              <iconify-icon icon="lucide:shopping-bag" className="text-4xl text-[#E5E5E5] mb-4"></iconify-icon>
              <p className="text-[#737373]">Your bag is empty</p>
            </div>
          ) : (
            <div className="space-y-6">
              {cart.map(item => (
                <div key={item.id} className="flex gap-4">
                  <div className="w-20 h-20 bg-[#F5F5F5] flex-shrink-0">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold uppercase text-sm">{item.name}</h4>
                    <p className="text-xs text-[#737373] mt-1">{item.color} / {item.size}</p>
                    <p className="text-sm mt-2">${item.price}</p>
                  </div>
                  <button onClick={() => removeFromCart(item.id)} className="p-2 hover:bg-[#F5F5F5] self-start">
                    <iconify-icon icon="lucide:trash-2" className="text-lg text-[#737373]"></iconify-icon>
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {cart.length > 0 && (
          <div className="p-6 border-t border-[#E5E5E5] space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm uppercase tracking-widest">Subtotal</span>
              <span className="text-xl font-bold">${cartTotal}</span>
            </div>
            <p className="text-xs text-[#737373]">Shipping & taxes calculated at checkout</p>
            <button className="w-full bg-black text-white py-4 text-sm font-bold uppercase tracking-[0.2em] hover:bg-[#737373] transition-all">
              Checkout
            </button>
            <Link 
              to="/sun" 
              onClick={() => setIsCartOpen(false)}
              className="block text-center text-xs uppercase tracking-widest text-[#737373] hover:text-black"
            >
              Continue Shopping
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}