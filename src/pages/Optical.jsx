import React, { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { getProductsByType } from '../data/products'

export default function Optical() {
  const allProducts = getProductsByType('optical')
  const [sortBy, setSortBy] = useState('featured')
  const [filterOpen, setFilterOpen] = useState(false)
  const [filterColor, setFilterColor] = useState('all')
  const [filterPrice, setFilterPrice] = useState('all')

  const products = useMemo(() => {
    let filtered = [...allProducts]
    
    if (filterColor !== 'all') {
      filtered = filtered.filter(p => 
        p.colors.some(c => c.name.toLowerCase().includes(filterColor))
      )
    }
    
    if (filterPrice === 'under300') {
      filtered = filtered.filter(p => p.price < 300)
    } else if (filterPrice === '300to400') {
      filtered = filtered.filter(p => p.price >= 300 && p.price <= 400)
    } else if (filterPrice === 'over400') {
      filtered = filtered.filter(p => p.price > 400)
    }

    if (sortBy === 'price-low') {
      filtered.sort((a, b) => a.price - b.price)
    } else if (sortBy === 'price-high') {
      filtered.sort((a, b) => b.price - a.price)
    } else if (sortBy === 'newest') {
      filtered.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0))
    }

    return filtered
  }, [allProducts, sortBy, filterColor, filterPrice])

  return (
    <>
      {/* Header */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="block text-xs uppercase tracking-[0.3em] mb-4 text-[#737373]">Prescription Eyewear</span>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase mb-6">Optical Collection</h1>
          <p className="text-[#737373]">{products.length} eyeglasses</p>
        </div>
      </section>

      {/* Filters */}
      <section className="px-6 pb-12 border-b border-[#E5E5E5]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-end gap-8">
          <div className="flex items-center gap-8 border-b border-[#E5E5E5] pb-2 w-full md:w-auto">
            <div className="relative">
              <button 
                onClick={() => setFilterOpen(!filterOpen)}
                className="flex items-center gap-2 group cursor-pointer"
              >
                <span className="text-xs font-bold uppercase tracking-widest">Filter By</span>
                <iconify-icon icon="lucide:funnel" className="text-lg group-hover:text-[#737373] transition-colors"></iconify-icon>
              </button>
              {filterOpen && (
                <div className="absolute top-full left-0 mt-4 bg-white border border-[#E5E5E5] p-6 min-w-48 z-50 shadow-lg">
                  <div className="mb-4">
                    <span className="text-xs font-bold uppercase tracking-widest block mb-2">Color</span>
                    <select 
                      value={filterColor}
                      onChange={(e) => setFilterColor(e.target.value)}
                      className="w-full px-3 py-2 border border-[#E5E5E5] text-sm"
                    >
                      <option value="all">All Colors</option>
                      <option value="black">Black</option>
                      <option value="gold">Gold</option>
                      <option value="silver">Silver</option>
                      <option value="tortoise">Tortoise</option>
                      <option value="green">Green</option>
                      <option value="purple">Purple</option>
                    </select>
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest block mb-2">Price</span>
                    <select 
                      value={filterPrice}
                      onChange={(e) => setFilterPrice(e.target.value)}
                      className="w-full px-3 py-2 border border-[#E5E5E5] text-sm"
                    >
                      <option value="all">All Prices</option>
                      <option value="under300">Under $300</option>
                      <option value="300to400">$300 - $400</option>
                      <option value="over400">Over $400</option>
                    </select>
                  </div>
                </div>
              )}
            </div>
            <div>
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="flex items-center gap-2 bg-transparent text-xs font-bold uppercase tracking-widest cursor-pointer outline-none"
              >
                <option value="featured">Sort By</option>
                <option value="newest">Newest</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#737373] ml-auto md:ml-0">{products.length} Items</span>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {products.length === 0 && (
        <div className="text-center py-20">
          <p className="text-[#737373]">No products match your filters.</p>
          <button 
            onClick={() => {setFilterColor('all'); setFilterPrice('all')}}
            className="mt-4 text-xs font-bold uppercase tracking-widest border-b border-black"
          >
            Clear Filters
          </button>
        </div>
      )}

      {/* Pagination */}
      {products.length > 0 && (
        <section className="px-6 py-12 border-t border-[#E5E5E5]">
          <div className="max-w-6xl mx-auto flex justify-between items-center">
            <button className="text-xs font-bold uppercase tracking-widest text-[#737373] hover:text-black transition-colors flex items-center gap-2" disabled>
              <iconify-icon icon="lucide:arrow-left"></iconify-icon> Previous
            </button>
            <div className="flex gap-8 text-xs font-bold uppercase tracking-widest">
              <span className="text-black border-b border-black">01</span>
            </div>
            <button className="text-xs font-bold uppercase tracking-widest hover:text-black transition-colors flex items-center gap-2">
              Next <iconify-icon icon="lucide:arrow-right"></iconify-icon>
            </button>
          </div>
        </section>
      )}
    </>
  )
}

function ProductCard({ product }) {
  return (
    <Link to={`/product/${product.id}`} className="group cursor-pointer">
      <div className="relative aspect-[4/5] bg-[#FAFAFA] overflow-hidden mb-6">
        <img 
          src={product.images[0]} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
        />
        {product.isNew && (
          <div className="absolute top-4 left-4">
            <span className="bg-black text-white text-[10px] font-bold uppercase tracking-widest px-2 py-1">New Arrival</span>
          </div>
        )}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors"></div>
        <button className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white text-black px-6 py-3 text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all transform translate-y-4 group-hover:translate-y-0">Quick View</button>
      </div>
      <div className="space-y-1">
        <h3 className="text-lg font-bold uppercase tracking-tight">{product.name}</h3>
        <div className="flex justify-between items-center">
          <p className="text-[#737373] text-xs uppercase tracking-widest">{product.colors[0].name}</p>
          <p className="text-sm font-bold">${product.price}</p>
        </div>
        <div className="flex gap-2 pt-2">
          {product.colors.map((color, index) => (
            <span 
              key={index} 
              className="w-3 h-3 rounded-full border border-[#E5E5E5]"
              style={{ backgroundColor: color.hex }}
            />
          ))}
        </div>
      </div>
    </Link>
  )
}