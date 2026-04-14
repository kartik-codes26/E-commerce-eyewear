import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { getProductById, getProductsByType } from '../data/products'
import { useCart } from '../context/CartContext'

export default function ProductDetail() {
  const { id } = useParams()
  const product = getProductById(id)
  const [selectedSize, setSelectedSize] = useState('standard')
  const [selectedColor, setSelectedColor] = useState(0)
  const { addToCart } = useCart()
  
  if (!product) {
    return (
      <div className="flex-grow flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Product not found</h1>
          <Link to="/sun" className="text-[#737373] hover:text-black">Return to collection</Link>
        </div>
      </div>
    )
  }

  const relatedProducts = getProductsByType(product.type).filter(p => p.id !== product.id).slice(0, 4)

  return (
    <>
      <div className="flex flex-col lg:flex-row min-h-[calc(100vh-80px)]">
        {/* Image Gallery */}
        <div className="lg:w-2/3 grid grid-cols-1 gap-px bg-[#E5E5E5]">
          <div className="bg-white aspect-square md:aspect-video overflow-hidden">
            <img src={product.images[0]} alt={`${product.name} Main`} className="w-full h-full object-cover" />
          </div>
          <div className="grid grid-cols-2 gap-px bg-[#E5E5E5]">
            <div className="bg-white aspect-square overflow-hidden">
              <img src={product.images[1] || product.images[0]} alt={`${product.name} Detail 1`} className="w-full h-full object-cover" />
            </div>
            <div className="bg-white aspect-square overflow-hidden">
              <img src={product.images[2] || product.images[0]} alt={`${product.name} Detail 2`} className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="bg-white aspect-square md:aspect-video overflow-hidden">
            <img src={product.images[2] || product.images[0]} alt={`${product.name} Lifestyle`} className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Product Info Sidebar */}
        <aside className="lg:w-1/3 p-8 md:p-12 lg:sticky lg:top-20 lg:h-[calc(100vh-80px)] overflow-y-auto bg-white">
          <div className="space-y-12">
            {/* Breadcrumbs */}
            <nav className="flex gap-2 text-[10px] font-bold uppercase tracking-widest text-[#737373]">
              <Link to="/sun" className="hover:text-black transition-colors">Shop</Link>
              <span>/</span>
              <Link to="/sun" className="hover:text-black transition-colors">Sun</Link>
              <span>/</span>
              <span className="text-black">{product.name}</span>
            </nav>

            {/* Title & Price */}
            <div className="space-y-4">
              <h1 className="text-5xl font-bold tracking-tighter uppercase leading-none">{product.name}</h1>
              <p className="text-2xl font-light tracking-tight">${product.price}.00</p>
            </div>

            {/* Color Selection */}
            <div className="space-y-4">
              <label className="text-xs font-bold uppercase tracking-widest block">Color: {product.colors[selectedColor].name}</label>
              <div className="flex gap-4">
                {product.colors.map((color, index) => (
                  <button 
                    key={index}
                    onClick={() => setSelectedColor(index)}
                    className={`w-8 h-8 rounded-full hover:ring-2 hover:ring-[#E5E5E5] hover:ring-offset-2 transition-all ${selectedColor === index ? 'ring-2 ring-black ring-offset-2' : ''}`}
                    style={{ backgroundColor: color.hex }}
                  />
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <label className="text-xs font-bold uppercase tracking-widest block">Size</label>
                <button className="text-[10px] font-bold uppercase tracking-widest border-b border-black hover:text-[#737373] hover:border-[#737373] transition-all">Size Guide</button>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <button 
                  onClick={() => setSelectedSize('standard')}
                  className={`border py-4 text-xs font-bold uppercase tracking-widest ${selectedSize === 'standard' ? 'bg-black text-white' : 'border-[#E5E5E5] hover:border-black transition-colors'}`}
                >
                  Standard
                </button>
                <button 
                  onClick={() => setSelectedSize('large')}
                  className={`border py-4 text-xs font-bold uppercase tracking-widest ${selectedSize === 'large' ? 'bg-black text-white' : 'border-[#E5E5E5] hover:border-black transition-colors'}`}
                >
                  Large
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <div className="space-y-4 pt-4">
              <button 
                onClick={() => addToCart(product, selectedSize, product.colors[selectedColor])}
                className="w-full bg-black text-white py-6 text-sm font-bold uppercase tracking-[0.2em] hover:bg-[#737373] transition-all"
              >
                Add to Cart
              </button>
              <p className="text-[10px] text-center text-[#737373] uppercase tracking-widest">Free Express Shipping & Returns</p>
            </div>

            {/* Product Details Accordion */}
            <div className="border-t border-[#E5E5E5] pt-8 space-y-6">
              <details className="group" open>
                <summary className="flex justify-between items-center cursor-pointer list-none">
                  <span className="text-xs font-bold uppercase tracking-widest">Description</span>
                  <iconify-icon icon="lucide:plus" className="group-open:rotate-45 transition-transform"></iconify-icon>
                </summary>
                <div className="pt-4 text-sm leading-relaxed text-[#737373]">
                  <p>{product.description}</p>
                </div>
              </details>
              <details className="group border-t border-[#E5E5E5] pt-6">
                <summary className="flex justify-between items-center cursor-pointer list-none">
                  <span className="text-xs font-bold uppercase tracking-widest">Dimensions</span>
                  <iconify-icon icon="lucide:plus" className="group-open:rotate-45 transition-transform"></iconify-icon>
                </summary>
                <div className="pt-4 text-sm text-[#737373] space-y-2">
                  <div className="flex justify-between"><span>Lens Width</span><span>{product.dimensions.lensWidth}</span></div>
                  <div className="flex justify-between"><span>Bridge Width</span><span>{product.dimensions.bridgeWidth}</span></div>
                  <div className="flex justify-between"><span>Temple Length</span><span>{product.dimensions.templeLength}</span></div>
                </div>
              </details>
              <details className="group border-t border-[#E5E5E5] pt-6">
                <summary className="flex justify-between items-center cursor-pointer list-none">
                  <span className="text-xs font-bold uppercase tracking-widest">Shipping & Returns</span>
                  <iconify-icon icon="lucide:plus" className="group-open:rotate-45 transition-transform"></iconify-icon>
                </summary>
                <div className="pt-4 text-sm text-[#737373]">
                  <p>Complimentary shipping on all orders. Returns accepted within 14 days of delivery in original condition.</p>
                </div>
              </details>
            </div>
          </div>
        </aside>
      </div>

      {/* Related Products */}
      <section className="p-12 border-t border-[#E5E5E5] bg-[#FAFAFA]">
        <h2 className="text-2xl font-bold uppercase tracking-tighter mb-12">You May Also Like</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {relatedProducts.map(related => (
            <Link key={related.id} to={`/product/${related.id}`} className="group cursor-pointer">
              <div className="aspect-[4/5] bg-white mb-4 overflow-hidden">
                <img 
                  src={related.images[0]} 
                  alt={related.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
              </div>
              <h4 className="text-sm font-bold uppercase tracking-tight">{related.name}</h4>
              <p className="text-xs text-[#737373]">${related.price}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}